// Charger le header
fetch("header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    // Sélectionner les éléments du menu burger après insertion
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.getElementById("nav-links");

    // Ajouter un événement de clic pour le menu burger
    burgerMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burgerMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open"); // Empêche le scroll quand le menu est ouvert
    });

    // --- Gérer le lien actif dans le header ---
    const links = document.querySelectorAll("#nav-links a");
    const currentPage = window.location.pathname.split("/").pop(); // nom du fichier actuel

    links.forEach((link) => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active"); // applique le style CSS pour le lien actif
      }
    });
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du header :", error)
  );

// Charger le footer
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-container").innerHTML = data;
  })
  .catch((error) =>
    console.error("Erreur lors du chargement du footer :", error)
  );

// document.addEventListener("DOMContentLoaded", function () {
//   // Ajouter une interaction sur le menu de navigation
//   const navLinks = document.querySelectorAll("nav a");

//   navLinks.forEach((link) => {
//     link.addEventListener("mouseover", function () {
//       this.style.backgroundColor = "#005a4a";
//     });

//     link.addEventListener("mouseout", function () {
//       this.style.backgroundColor = "transparent";
//     });
//   });

//   // Afficher une alerte lorsqu'un utilisateur clique sur le lien de contact
//   const contactLink = document.querySelector("#contact a");
//   if (contactLink) {
//     contactLink.addEventListener("click", function (event) {
//       event.preventDefault(); // Empêcher l'ouverture du client mail immédiatement
//       alert(
//         "Merci de vouloir me contacter ! Envoyez-moi un email à : contact@monportfolio.com"
//       );
//     });
//   }
// });
