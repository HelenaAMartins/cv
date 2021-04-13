$(document).on('ready', function() {
 
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
 });


// function changeLang(language) {
//   const ptBR = {
//     frase: "Meu texto em PT-BR",
//     titleProjects: "Portfólio",
//     titleCertificates: "Certificados & Cursos"
//   }

//   var x = 0;

//   console.log(ptBR.frase)
  
//   const eng = {
//     frase: "Meu texto em ENG",
//     titleProjects: "Portfplio",
//     titleCertificates: "Certificates & Courses"
//   }

//   var texto = $("#aboutme");
//   var titlePort = $("#idTitlePort");
//   var titleCert = $("#idTitleCert");

//   if(language === 'en' ) {
    
//   } else {

//   }
// }