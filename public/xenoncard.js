function cardData(data) {
    return decodeURIComponent(
        window.location.href
            .split("?")[1]
            .split(data + ":")[1]
            .split("%3B")[0]
    );
}

for (let i = 0; i < document.getElementsByClassName("gotonextbtnonclick").length; i++) {
    document.getElementsByClassName("gotonextbtnonclick")[i].addEventListener("click", (elem) => {
        if(!document.getElementsByClassName("gotonextbtnonclick")[i].disabled) {
            nextCard();
        }
    });
}

function nextCard() {
    window.parent.postMessage("nextCard", "*");
}

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});