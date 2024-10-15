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


// Função de carregamento preguiçoso das imagens //
const lazyLoading = () => {

    var lazyImages = document.querySelectorAll(".lazy-load")

    lazyImages.forEach((img) => {

        // Verifica se o topo da imagem está dentro da janela visível do navegador //
        if(img.getBoundingClientRect().top < window.innerHeight && img.getAttribute("data-src")) { 

            // Atribui a fonte da img data-src ao atributo src // 
            img.src = img.getAttribute("data-src");
            img.removeAttribute("data-src");
            img.classList.add("loading");
        }

    });

    var banner = document.querySelector(".banner[data-bg]");
    if (banner && banner.getBoundingClientRect().top < window.innerHeight) {
        banner.style.backgroundImage = `url(${banner.getAttribute("data-bg")})`;
        banner.removeAttribute("data-bg")
        banner.classList.add("loading")
    }

};


// Função será executada quando todos os recursos da página forem carregados //
window.onload = () => {
    lazyLoading();
};

// Função será executada quando ocorrer o evento de rolagem da página //
window.onscroll = () => {
    lazyLoading();
}
