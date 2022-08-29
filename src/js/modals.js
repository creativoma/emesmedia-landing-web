// Funcion para mostrar y ocultar modals de los servicios
let card1 = document.querySelector("#marketing");
let card2 = document.querySelector("#SEO");
let card3 = document.querySelector("#social-media");
let card4 = document.querySelector("#content-creation");
let allBtnCards = document.querySelectorAll(".plus-icon");
let modal = document.querySelector(".modal");

allBtnCards.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let card = e.target.parentElement;

        if (card.id == "marketing") {
            modal.classList.add("show-modal");
            modal.id = "marketing";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>Marketing</h3>
            <p>blogs, newsletters, photography and video content creation according to the platforms we are working with.</p>`;
        } else if (card.id == "SEO") {
            modal.classList.add("show-modal");
            modal.id = "SEO";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>SEO</h3>
            <p>SEO off-page and on-page we can create a good strategy for your business and make it work for you</p>`;
        } else if (card.id == "social-media") {
            modal.classList.add("show-modal");
            modal.id = "social-media";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>Social Media Management</h3>
            <p>posting commenting, and running the different accounts you may have</p>`;
        }  else if (card.id == "content-creation") {
            modal.classList.add("show-modal");
            modal.id = "content-creation";
            cuerpo.style.overflow = "hidden";
            modal.innerHTML =`
            <h3>Content Creation</h3>
            <p>I create the strategic plan for social media platforms, such as Instagram, TikTok, and Facebook, including Facebook ads,Instagram ads, and Google ads. Google analytics, all kinds of digital campaigns and email marketing</p>`;
        }
    });
});

// Cerrando los modals
modal.addEventListener("click", () => {
    modal.classList.remove("show-modal");
    cuerpo.style.overflow = "";
});

