const asideBarLinks = document.querySelectorAll("a.aside-bar-link");
const icon = document.querySelector("button#icon");
const cancelNavigation = document.querySelector("section.cancel-navigation");
const form = document.querySelector("form");
const closeNavbarButton = document.querySelector("button#closeNavBar");
/*giving copyright sign, name and year to the footer paragraph*/
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

/*showing communicates*/
function setMessage(type, content){
    const errorContainer = document.querySelector("section#error");
    const successContainer = document.querySelector("section#success");
    let icon = null;
    let container = null;
    if(type==="error"){
        container = errorContainer;
        icon = '<i class="fa-regular fa-circle-xmark"></i>';
    }
    else{
        container = successContainer;
        icon = '<i class="fa-regular fa-square-check"></i>';
    }
    container.innerHTML = `${content} ${icon}`;
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
/*validating data in input fields*/
function validate(event){
    const email = document.querySelector("input#email");
    const topic = document.querySelector("input#topic");
    const desc = document.querySelector("textarea#description");
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    const testResult = emailRegex.test(email.value);
    if(email.value==="" || topic.value==="" || desc.value===""){
        setMessage("error","You cannot let fields being empty");
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    if(!testResult){
        setMessage("error","Bad email type, it should like something like: test_address@email.com");
        event.preventDefault();
        event.stopPropagation();
        return false;
    }
    event.target.submit();
    setMessage("success","Sending email ended successfully");
    return true;
}

form.addEventListener("submit",(event)=>{
    console.log(validate(event));
    if(!validate(event)){
        event.preventDefault();
    }
})
cancelNavigation.addEventListener("click",closeNavigation);
icon.addEventListener("click",openNavigation);
closeNavbarButton.addEventListener("click",closeNavigation);
asideBarLinks.forEach(asideBarLink=> {
    asideBarLink.addEventListener("click",closeNavigation)
});

setCopyright();