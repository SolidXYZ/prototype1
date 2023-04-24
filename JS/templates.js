export const TEMPLATES = {};

TEMPLATES.product = function (href, imageSource) {
    const linkMain = document.createElement('a');
    linkMain.classList.add('product');
    linkMain.href = href;
    
    const container = document.createElement('div');
    container.classList.add('product_container');
    
    const image = document.createElement('img');
    image.classList.add('product_icon');
    image.src = imageSource;

    linkMain.appendChild(container);
    container.appendChild(image);

    return [linkMain, container, image];
}