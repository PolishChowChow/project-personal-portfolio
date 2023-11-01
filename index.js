const asideBarLinks = document.querySelectorAll("a.aside-bar-link");
const icon = document.querySelector("button#icon");
const CONTENT_BARS = document.querySelectorAll(".content-bar");
const cancelNavigation = document.querySelector("section.cancel-navigation");
const form = document.querySelector("form");
const closeNavbarButton = document.querySelector("button#closeNavBar");
const languageButton = document.querySelector("button#language-button");
const languageButton2 = document.querySelector("button#language-button-2");
const POLISH_CONTENT = [
    'Nawigacja',
    'O mnie',
    'Projekty',
    'Edukacja',
    'Umiejętności',
    'Kontakt',
    'O mnie',
    'Projekty',
    'Edukacja',
    "Umiejętności",
    'Kontakt',
    'Kim ja jestem?',
    'Cześć, jestem Bartek, jestem młodą osobą pasjonującą się tworzeniem stron internetowych. Chcę stać się programistą, a konkretnie interesuje mnie bycie MERN stack developerem, operować na bardzo wysokim poziomie JavaScriptu i tworzyć aplikacje internetowe od projektowania do operacji na danych.',
    'O mnie',
    'Mam 19 lat i jestem uczniem. Uczęszczam do szkoły średniej o profilu informatycznym. Dodatkowo, uczę się samodzielnie, dążąc do zdobycia jak najwięcej wiedzy z dziedziny tworzenia stron internetowych, którą tylko jestem w stanie ogarnąć. Oprócz wszystkiego, co związane z JavaScriptem, czuję się również komfortowo z PHP. Poza tworzeniem stron internetowych interesuję się mechaniką samochodową, piłką nożną, historią II wojny światowej i esportem.',
    'Ukończone projekty',
    'Tutaj możesz zobaczyć kilka projektów, które wykonałem samodzielnie lub wykonując je razem z kursem krok po kroku:',
    'Lista zadań z ExpressJS',
    'Jak widzisz, to dosłownie lista zadań oparta na frameworkach NodeJS i ExpressJS, stworzona, idąc za kursami krok po kroku na platformie Udemy.',
    'Aplikacja pogodowa',
    'To aplikacja, która pozwala sprawdzać podstawowe informacje o pogodzie dla dowolnego miasta. Ta aplikacja wykorzystuje bundler Webpack oraz API OpenWeather.',
    'Lista zadań w C++',
    'To aplikacja do zarządzania listą zadań napisana w języku C++. Prezentuje ona wykorzystanie bardziej złożonych struktur danych, takich jak obiekty i listy.',
    'Strona na zakupy',
    'To jest stronka, która pozwala dodawać produkty do koszyka i dokonywać zakupów. Pozwoliło mi to praktykować użycie Reacta w tworzeniu stron internetowych.',
    'Project "cars"',
    'Project "Cars" (brzmi jak nazwa gry) to przedstawienie mojego użycia Reduxa w praktyce oraz narzędzia redux toolkit, wykonane krok po kroku z kursem na Udemy.',
    'Panel administracyjny',
    'To jest projekt panelu administracyjnego, wykonany przy użyciu HTML, CSS i odrobinę JavaScript, co dowodzi mojej zdolności do tworzenia bardziej skomplikowanej struktur i stylizacji stron.',
    'Edukacja',
    'Teraz pokażę ci kilka źródeł mojej wiedzy.',
    '<a href="https://www.theodinproject.com/" class="content-bar">TheOdinProject</a> jest moim głównym źródłem wiedzy, idealnym do nauki podstaw tworzenia stron internetowych (HTML, CSS, JS), ale także frameworków, takich jak ReactJS. Kurs oferuje również materiał na temat zostania deweloperem full-stack w Ruby i full-stack JavaScript, co jest ścieżką, którą obecnie podążam. Jest całkowicie darmowy, i gorąco go polecam.',
    '<a href="https://www.udemy.com/">Udemy</a> to platforma edukacyjna oferująca szeroki wybór kursów, w tym kursów z zakresu tworzenia stron internetowych. Te kursy są płatne, według mnie warte swojej ceny. Udemy oferuje również kursy obejmujące różne języki programowania, koncepcje i wiele więcej. Jest mnóstwo do wyboru. Nawet jeśli nie interesuje cię nauka programowania i masz fundusze do dyspozycji, z pewnością znajdziesz coś, co odpowiada twoim zainteresowaniom.',
    '<a href="https://www.sololearn.com/">Sololearn</a> to aplikacja, która oferuje możliwość nauki ponad 20 języków programowania. Zapewnia prosty sposób na zdobycie podstawowej wiedzy teoretycznej i zrozumienie podstawowych koncepcji w każdym z tych języków. Prostota ćwiczeń pozwala na naukę w podróży, czy to w autobusie, w szkole, czy nawet podczas oczekiwania na posiłek w restauracji.',
    '<a href="https://chat.openai.com/">ChatGPT</a> to sztuczna inteligencja, która umożliwia wysyłanie zapytań i otrzymywanie odpowiedzi w zwykłym, ludzkim języku, tak jakbyś rozmawiał z przyjacielem. Wykorzystuję go na przykład, aby wyjaśniać bardziej złożone tematy, dostarczać przykłady użycia funkcji lub pomagać w refaktoryzacji kodu. To bardzo przydatne narzędzie.',
    'Moje umiejętności',
    'Tutaj znajduje się lista umiejętności, nad którymi pracuję, uczę się i rozwijam:',
    'Podstawy tworzenia stron internetowych:',
    'Frameworki:',
    'Bazy danych',
    'Inne technologie, których uczę się na boku:',
    'Kontakt',
    'Czy jesteś zainteresowany? Wyślij mi wiadomość, porozmawiajmy.',
    'W jakiej sytuacji powinieneś się skontaktować ze mną?',
    'Chęć współpracy ze mną',
    'Opinie na temat repozytoriów na GitHubie, w tym tej strony internetowej.',
    'Brakujące informacje oraz wszelkie wątpliwości związane ze mną.',
    'Zapytać o rzeczy związane z technologią, którą uczysz się.',
    'Promować dowolne źródło nauki, które uważasz za wartościowe.',
    'Ikony używane na tej stronie pochodzą z <a href="https://fontawesome.com/">Fontawesome</a>.',
    'Ikona w polu adresowym przeglądarki pochodzi z <a href="https://www.pexels.com/pl-pl/zdjecie/pies-zwierze-domowe-uroczy-futro-6659247/">Invisible Look</a> ',
];
const ENGLISH_CONTENT = [
    'Navigation',
    'About me',
    'Projects',
    'Learning',
    'Skills',
    'Contact',
    'About me',
    'Projects',
    'Learning',
    "Skills",
    'Contact',
    'Who am I?',
    "Hi, I'm Bartek, I'm young person passionated about web development, I want to become MERN stack developer, operate JavaScript on the very high level, program Internet Application from design to operations on data.",
    "About me",
    "I'm 19 yearsold student. I attend 5-year program at a medium school with a focus on IT. Additionally, I am studying on my own, striving to gain as much knowledge in web development department as I can handle. Besides everything connected with JavaScript I also feel comfortable with PHP. Apart from web development I'm interested in car mechanic, football, history of WW2 and esport.",
    "Acomplished projects",
    "Here you can see few projects that I did by myself or following courses step by step:",
    "Todolist with express JS",
    "As you can see it's literaly todolist based on NodeJS and ExpressJS frameworks, did by following step by step course on Udemy",
    "Weather app",
    "It's an app, which allow you checking basics informations about weather for whatever city you want. Also this app uses webpack bundler and OpenWeather API.",
    "Todolist using C++",
    "It's todolist app using c++, presenting usage more complex data structures like objects, lists",
    "Shopping cart",
    "This is a shopping card, allowing to add products to the card and checkout. It allowed me to use react in practice.",
    "Project Cars",
    "Project cars (sounds like a game name) is representation and my practice of using Redux and redux toolkit, did by following Udemy course.",
    "Admin Dashboard",
    "This projects is admin dashboard design did with usage HTML, CSS and a little JavaScript, proving I can do more complex designs.",
    "Learning sources",
    "Now I will show you some sources of my knoledge.",
    "<a href='https://www.theodinproject.com/'>TheOdinProject</a> is my main source of knowledge, perfect for learning everything about the fundamentals of web development(HTML, CSS, JS), but also frameworks like ReactJS. The course also offers material about becoming a full-stack Ruby developer and full-stack JavaScript developer,which is the path I am currently on. It's completely free, and I strongly recommend it.",
    "<a href='https://www.udemy.com/'>Udemy</a> is a learning platform with a wide range of courses, including web development courses.These courses are paid, but in my opinion, they are well worth the prices. Udemy also offers courses covering various programming languages,concepts, and more. There's plenty to choose from. Even if you're not interested in learning programming and you have some funds to spare, you can find something that suits your interests.",
    "<a href='https://www.sololearn.com/'>Sololearn</a> is an app that offers the opportunity to learn over 20 programming languages. It provides an easy way to grasp the basics of theoretical knowledge and understand fundamental concepts in each of these languages. The simplicity of the exercises enables you to learn on the go, whether you're on the bus, at school, or even while waiting for your meal in a restaurant.",
    "<a href='https://chat.openai.com/'>ChatGPT</a> is an AI that enables you to send queries and receive responses in plain, human language, just like having a conversation with a friend. I use it, for example, to explain more complex topics,provide examples of using functions, or assist in code refactoring. It's a very useful tool.",
    "My skills",
    "Here you can see a skill list, that I develop, learn and work on it",
    "Fundamentals of web develompent:",
    "Frameworks:",
    "Databases:",
    "Other that I'm learning aside:",
    "Contact Form",
    "Are you interest? Send me a message, talk about the occasion.",
    "In which case you should contact me?",
    "Trying to cooperate with me",
    "Feedback about github repos 'including this site'",
    "Missing informations and any doubts connected with me",
    "Ask about things connected with technology that I'm learning",
    "Promote any learning source you think is worth",
    "Icons used on this page comes from <a href='https://fontawesome.com/'>Fontawesome</a>",
    "FavIcon added by <a href='https://www.pexels.com/pl-pl/zdjecie/pies-zwierze-domowe-uroczy-futro-6659247/'>Invisible Look</a>",
];

/*translation*/
let IS_ENGLISH = true;
function setPolishLanguage(){
    for(let i=0;i<51;i++){
        CONTENT_BARS[i].innerHTML = POLISH_CONTENT[i];
    }
}
function setEnglishLanguage(){
    for(let i=0;i<51;i++){
        CONTENT_BARS[i].innerHTML = ENGLISH_CONTENT[i];
    }
}
function setLanguage(){
    console.log(IS_ENGLISH);
    if(IS_ENGLISH){
        setPolishLanguage();
    }
    else{
        setEnglishLanguage();
    }
    IS_ENGLISH = !IS_ENGLISH;
}

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
languageButton.addEventListener("click",setLanguage);
languageButton2.addEventListener("click",()=>{
    closeNavigation();
    setLanguage();
});
asideBarLinks.forEach(asideBarLink=> {
    asideBarLink.addEventListener("click",closeNavigation)
});

setCopyright();