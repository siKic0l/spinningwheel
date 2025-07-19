let totalDeg = 0;

spinWheel = () => {
    let selectedPrize;
    const chance = Math.floor(Math.random() * 20); // 0–19
    if (chance === 0) {
        selectedPrize = "KAOS";
    } else {
        const otherPrizes = ["KOREK", "FREE SPIN", "COBA LAGI"];
        selectedPrize = otherPrizes[Math.floor(Math.random() * otherPrizes.length)];
    }

    let targetDeg = 0;
    if (selectedPrize === "KOREK") {
        targetDeg = Math.random() < 0.5
            ? getRandomBetween(337, 360)
            : getRandomBetween(0, 22);
    } else if (selectedPrize === "FREE SPIN") {
        targetDeg = getRandomBetween(67, 112);
    } else if (selectedPrize === "COBA LAGI") {
        targetDeg = getRandomBetween(202, 247);
    } else if (selectedPrize === "KAOS") {
        targetDeg = getRandomBetween(157, 202);
    }

    const currentDeg = totalDeg % 360;
    const fullSpins = 10;
    const extraDeg = (targetDeg - currentDeg + 360) % 360;
    const spinDeg = fullSpins * 360 + extraDeg;

    totalDeg += spinDeg;

    const wheel = document.getElementById("wheel");
    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${totalDeg}deg)`;

    setTimeout(() => {
        showPopup(selectedPrize);
    }, 5200);
};
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function showPopup(message) {
    document.getElementById("popup-message").innerText = message;
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

let highlighter = "";
for (let h = 1; h < 73; h++) {
    highlighter += '<span style="--h:' + h + '"></span>';
}
document.querySelector(".highlighter").innerHTML = highlighter;
