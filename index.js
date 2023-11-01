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
function setMessage(type, content){
    const errorContainer = document.querySelector("section#error");
    const successContainer = document.querySelector("section#success");
    let container = null;
    if(type==="error"){
        container = errorContainer;
    }
    else{
        container = successContainer;
    }
    container.textContent = content;
    container.classList.add("active");
    const intervalSetted = setInterval(()=>{
        container.classList.remove("active");
    },5000);
    container.addEventListener("click",()=>{
        if(intervalSetted!==undefined){
            clearInterval(intervalSetted);
            container.classList.remove("active");
        }
    })
}
function validate(){
    const email = document.querySelector("input#email");
    const topic = document.querySelector("input#topic");
    const desc = document.querySelector("textarea#description");
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const testResult = emailRegex.test(email.value);
    console.log(testResult);
    if(email.value==="" || topic.value==="" || desc.value===""){
        setMessage("error","You cannot let fields being empty");
        return;
    }
    if(!emailRegex.test(email.value)){
        setMessage("error","Bad email type, it should like something like: test_address@email.com");
        return;
    }
    setMessage("success","Sending email ended successfully");
}
const asideBarLinks = document.querySelectorAll("a.aside-bar-link");
const icon = document.querySelector("button#icon");
const cancelNavigation = document.querySelector("section.cancel-navigation");
const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validate();
})
cancelNavigation.addEventListener("click",closeNavigation);
icon.addEventListener("click",openNavigation);
asideBarLinks.forEach(asideBarLink=> {
    asideBarLink.addEventListener("click",closeNavigation)
});

setCopyright();