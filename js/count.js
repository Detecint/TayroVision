const counters = document.querySelectorAll('.ab-count');
const speed = 100; // Velocidad de incremento (milisegundos)
const endValues = [8500, 300, 19, 400]; // Valores finales

counters.forEach((counter, index) => {
    const endValue = endValues[index];
    let currentValue = 0;

    const interval = setInterval(() => {
        if (currentValue >= endValue) {
            clearInterval(interval);
        } else {
            currentValue += Math.ceil(endValue / (1000 / speed));
            counter.textContent = currentValue;
        }
    }, speed);
});
