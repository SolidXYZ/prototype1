import { OBJECT_MODULE } from 'object.js';
const products = {
    ice: {
        '1_gb': {
            name: '1 GB',
            amount: [1, 'gb'],
            price: 149,
            term: 'month',
            product_link: 'https://www.ice.no/mobilabonnement/mobil/1-gb/?abobygger=0',
        },
        '3_gb': {
            name: '3 GB',
            amount: [3, 'gb'],
            price: 199,
            term: 'month',
            product_link: 'https://www.ice.no/mobilabonnement/mobil/3-gb/?abobygger=0',
        },
        '8_gb': {
            name: '8 GB',
            amount: [8, 'gb'],
            price: 249,
            term: 'month',
            product_link: 'https://www.ice.no/mobilabonnement/mobil/8-gb/?abobygger=0',
        },
        '16_gb': {
            name: '16 GB',
            amount: [16, 'gb'],
            price: 299,
            term: 'month',
            product_link: 'https://www.ice.no/mobilabonnement/mobil/16-gb/?abobygger=0',
        },
        '30_gb': {
            name: '30 GB',
            amount: [30, 'gb'],
            price: 349,
            term: 'month',
            product_link: 'https://www.ice.no/mobilabonnement/mobil/30-gb/?abobygger=0',
        },
        'ice_max_normal': {
            name: 'IceMax Normal',
            amount: 'unlimited',
            price: 399,
            term: 'month',
            limitations: {
                sharing: [2, 'gb'],
                speed: [10, 'mbit'],
            },
            product_link: 'https://www.ice.no/mobilabonnement/iceMax/',
        },
        'ice_max_faster': {
            name: 'IceMax Faster',
            amount: 'unlimited',
            price: 499,
            term: 'month',
            limitations: {
                sharing: [10, 'gb'],
                speed: [50, 'mbit'],
            },
            product_link: 'https://www.ice.no/mobilabonnement/iceMax/',
        },
        //trial
        'try_us': {
            name: 'Try us',
            amount: [30, 'gb'],
            price: 99,
            term: 'month',
            trial: 'yes',
            trialPeriod: [2, 'month'],
            product_link: 'https://www.ice.no/mobilabonnement/velkomsttilbud/',
        },
        //junior
        'ice_junior': {
            name: 'IceJunior',
            amount: [1, 'gb'],
            price: 0,
            term: 'month',
            requirements: {
                age: ['max', 14],
            },
            limitations: {
                max_numbers: 3,
            },
            product_link: 'https://www.ice.no/mobilabonnement/ice-junior/',
        },
        'ice_junior_plus': {
            name: 'IceJuniorPlus',
            amount: [1, 'gb'],
            price: 50,
            term: 'month',
            requirements: {
                age: ['max', 14],
            },
            product_link: 'https://www.ice.no/mobilabonnement/icejunior-pluss/',
        },
        'ice_junior_mobile_1_gb': {
            name: 'IceJunior Mobile 1 GB',
            amount: [1, 'gb'],
            price: 149,
            term: 'month',
            requirements: {
                age: ['max', 14],
            },
            product_link: 'https://www.ice.no/mobilabonnement/icejunior-pluss/',
        },
    },
    telia: {
        '3_gb': {
            name: '3 GB',
            amount: [3, 'gb'],
            price: 269,
            term: 'month',
            product_link: 'https://www.telia.no/mobilabonnement/fast-datamengde/',
        },
        '5_gb': {
            name: '5 GB',
            amount: [5, 'gb'],
            price: 299,
            term: 'month',
            product_link: 'https://www.telia.no/mobilabonnement/fast-datamengde/',
        },
        '8_gb': {
            name: '8 GB',
            amount: [8, 'gb'],
            price: 359,
            term: 'month',
            product_link: 'https://www.telia.no/mobilabonnement/fast-datamengde/',
        },
        '15_gb': {
            name: '15 GB',
            amount: [15, 'gb'],
            price: 429,
            term: 'month',
            product_link: 'https://www.telia.no/mobilabonnement/fast-datamengde/',
        },
        '20_gb': {
            name: '20 GB',
            amount: [20, 'gb'],
            price: 479,
            term: 'month',
            product_link: 'https://www.telia.no/mobilabonnement/fast-datamengde/',
        },
        //unlimited
        'telia_x_young': {
            name: 'Telia X Young',
            amount: 'unlimited',
            price: 399,
            term: 'month',
            limitations: {
                speed: [10, 'mb'],
            },
            requirements: {
                age: ['max', 30],
            },
            product_link: 'https://www.telia.no/mobilabonnement/ubegrenset-data/',
        },
        'telia_x_normal': {
            name: 'Telia X Normal',
            amount: 'unlimited',
            price: 499,
            term: 'month',
            limitations: {
                speed: [20, 'mb'],
            },
            product_link: 'https://www.telia.no/mobilabonnement/ubegrenset-data/',
        },
        'telia_x_fast': {
            name: 'Telia X Fast',
            amount: 'unlimited',
            price: 549,
            term: 'month',
            limitations: {
                speed: [200, 'mb'],
            },
            product_link: 'https://www.telia.no/mobilabonnement/ubegrenset-data/',
        },
        'telia_x_max': {
            name: 'Telia X Max',
            amount: 'unlimited',
            price: 549,
            term: 'month',
            limitations: {
                speed: [1000, 'mb'],
            },
            product_link: 'https://www.telia.no/mobilabonnement/ubegrenset-data/',
        },
    },
    telenor: {
        'some_2_gb': {
            name: '2 GB',
            amount: [2, 'gb'],
            price: 299,
            term: 'month',
            product_link: 'https://www.telenor.no/mobilabonnement/bestill/index.page?subscriptionProductId=54318',
        },
        'simple_8_gb': {
            name: '8 GB',
            amount: [8, 'gb'],
            price: 349,
            term: 'month',
            product_link: 'https://www.telenor.no/mobilabonnement/bestill/index.page?subscriptionProductId=54260',
        },
        'more_8_gb': {
            name: '8 GB',
            amount: [8, 'gb'],
            price: 399,
            term: 'month',
            product_link: 'https://www.telenor.no/mobilabonnement/bestill/index.page?subscriptionProductId=54261',
        },
        //unlimited
        'unlimited_basis': {
            name: 'Unlimited Basis',
            amount: 'unlimited',
            price: 499,
            term: 'month',
            limitations: {
                speed: [200, 'mbit'],
            },
            requirements: {
                age: ['max', 30],
            },
            product_link: 'https://www.telenor.no/mobilabonnement/bestill/index.page?subscriptionProductId=54195',
        },
        'unlimited_medium': {
            name: 'Unlimited Medium',
            amount: 'unlimited',
            price: 599,
            term: 'month',
            limitations: {
                speed: [1000, 'mbit'],
            },
            product_link: 'https://www.telenor.no/mobilabonnement/bestill/index.page?subscriptionProductId=54193',
        },
        'unlimited_plus': {
            name: 'Unlimited Plus',
            amount: 'unlimited',
            price: 699,
            term: 'month',
            limitations: {
                speed: [1000, 'mbit'],
            },
            product_link: 'https://www.telenor.no/mobilabonnement/bestill/index.page?subscriptionProductId=54194',
        },
    },
    onecall: {
        'folk_package_0_gb': {
            name: '0 GB',
            amount: [0, 'gb'],
            price: 129,
            term: 'month',
            product_link: 'https://onecall.no/mobilabonnement/bestill/folkepakka-0-gb-q',
        },
        'folk_package_1_gb': {
            name: '1 GB',
            amount: [1, 'gb'],
            price: 179,
            term: 'month',
            product_link: 'https://onecall.no/mobilabonnement/bestill/folkepakka-1-gb-q',
        },
        'folk_package_3_gb': {
            name: '3 GB',
            amount: [3, 'gb'],
            price: 229,
            term: 'month',
            product_link: 'https://onecall.no/mobilabonnement/bestill/folkepakka-3-gb-q',
        },
        'folk_package_7_gb': {
            name: '7 GB',
            amount: [7, 'gb'],
            price: 279,
            term: 'month',
            product_link: 'https://onecall.no/mobilabonnement/bestill/folkepakka-7-gb-q',
        },
        'folk_package_10_gb': {
            name: '10 GB',
            amount: [10, 'gb'],
            price: 329,
            term: 'month',
            product_link: 'https://onecall.no/mobilabonnement/bestill/folkepakka-10-gb-q',
        },
        'folk_package_20_gb': {
            name: '20 GB',
            amount: [20, 'gb'],
            price: 379,
            term: 'month',
            product_link: 'https://onecall.no/mobilabonnement/bestill/folkepakka-20-gb-q',
        },
        //unlimited
        'folk_package_full_data': {
            name: 'Full Data',
            amount: 'unlimited',
            price: 479,
            term: 'month',
            product_link: 'https://onecall.no/mobilabonnement/bestill/folkepakka-fulldata',
        },
    },
};
const names = {
    ice: 'Ice',
    telia: 'Telia',
    telenor: 'Telenor',
    onecall: 'OneCall',
};

for (const [supplier, curProducts] of Object.entries(products)) {
    for (const [id, product] of Object.entries(curProducts)) {
        product.id = id;
        product.supplier = supplier;
    }
}

export const PRODUCT_MODULE = {};
PRODUCT_MODULE.getSupplierName = function(supplier) {
    return names[supplier];
}
PRODUCT_MODULE.getSuppliers = function() {
    return Object.keys(products);
}
PRODUCT_MODULE.getSupplierProducts = function(supplier) {
    return OBJECT_MODULE.copyObject(products[supplier], true);
}
PRODUCT_MODULE.getProduct = function(supplier, product) {
    return OBJECT_MODULE.copyObject(products[supplier][product], true);
}