import { BYTES_MODULE } from '/JS/bytes.js';
import { PRODUCT_MODULE } from '/JS/products.js';
import { TEMPLATES } from '/JS/templates.js';

const suppliersInput = document.getElementById('suppliers');
const productsSection = document.getElementById('products_section_grid');

const sortBySelectInput = document.getElementById('sort_select');
const sortDirInput = document.getElementById('sort_dir');

const suppliers = PRODUCT_MODULE.getSuppliers();

const params = new URLSearchParams(window.location.search);
const suppliersString = params.get('suppliers');

const supplierFilterBoxes = {};

function searchChanged() {
    const sortByOption = sortBySelectInput.selectedOptions[0];
    const sortBy = sortByOption.value;
    const shouldSort = sortBy !== '';
    const sortDir = sortDirInput.checked;

    const children = productsSection.children;
    while (children.length > 0) {
        children[0].remove();
    }

    const includeSuppliers = [];
    for (const [i, v] of Object.entries(supplierFilterBoxes)) {
        if (v.checked === true) {
            includeSuppliers.push(i);
        }
    }

    const newResults = [];
    includeSuppliers.forEach(supplier => {
        for (const product of Object.values(PRODUCT_MODULE.getSupplierProducts(supplier))) {
            newResults.push(product);
        }
    });

    if (shouldSort === true) {
        newResults.sort((a, b) => {
            let res;
            if (sortBy === 'amount') {
                res = BYTES_MODULE.toNum(b.amount) - BYTES_MODULE.toNum(a.amount);
            } else if (sortBy === 'price') {
                res = a.price - b.price;
            } else if (sortBy === 'amount_price') {
                const aAmount = BYTES_MODULE.toNum(a.amount);
                const bAmount = BYTES_MODULE.toNum(b.amount);
                if (aAmount === Infinity && bAmount === Infinity) {
                    res = a.price - b.price;
                } else {
                    if (aAmount === Infinity) {
                        res = -1;
                    } else if (bAmount === Infinity) {
                        res = 1;
                    } else {
                        res = (bAmount / b.price) - (aAmount / a.price);
                    }
                }
            }
            if (sortDir === false) {
                res = -res;
            }
            return res;
        });
    }

    for (const product of newResults) {
        const supplier = product.supplier;
        const productUrl = new URLSearchParams();
        productUrl.append('supplier', supplier);
        productUrl.append('product', product.id);
        const [link, container, image] = TEMPLATES.product(`product?${productUrl.toString()}`, `Images/${supplier}.png`);

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('product_details');

        const topDetailsContainer = document.createElement('div');
        topDetailsContainer.classList.add('product_top_details');

        const detailsName = document.createElement('div');
        detailsName.classList.add('product_name');
        detailsName.title = product.name;
        detailsName.innerHTML = product.name;

        const detailsPrice = document.createElement('div');
        detailsPrice.classList.add('product_price');
        detailsPrice.innerHTML = product.price.toString() + ',-';

        const detailsAmount = document.createElement('div');
        detailsAmount.classList.add('product_amount');
        detailsAmount.innerHTML = BYTES_MODULE.formatBytes(product.amount);

        topDetailsContainer.appendChild(detailsName);
        topDetailsContainer.appendChild(detailsAmount);
        detailsContainer.appendChild(topDetailsContainer);
        detailsContainer.appendChild(detailsPrice);

        container.appendChild(detailsContainer);

        productsSection.appendChild(link);
    }
}

suppliers.forEach(v => {
    const id = v + '_checkbox';
    const container = document.createElement('div');
    container.class = 'container';
    const link = document.createElement('a');
    link.class = 'form_link';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = id;
    input.checked = true;
    const label = document.createElement('label');
    label.for = id;
    label.innerHTML = PRODUCT_MODULE.getSupplierName(v);
    link.appendChild(input);
    container.appendChild(link);
    container.appendChild(label);
    suppliersInput.appendChild(container);
    supplierFilterBoxes[v] = input;
    input.oninput = () => {
        searchChanged();
    }
});

sortBySelectInput.oninput = () => {
    searchChanged();
}

sortDirInput.oninput = () => {
    searchChanged();
}

if (suppliersString) {
    Object.values(supplierFilterBoxes).forEach(v => {
        v.checked = false;
    });
    suppliersString.split(',').forEach(v => {
        supplierFilterBoxes[v].checked = true;
    });
}

searchChanged();