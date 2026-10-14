const colorButtons = document.querySelectorAll(".controls button");
const bulbs = document.querySelectorAll(".bulb");
const signal = document.querySelector(".signal");

colorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedColor = button.dataset.color;

        bulbs.forEach((bulb) => {
            bulb.classList.toggle("active", bulb.dataset.lamp === selectedColor);
        });

        colorButtons.forEach((colorButton) => {
            colorButton.setAttribute(
                "aria-pressed",
                String(colorButton.dataset.color === selectedColor)
            );
        });

        signal.setAttribute(
            "aria-label",
            `Đèn giao thông, màu ${selectedColor} đang bật`
        );
    });
});
