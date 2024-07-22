
const navbarClone = document.querySelector("nav").cloneNode(true);

navbarClone.classList.add("fixed-top", "bg-white", "border-bottom", "navClone");

export const handleScroll = () => {
    if (window.scrollY > 0) {
        if (!document.querySelector(".navClone"))
            document.body.prepend(navbarClone);
    }
    else
        navbarClone.remove();
}