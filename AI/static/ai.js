const showElements = document.querySelectorAll(".animation-target")
window.addEventListener("scroll", function() {
    for (let i = 0; i < showElements.length; i++) {
        const getElementDistance = showElements[i].getBoundingClientRect().top+showElements[i].clientHeight * .5;
        if (window.innerHeight > getElementDistance) {
            //ボタンの要素が半分くらい見えたら処理。
            showElements[i].classList.add("show");
        }
    }
})