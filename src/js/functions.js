// Mensaje en consola del creador del sitio
{
  console.log(
    "\n\n%cDevelopment by \n%cEmesmedia\n%cwww.emesmedia.com%c\n\n",
    "font-size: 20px; color:#000; font-weight:300",
    "font-size: 30px; color:#D9487D; font-weight:800",
    '<a href="/" target="_blank" style="font-size: 20px">',
    "</a><hr/>"
  );
}

// Función para ir hacia arriba del sitio
let btnGoTop = document.querySelector("#btn-go-top");
document.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    btnGoTop.classList = "active";
  } else {
    btnGoTop.classList = "inactive";
  }
}

function topFuction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

btnGoTop.addEventListener("click", topFuction);

// Eventos para el menu mobile
let btnOpen = document.querySelector(".icon-burger-open");
let btnClosed = document.querySelector(".icon-burger-closed");
let menuMobile = document.querySelector(".menu-mobile");
let cuerpo = document.querySelector("body");
let enlacesMenu = document.querySelectorAll(".menu-mobile li a");

btnOpen.addEventListener("click", function () {
  menuMobile.classList.add("active");
  cuerpo.style.overflow = "hidden";
  btnOpen.classList.add("active");
  btnClosed.classList.add("active");
});

btnClosed.addEventListener("click", function () {
  menuMobile.classList.remove("active");
  cuerpo.style.overflow = "";
  btnOpen.classList.remove("active");
  btnClosed.classList.remove("active");
} );

enlacesMenu.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    menuMobile.classList.remove("active");
    cuerpo.style.overflow = "";
    btnOpen.classList.remove("active");
    btnClosed.classList.remove("active");
  } );
} );
