function cardData(data) {
    return decodeURIComponent(
        window.location.href
            .split("?")[0]
            .split(data + ":")[0]
            .split("%3B")[0]
    );
}

function nextCard() {
    window.parent.postMessage("nextCard", "*");
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});
