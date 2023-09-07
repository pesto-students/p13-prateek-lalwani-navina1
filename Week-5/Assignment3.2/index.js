const productViews = new WeakMap();
const cartItems = new WeakSet();

function incrementProductViews(product, productId) {
    if (!productViews.has(product)) {
        productViews.set(product, new Map());
    }

    const productViewMap = productViews.get(product);

    if (!productViewMap.has(productId)) {
        productViewMap.set(productId, 1);
    } else {
        const viewCount = productViewMap.get(productId);
        productViewMap.set(productId, viewCount + 1);
    }
}

function addToCart(productId) {
    if (!cartItems.has(productId)) {
        cartItems.add(productId);
        return "Product added to cart";
    } else {
        return "Product already in cart";
    }
}

const product1 = { id: 123 };
const product2 = { id: 456 };

incrementProductViews(product1, 123); // Product ID 123 is viewed for the first time
incrementProductViews(product1, 123); // Product ID 123 is viewed for the second time

console.log(addToCart(product1)); // "Product added to cart"
console.log(addToCart(product1)); // "Product already in cart"
