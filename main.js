const navbarClone = document.querySelector("nav").cloneNode(true);

navbarClone.classList.add("fixed-top", "bg-white", "border-bottom");


window.addEventListener("scroll", () => {
    if (window.scrollY > 0)
        document.body.prepend(navbarClone);
    else
        navbarClone.remove();
})