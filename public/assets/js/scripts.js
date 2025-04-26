// filepath: car-dealership-website/public/assets/js/scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const inventoryFilter = document.getElementById('inventory-filter');

    // Handle contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            // Process form data here (e.g., send to server)
            alert('Thank you for contacting us!');
            contactForm.reset();
        });
    }

    // Handle inventory filtering
    if (inventoryFilter) {
        inventoryFilter.addEventListener('change', function() {
            const selectedBrand = inventoryFilter.value;
            filterInventory(selectedBrand);
        });
    }

    function filterInventory(brand) {
        const inventoryItems = document.querySelectorAll('.inventory-item');
        inventoryItems.forEach(item => {
            if (brand === 'all' || item.dataset.brand === brand) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
});