const checkout = document.getElementById('checkout');
checkout.addEventListener('click', () => {
    const uppgifter = document.getElementById('uppgifter')
    if (uppgifter.reportValidity()) {
        window.location.href = "tack.html"
    }
})