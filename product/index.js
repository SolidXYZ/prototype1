import { PRODUCT_MODULE } from '../JS/products.js';
import { BYTES_MODULE } from '../JS/bytes.js';

const loc = document.location;

const params = new URLSearchParams(loc.search);
const supplierName = params.get('supplier');
const productName = params.get('product');

const product = PRODUCT_MODULE.getProduct(supplierName, productName);

document.getElementById('product_link').href = product.product_link;

const supplier_icon = document.getElementById('supplier_icon');
supplier_icon.src = `../Images/${supplierName}.png`;
supplier_icon.alt = supplierName + '_icon';
document.getElementById('supplier_name').innerHTML = PRODUCT_MODULE.getSupplierName(supplierName);

document.getElementById('product_name').innerHTML = product.name;

const productPropertiesBody = document.getElementById('product_properties_body');

function fillTableInfo(valueCell, info) {
    if (info !== undefined) {
        const table = document.createElement('table');
        const tbody = document.createElement('tbody');
        for (const [name, limit] of Object.entries(info)) {
            const tr = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.classList.add('table_cell');
            const limitCell = document.createElement('td');
            limitCell.classList.add('table_cell');
            if (name === 'speed') {
                nameCell.innerHTML = 'Speed';
                limitCell.innerHTML = `max ${limit[0].toString()} ${limit[1]}/s`;
            } else if (name === 'age') {
                nameCell.innerHTML = 'Age';
                limitCell.innerHTML = `${limit[0]} ${limit[1].toString()}`;
            } else {
                console.warn('limitation has no format:', name, limit);
            }
            tr.appendChild(nameCell);
            tr.appendChild(limitCell);
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        valueCell.appendChild(table);
    } else {
        valueCell.innerHTML = 'No';
    }
}

const properties = [
    ['Product name', true, () => {return product.name;}],
    ['Supplier', true, () => {return PRODUCT_MODULE.getSupplierName(product.supplier);}],
    ['Price', true, () => {return product.price.toString();}],
    ['Amount', true, () => {return BYTES_MODULE.formatBytes(product.amount);}],
    ['Term', true, () => {return product.term;}],
    ['Limitations', false, (valueCell) => {
        fillTableInfo(valueCell, product.limitations);
    }],
    ['Requirements', false, (valueCell) => {
        fillTableInfo(valueCell, product.requirements);
    }],
    ['Product link', false, (valueCell) => {
        const link = document.createElement('a');
        link.innerHTML = 'Link to product';
        link.target = '_blank';
        link.href = product.product_link;
        valueCell.appendChild(link);
    }],
];

for (const property of properties) {
    const tableRow = document.createElement('tr');

    const propertyCell = document.createElement('td');
    propertyCell.classList.add('table_cell');
    propertyCell.innerHTML = property[0];

    const valueCell = document.createElement('td');
    valueCell.classList.add('table_cell');

    const res = property[2](valueCell);
    if (property[1] === true) {
        valueCell.innerHTML = res;
    }

    tableRow.appendChild(propertyCell);
    tableRow.appendChild(valueCell);

    productPropertiesBody.appendChild(tableRow);
}