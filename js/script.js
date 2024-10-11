const nav = document.getElementById("header-nav") 
const bars = document.getElementById("bars")
const navItems = document.querySelectorAll("#header-nav a")


function toogleMenu(event){

    bars.classList.toggle("active");
    nav.classList.toggle("active");
   

    const active = nav.classList.contains("active");

    /* condição ? valor_se_true : valor_se_false;
    */
    event.currentTarget.setAttribute("aria-expanded", active ? "true" : "false");

    if(active){
        event.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
        event.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
}

/* Adicionando um ouvinte de Evento de click no bars */
bars.addEventListener("click", toogleMenu);


/* Adicionando um ouvinte de Evento de click em cada 'a'(tag de link) do meu header-nav  */
navItems.forEach((item) => {
    item.addEventListener("click", toogleMenu);
})

/* SERVIÇE CARDS */

const card = document.getElementById("service-cards")
const scroolLeft = document.getElementById("left")
const scroolRight = document.getElementById("right")

scroolLeft.addEventListener("click", () => {
    card.scrollBy({
        left: -270,
        behavior: "smooth",
    })
})
scroolRight.addEventListener("click", () => {
    card.scrollBy({
        left: 270,
        behavior: "smooth",
    })
})

