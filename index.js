function setCopyright(){
    const copyrightParagraph = document.querySelector("#copyright");
    const year = new Date().getFullYear();
    const content = `Copyright &copy; ${year} BBUTTER98 `;
    copyrightParagraph.innerHTML = content;
}
function openNavigation(){
    const leftNavBar = document.querySelector("section.navigation");
    const cancel = document.querySelector("section.cancel-navigation");
    leftNavBar.classList.toggle("active");
    cancel.classList.toggle("active");
    document.body.style.overflow = "hidden";
}
function closeNavigation(){
    const leftNavBar = document.querySelector("section.navigation");
    const cancel = document.querySelector("section.cancel-navigation");
    leftNavBar.classList.toggle("active");
    cancel.classList.toggle("active");
    document.body.style.overflow = "visible";
}
const asideBarLinks = document.querySelectorAll("a.aside-bar-link");
const icon = document.querySelector("button#icon");
const cancelNavigation = document.querySelector("section.cancel-navigation");
cancelNavigation.addEventListener("click",closeNavigation);
icon.addEventListener("click",openNavigation);
asideBarLinks.forEach(asideBarLink=> {
    asideBarLink.addEventListener("click",closeNavigation)
});

setCopyright();