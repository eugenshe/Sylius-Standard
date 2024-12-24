document.addEventListener('DOMContentLoaded', () => {

    function setDefaultQuantity() {
        const quantityInput = document.querySelector('input[name="sylius_shop_add_to_cart[cartItem][quantity]"]');
        if (quantityInput && (!quantityInput.value || parseInt(quantityInput.value, 10) === 1)) {
            quantityInput.value = 10;
        }
    }

    setDefaultQuantity();

    function attachQuantityEvent() {
        const quantityInput = document.querySelector('input[name="sylius_shop_add_to_cart[cartItem][quantity]"]');
        if (quantityInput) {
            quantityInput.removeEventListener('change', handleQuantityChange);
            quantityInput.addEventListener('change', handleQuantityChange);
        }
    }

    function handleQuantityChange(event) {
        let value = parseInt(event.target.value, 10);
        if (value % 10 !== 0) {
            value = Math.round(value / 10) * 10;
            event.target.value = value;
        }
        if (value === 70) {
            alert('Great Choice!');
        }
    }

    attachQuantityEvent();

    const observer = new MutationObserver(() => {
        attachQuantityEvent();
    });
    observer.observe(document.body, { childList: true, subtree: true });
});