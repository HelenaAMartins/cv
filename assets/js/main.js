$(document).on("ready", function () {
  $(".projects__wrap").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

function changeLang(language) {
  const ptBR = {
    frase:
      "Olá! Meu nome é Helena Martins, sou uma desenvolvedora frontend junior brasileira. No momento, faço cursos na Alura, na Faculdade iv2, além de outros, para desenvolver minhas habilidades. Minhas habilidades principais são HTML5, CSS3 e Javascript. Também sou fluente em inglês.",
    titleProjects: "Portfólio",
    titleCertificates: "Certificados & Cursos",
    progress: "Em andamento",
  };

  const eng = {
    frase:
      "Hello! My name's Helena Martins, and I'm a Brazilian front-end developer junior. I am taking couses from Alura, Faculdade iv2 and other institutions in order to develop my skills. My main skills are HTML5, CSS3 and Javascript. I'm also a fluent English speaker.",
    titleProjects: "Portfolio",
    titleCertificates: "Certificates & Courses",
    progress: "In progress",
  };

  const texto = document.querySelector("#aboutme");
  const titlePortfolio = document.querySelector("#portfolioTitle");
  const titleCert = document.querySelector("#cec");
  const spanProgress = document.querySelectorAll(".progress");

  if (language === "en") {
    texto.textContent = eng.frase;
    titlePortfolio.textContent = eng.titleProjects;
    titleCert.textContent = eng.titleCertificates;
    spanProgress.forEach((el) => (el.textContent = eng.progress));
  } else {
    texto.textContent = ptBR.frase;
    titlePortfolio.textContent = ptBR.titleProjects;
    titleCert.textContent = ptBR.titleCertificates;
    spanProgress.forEach((el) => (el.textContent = ptBR.progress));
  }
}
