const navbarClone = document.querySelector("nav").cloneNode(true);
const typing = document.querySelector(".name");
const text = typing.textContent;

typing.textContent = "";
let i = 0;

navbarClone.classList.add("fixed-top", "border-bottom", "navClone");

export const typingText = () => setInterval(() => {
    if (i < text.length) {
        typing.classList.add("name-border");
        typing.textContent += text.charAt(i);
        i++;
    }
    else {
        typing.classList.remove("name-border")
        clearInterval(typingText);
    }
}, 80);


export const handleScroll = () => {
    if (window.scrollY > 0) {
        if (!document.querySelector(".navClone"))
            document.body.prepend(navbarClone);
    }
    else
        navbarClone.remove();
}

