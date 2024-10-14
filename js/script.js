const nav = document.getElementById("header-nav") 
const bars = document.getElementById("bars")
const navItems = document.querySelectorAll("#header-nav a")


function toogleMenu(){

    bars.classList.toggle("active");
    nav.classList.toggle("active");

    const active = bars.classList.contains("active");

    if(active){
        bars.setAttribute("aria-label", "Fechar menu");
        bars.setAttribute("aria-expanded", "true");
    } else {
        bars.setAttribute("aria-label", "Abrir menu");
        bars.setAttribute("aria-expanded", "false");
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
