import { PRODUCT_MODULE } from '../JS/products.js';
import { TEMPLATES } from '../JS/templates.js';

const suppliers = PRODUCT_MODULE.getSuppliers();

const suppliersElement = document.getElementById('suppliers');

suppliers.forEach(v => {
    const [link, container, image] = TEMPLATES.product(`search?suppliers=${v}`, `../Images/${v}.png`);

    const supplierName = document.createElement('p');
    supplierName.classList.add('product_text');
    supplierName.innerHTML = PRODUCT_MODULE.getSupplierName(v);

    link.appendChild(supplierName);

    suppliersElement.appendChild(link);
});