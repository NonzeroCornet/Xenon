function cardData(data) {
    return decodeURIComponent(
        window.location.href
            .split("?")[1]
            .split(data + ":")[1]
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
