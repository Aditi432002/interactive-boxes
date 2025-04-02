document.addEventListener("DOMContentLoaded", function() {
    const radioButtons = document.querySelectorAll("input[type='radio']");
    const totalPrice = document.getElementById("total-price");
    const selectionBox = document.querySelector(".selection");

    function updateTotalPrice() {
        radioButtons.forEach(radio => {
            if (radio.checked) {
                totalPrice.textContent = `$${radio.value}.00 USD`;

                // Show size & color options only for 2 Unit selection
                if (radio.id === "two-unit") {
                    selectionBox.style.display = "block";
                } else {
                    selectionBox.style.display = "none";
                }
            }
        });
    }

    // Add event listener to update price and selection box
    radioButtons.forEach(radio => {
        radio.addEventListener("change", updateTotalPrice);
    });

    updateTotalPrice();
});
