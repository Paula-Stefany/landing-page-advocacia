const nav = document.getElementById("header-nav") 
const bars = document.getElementById("bars")
const navItems = document.querySelectorAll("#header-nav a")


function toogleMenu(){
    bars.classList.toggle("active")
    nav.classList.toggle("active");
}

/* Adicionando um ouvinte de Evento de click no bars */
bars.addEventListener("click", toogleMenu);


/* Adicionando um ouvinte de Evento de click em cada 'a'(tag de link) do meu header-nav  */
navItems.forEach((item) => {
    item.addEventListener("click", toogleMenu);
})
