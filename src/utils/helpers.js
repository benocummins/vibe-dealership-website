export function filterInventoryByBrand(inventory, brand) {
    return inventory.filter(car => car.brand === brand);
}

export function sortInventoryByPrice(inventory, ascending = true) {
    return inventory.sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
}

export function validateContactForm(formData) {
    const { name, email, message } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return name && emailPattern.test(email) && message;
}