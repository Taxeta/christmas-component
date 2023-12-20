let clicks = 0;

function bite() {
    clicks++;

    if (clicks <= 3) {
        document.getElementById('candy').style.clipPath = `polygon(0 0, ${100 - 30 * clicks}% 0, ${100 - 30 * clicks}% 100%, 0 100%)`;
        document.getElementById('candyBite').style.opacity = (clicks < 3) ? 1 : 0;
    }

    if(clicks === 3) {
        openModal();
    }
}

function resetCandy() {
    document.getElementById('candy').style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    clicks = 0;
}

function openModal() {
    document.getElementById('modalLink').style.display = 'block';
}

function closeModal() {
    document.getElementById('modalLink').style.display = 'none';
    resetCandy();
}