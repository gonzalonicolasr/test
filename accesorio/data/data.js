 const noticias = [
    {
        categoria: 'politica',
        numero: 1,
        titulo: "Emergencia salarial en la UBA: Yacobitti advirtió que la situación es “gravísima” y que hay profesores que no llegan a fin de mes",
        fecha: "11 Jul, 2024",
        imagen: "/img/politica-1.jpg",
      informacion: "El vicerrector de la casa de estudios aseguró que la Universidad no es prioritaria para el Gobierno nacional. “Se va a perder calidad”, aseguró",
        link: "https://www.infobae.com/politica/2024/07/11/emergencia-salarial-en-la-uba-yacobitti-advirtio-que-la-situacion-es-gravisima-y-que-hay-profesores-que-no-llegan-a-fin-de-mes/",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'politica',
        numero: 2,
        titulo: "Bullrich aumentó más de 500% los montos para cada uno de los presos que están alojados en las cárceles",
        fecha: "11 de julio de 2024",
        imagen: "/img/la-ministra-de-seguridad-patricia-ZG5VKGM35RBS5ATIEJFT2ZNSUU.avif",
       informacion: "de los presos que están alojados en las cárceles. El Ministerio de Seguridad llevó la cifra desde $375 por día y por recluso a $2000; alegaron “razones de urgencia” y que el presupuesto estaba “significativamente retrasado”",
        link: "https://www.lanacion.com.ar/seguridad/bullrich-aumento-mas-de-500-los-montos-para-cada-uno-de-los-presos-que-estan-alojados-en-las-nid11072024/",
   favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'politica',
        numero: 3,
        titulo: "A 30 años del atentado. Declaran el 18 de julio Día de Duelo Nacional por la AMIA",
        fecha: "11 de julio de 2024",
        imagen: "/img/-XICSP5W7KNDBXO2BYCHSLLKIEU.avif",
       informacion: "Así lo establece la ley sancionada esta tarde por el Senado; la bandera deberá estar a media asta en edificios públicos y se promoverá la realización de actividades conmemorativas en las escuelas",
        link: "https://www.lanacion.com.ar/politica/atentado-a-la-amia-seran-dia-de-duelo-nacional-todos-los-18-de-julio-nid11072024/",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'politica',
        numero: 4,
        titulo: "Los gremios afectados por la restitución de Ganancias van a la Justicia por separado y la CGT evalúa una protesta contra el Gobierno",
        fecha: "10 de julio de 2024",
        imagen: "/img/la-mesa-chica-de-la-cgt-se-reunio-este-miercoles-AD43OBBY25EFJP3UGVPGVTFEXQ.avif",
       link:"https://www.lanacion.com.ar/politica/la-cgt-se-reune-hoy-y-busca-consensuar-un-nuevo-plan-de-lucha-contra-el-gobierno-nid10072024/",
        informacion: "La mesa chica de la central obrera se reunió para definir un plan de rechazo a la reforma laboral y a la reimposición de la cuarta categoría del impuesto a los ingresos; el 25 de julio convocarían a una marcha o un paro.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
        },
        // *********************
    {
        categoria: 'deportes',
        numero: 5,
        titulo: "Argentina vs. Colombia, por la final de la Copa América 2024: cuándo se juega el partido",
        fecha: "11 de julio de 2024 ",
        imagen: "/img/la-seleccion-argentina-busca-defender-el-titulo-FQRHLVVBANFSJLJL2U5PQRI7T4.avif",
        informacion: "El equipo dirigido por Lionel Scaloni se enfrentará en la definición a Colombia el próximo domingo en el Hard Rock Stadium de Miami.",
         link: "https://www.lanacion.com.ar/deportes/futbol/argentina-vs-colombia-por-la-final-de-la-copa-america-2024-cuando-se-juega-el-partido-nid10072024/",
  favorite : "/img/Todo_Noticias-removebg-preview.png"
        },
    {
        categoria: 'deportes',
        numero: 6,
        titulo: "El entrenador Alfio Basile está internado en una clínica de rehabilitación neurológica",
        fecha: "10 de julio de 2024",
        imagen: "/img/coco-Q4QUZLDWANDJBMMKEJWK32WBBY.avif",
        informacion: "El ex DT de Boca, Racing y la selección argentina tiene 80 años y un deterioro cognitivo severo.",
   link: "https://www.lanacion.com.ar/deportes/futbol/el-entrenador-alfio-basile-esta-internado-en-una-clinica-de-rehabilitacion-neurologica-nid10072024/",
   favorite : "/img/Todo_Noticias-removebg-preview.png"       
},
    {
        categoria: 'deportes',
        numero: 7,
        titulo: "Edinson Cavani regaló su camiseta y su pantalón de Boca en conmovedores gestos para con dos rivales",
        fecha: "20 de junio de 2024",
        imagen: "/img/los-futbolistas-de-boca-aplauden-a-los-hinchas-JVEJJ7T72FD7XIAJORK2RCW4PA.avif",
       link: "https://www.lanacion.com.ar/deportes/futbol/edinson-cavani-regalo-su-camiseta-y-su-pantalon-de-boca-en-conmovedores-gestos-para-con-dos-rivales-nid20062024/",
        informacion: "El uruguayo emocionó con dos actitudes hacia jugadores especiales de Almirante Brown tras el triunfo xeneize por Copa Argentina.",
   favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'deportes',
        numero: 8,
        titulo: "Novak Djokovic, implacable: un triunfo sencillo, el festejo del violinista y su enojo con el público",
        fecha: "8 de julio de 2024",
        imagen: "/img/novak-djokovic-y-la-celebracion-en-la-que-simula-NVJBGSZZDVEOJGGL6WPVPTQYM4.avif",
        link: "https://www.lanacion.com.ar/deportes/tenis/novak-djokovic-implacable-un-triunfo-sencillo-el-festejo-del-violinista-y-su-enojo-con-el-publico-nid08072024/",
        informacion: "El serbio le ganó sin problemas a Holger Rune, pero se mostró fastidioso con los espectadores.",
   favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    // ***********************************
    {
        categoria: 'economia',
        numero: 9,
        titulo: "Dólar hoy: cuál es el precio de la moneda el 11 de julio",
        fecha: "11 de julio de 2024",
        imagen: "/img/dolar-hoy-cual-es-el-precio-de-la-moneda-el-11-de-MTUXBR7WO5C55MGMNZYJGSWFEI.avif",
        link: "https://www.lanacion.com.ar/economia/dolar-hoy-cual-es-el-precio-de-la-moneda-el-11-de-julio-nid11072024/",
        informacion: "La moneda estadounidense cotiza a 901,26 para la compra y 959,43 para la venta; este precio informado por el Banco Nación lo ubica 51,65 por ciento por debajo de la cotización del dólar blue en el mercado paralelo.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'economia',
        numero: 10,
        titulo: "“Es lamentable”: el gobernador de Santa Cruz alertó sobre una gran mortandad de animales por la nieve",
        fecha: "11 de julio de 2024",
        imagen: "/img/el-gobernador-claudio-vidal-habla-con-VLYBN2OOHZABFBUHCUTFFAJWRE.avif",
        link: "https://www.lanacion.com.ar/economia/campo/es-lamentable-el-gobernador-de-santa-cruz-alerto-sobre-una-gran-mortandad-de-animales-por-la-nieve-nid11072024/",
        informacion: "El mandatario Claudio Vidal visitó zonas afectadas; buscan acelerar la ayuda.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'economia',
        numero: 11,
        titulo: "Remuneración pretendida: por la crisis, los empleados aceptan cobrar cada vez menos",
        fecha: "17 de enero  de 2024",
        imagen: "/img/el-salario-pretendido-aumento-casi-un-137percent-62G4XEGYCBFFZGI3AF6XOB6BNU.avif",
        link: "https://www.lanacion.com.ar/economia/empleos/remuneracion-pretendida-por-la-crisis-los-empleados-aceptan-cobrar-cada-vez-menos-nid17012024/",
        informacion: "En diciembre, los candidatos pretendieron cobrar $484.683; se trató de un aumento del 137% en 2023, muy por debajo de la inflación.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    // ***************************
    {
        categoria: 'policiales',
        numero: 12,
        titulo: "Patricia Bullrich, tras la reunión con el papá de Loan: “Hay gente que está callando y quiere impunidad”",
        fecha: "11 de julio 2024",
        imagen: "/img/patricia-bullrich-recibio-a-la-familia-de-loan-foto-tn-2SV6BFC4RFBADN5DIGOIJBL4H4.avif",
        link: "https://tn.com.ar/policiales/2024/07/11/patricia-bullrich-recibira-a-la-familia-de-loan-en-el-ministerio-de-seguridad/",
        informacion: "La ministra se reunió con la familia del nene de cinco años en el Ministerio de Seguridad. Detalló que reforzarán la custodia a José Peña y a sus hijos.",
   favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'policiales',
        numero: 13,
        titulo: "Murió el nene que fue baleado en medio de un tiroteo entre un policía y motochorros en Wilde",
        fecha: "11 de julio 2024",
        imagen: "/img/murio-un-nene-en-wilde-tras-ser-baleado-en-medio-de-un-tiroteo-entre-un-policia-y-motochorros-foto-captura-de-video-RGBG626QOJBZ7PKKDQAF6Z6QLU.avif",
        link: "https://tn.com.ar/policiales/2024/07/11/murio-el-nene-que-fue-baleado-en-medio-de-un-tiroteo-entre-un-policia-y-motochorros-en-wilde/",
        informacion: "El hecho ocurrió ayer por la noche, cuando el chico salía de un club junto a su mamá y recibió dos disparos..",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
   
    {
        categoria: 'policiales',
        numero: 14,
        titulo: "Caso Loan: qué reveló el informe grafológico ordenado por un fiscal sobre las firmas de Ramírez y Benítez",
        fecha: "11 de julio 2024",
        imagen: "/img/se-conocio-el-resultado-de-las-pericias-caligraficas-de-los-tres-primeros-detenidos-por-la-desaparicion-de-loan-foto-tn-2TAMOQZAFBELXNNAJZ3HZSIG5Y.avif",
        link: "https://tn.com.ar/policiales/2024/07/11/caso-loan-que-revelo-el-informe-grafologico-ordenado-por-un-fiscal-sobre-las-firmas-de-ramirez-y-benitez/",
        informacion: "El fiscal Juan Carlos Castillo, quien estaba a cargo del caso cuando era investigado por la Justicia de Corrientes, ordenó la pericia a los primeros detenidos..",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'policiales',
        numero: 15,
        titulo: "Escándalo en Salta: detuvieron a policías con 420 kilos de cocaína en el patrullero",
        fecha: "11 de julio 2024",
        imagen: "/img/policias-transportaban-en-un-movil-oficial-420-kilos-de-cocaina-en-salta-fueron-detenidos-en-un-operativo-de-gendarmeria-foto-tn-2FSYFHG33ZFZXOLKXPMFHZC2GU.avif",
       link: "https://tn.com.ar/policiales/2024/07/11/escandalo-en-salta-detuvieron-a-policias-con-420-kilos-de-cocaina-en-el-patrullero/",
        informacion: "Fue en Aguaray, una localidad que limita con Bolivia. Dos policías quedaron detenidos acusados de narcotráfico y un tercero está prófugo.",
  favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    // *******************************************
    {
        categoria: 'primiciasya',
        numero: 16,
        titulo: "Rocío Oliva reveló por qué no tuvo hijos con Diego Maradona: Siempre me decía que...",
        fecha: "11 jul 2024",
        imagen: "/img/rocio-oliva-maradonajpg.webp",
       link: "https://tn.com.ar/policiales/2024/07/11/escandalo-en-salta-detuvieron-a-policias-con-420-kilos-de-cocaina-en-el-patrullero/",
        informacion: "Fue en Aguaray, una localidad que limita con Bolivia. Dos policías quedaron detenidos acusados de narcotráfico y un tercero está prófugo.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'primiciasya',
        numero: 17,
        titulo: "Los papás de Tini Stoessel se mostraron cerca de Rodrigo de Paul y se reveló un rumor bomba",
        fecha: "10 jul 2024",
        imagen: "/img/tini-stoessel-alejandro-rodrigo-pauljpeg.webp",
       link: "https://www.a24.com/primiciasya/los-papas-tini-stoessel-se-mostraron-cerca-rodrigo-paul-y-se-revelo-un-rumor-bomba-n1333471/",
        informacion: "El conductor de LAM, Ángel de Brito, compartió imágenes de los papás de Tini Stoessel con los de Rodrigo de Paul en la semifinal de la Copa América.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
     {
        categoria: 'primiciasya',
        numero: 18,
        titulo: "La tajante opinión de Bautista Mascia sobre el premio al Mejor Jugador de Gran Hermano que Furia rechazó",
        fecha: "10 jul 2024",
        imagen: "/img/bautista-mascia-y-furia-ghjpg.webp",
       link: "https://www.a24.com/primiciasya/la-tajante-opinion-bautista-mascia-el-premio-al-mejor-jugador-gran-hermano-que-furia-rechazo-n1333401",
        informacion: "El ganador de Gran Hermano 2023 habló abiertamente sobre las estrategias de juego y quién fue para él realmente el mejor jugador de esta edición luego del desaire de Furia en la última gala. Aquí, la palabra de Bautista Mascia.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'primiciasya',
        numero: 19,
        titulo: "La revelación de Ángel de Brito cuando le preguntaron por la separación de Wanda Nara y Mauro Icardi",
        fecha: "10 jul 2024",
        imagen: "/img/angel-britojpg.webp",
       link: "https://www.a24.com/primiciasya/la-revelacion-angel-brito-cuando-le-preguntaron-la-separacion-wanda-nara-y-mauro-icardi-n1333358",
        informacion: "El conductor de LAM, Ángel de Brito, se pronunció sobre la nueva separación de Wanda Nara y Mauro Icardi.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },

    // ***********************************
    {
        categoria: 'diversion',
        numero: 20,
        titulo: "Fito Páez se encontró con Johnny Depp en un estudio en Londres: “Una visita inesperada y amorosa”",
        fecha: "11 Jul, 2024",
        imagen: "/img/W7FZNUHKGFDL3OGXP4R6MYHNY4.avif",
       link: "https://www.a24.com/primiciasya/la-revelacion-angel-brito-cuando-le-preguntaron-la-separacion-wanda-nara-y-mauro-icardi-n1333358",
        informacion: "El rosarino está en Abbey Road grabando su nuevo álbum y se mostró a pura sonrisa con el protagonista de Piratas del Caribe.",
   favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'diversion',
        numero: 21,
        titulo: "Siempre sensual Pampita lució un traje de baño que será tendencia para el próximo verano",
        fecha: "11 Jul, 2024",
        imagen: "/img/T3SGTL7RPFEEZGQ2QH4D73JDP4.avif",
       link: "https://www.infobae.com/teleshow/2024/07/11/siempre-sensual-pampita-lucio-un-traje-de-bano-que-sera-tendencia-para-el-proximo-verano/",
        informacion: "A través de las redes sociales la modelo impactó con su figura en una jornada a metros del mar y a pleno sol.",
   favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'diversion',
        numero: 22,
        titulo: "Agostina de Gran Hermano ofrece contenido erótico en una plataforma para adultos: “Jamás tuve prejuicios”",
        fecha: "10 Jul, 2024 ",
        imagen: "/img/angel-britojpg.webp",
       link: "https://www.infobae.com/teleshow/2024/07/10/agostina-de-gran-hermano-ofrece-contenido-erotico-en-una-plataforma-para-adultos-jamas-tuve-prejuicios/",
        informacion: "La expolicia salió de la casa más famosa y se animó a mostrar su cuerpo. Su incipiente relación con Luifa Galesio y la posibilidad de mudarse juntos a Italia.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    {
        categoria: 'diversion',
        numero: 23,
        titulo: "Santiago del Moro, íntimo después del final de Gran Hermano: “Tengo que recuperar mi vida”",
        fecha: "09 Jul, 2024 ",
        imagen: "/img/O73AJMIU6BDUXAV43MXJRX4GYE.avif",
       link: "https://www.infobae.com/teleshow/2024/07/09/santiago-del-moro-intimo-despues-del-final-de-gran-hermano-tengo-que-recuperar-mi-vida/",
        informacion: "En diálogo con Teleshow, el conductor habló acerca del devenir de la última temporada del reality show, cómo la realidad se metió en el juego y una reflexión sobre la fama.",
    favorite : "/img/Todo_Noticias-removebg-preview.png"
    },
    
];
// console.log(noticias)
const notiEnPartes = (size) => {
    let listaCompleta = []
    for (let i=0; i < noticias.length; i += size) { 
        listaCompleta.push(noticias.slice(i, i+ size))
    }

    return  listaCompleta
}

// ------------ mi estado
 const miEstado = {
    noticias:  notiEnPartes(6),
    comienza: 0,
    limiteDeNoti:  notiEnPartes(6).length,
    filtrado: null
}




