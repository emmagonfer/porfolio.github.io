const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const sideMenu = document.getElementById('sideMenu');

menuBtn.onclick = () => {
    sideMenu.classList.add('active');
}

closeBtn.onclick = () => {
    sideMenu.classList.remove('active');
}

// Esperamos a que todo el HTML esté cargado antes de ejecutar nada
document.addEventListener('DOMContentLoaded', () => {

// 1. Define los datos de tus proyectos
    const projectData = {
        'cata-la-lata': {
            title: 'CATA LA LATA',
            description: 'Diseño de packagin para Cata la lata. Realizando ilustraciones vectorizadas humanizando a las conservas que se venden. Con un tono cercano y gracioso.',
            program: 'ILLUSTRATOR',
            images: [
                '../img/IDENTIDAD GRÁFICA/atunes/1.png',
                '../img/IDENTIDAD GRÁFICA/atunes/2.jpg',
                '../img/IDENTIDAD GRÁFICA/atunes/3.jpg',
                '../img/IDENTIDAD GRÁFICA/atunes/4.jpg',
                '../img/IDENTIDAD GRÁFICA/atunes/5.png',
                '../img/IDENTIDAD GRÁFICA/atunes/6.png',
                '../img/IDENTIDAD GRÁFICA/atunes/7.png',
                '../img/IDENTIDAD GRÁFICA/atunes/8.png',
            ]
        },
        'madrid-fashion-week': {
            title: 'MADRID FASHION WEEK',
            description: 'Realizadas para el desfile de la ESD durante la Madrid Fashion Week, creamos una serie de animaciones reactivas a la música para proyectarlas de fondo durante la pasarela de los modelos. Para realizarlas se tuvo en cuenta la estética de dichos diseñadores, para que encajara todo lo mejor posible',
            program: 'AFTER EFFECTS/ RESOLUME ARENA',
            images: [
                '../img/ANIMACIÓN/madrid fashion week/1.mp4',
                '../img/ANIMACIÓN/madrid fashion week/2.mp4',
                '../img/ANIMACIÓN/madrid fashion week/3.mp4',
                '../img/ANIMACIÓN/madrid fashion week/4.mp4',
                '../img/ANIMACIÓN/madrid fashion week/5.mp4',
            ]
        },
        'carusos-logo': {
            title: 'CARUSOS | MARCA ITALIANA',
            description: 'Identidad gráfica de una marca italiana ficticia de productos de lujo. Con una estética minimalista, revocando a la cultura del sur de italia. Se realizaron pictogramas, creación del logo y diferentes aplicaciones',
            program: 'ILLUSTRATOR',
            images: ['../img/IDENTIDAD GRÁFICA/carusos logo/primera foto.jpg',
                '../img/IDENTIDAD GRÁFICA/carusos logo/1.jpg',
                '../img/IDENTIDAD GRÁFICA/carusos logo/2.jpg',
                '../img/IDENTIDAD GRÁFICA/carusos logo/3.jpg',
                '../img/IDENTIDAD GRÁFICA/carusos logo/4.jpg',
                '../img/IDENTIDAD GRÁFICA/carusos logo/5.jpg',
                '../img/IDENTIDAD GRÁFICA/carusos logo/6.jpg',
            ]
        },
        'happier-than-ever': {
            title: 'HAPPIER THAN EVER | BILLIE EILISH',
            description: 'Animación de la canción "Happier than ever" de Billie Eilish. La intención es mostrar las diferentes emociones y sensaciones, así como la narrativa de la historia usando la tipografía y elementos gráficos más o menos simples.',
            program: 'AFTER EFFECTS/ PHOTOSHOP',
            images: ['../img/ANIMACIÓN/billie/1.mp4']
        },
        'carusos-animacion': {
            title: 'CARUSOS | MARCA ITALIANA',
            description: 'Tomando en cuenta la creación de una marca italiana imaginaria, se realizó una animación. El estilo es cercano, alegre, pretendiendo atraer a un público joven, con movimientos fluidos y formas y colores llamativas, transmitiendo un mensaje claro.',
            program: 'AFTER EFFECTS/ ILLUSTRATOR',
            images: ['../img/ANIMACIÓN/carusos animación/1.mp4',
                '../img/ANIMACIÓN/carusos animación/2.mp4',
                '../img/ANIMACIÓN/carusos animación/3.mp4',
                '../img/ANIMACIÓN/carusos animación/4.png',
            ]
        },
        'modelado-personaje': {
            title: 'MODELADO DE PERSONAJE',
            description: 'Siguiendo como modelo un personaje creado para una asignatura, realize un modelo 3D del mismo. Empleando diferentes herramientas de cinema 4D para que se viera lo más coherente posible.',
            program: 'CINEMA 4D',
            images: ['../img/3d/jpg/pimientito/primera foto.jpg',
                '../img/3d/jpg/pimientito/2.jpg',
                '../img/3d/jpg/pimientito/3.png',
                '../img/3d/jpg/pimientito/4.png',
                '../img/3d/jpg/pimientito/5.png',
            ]
        },
        'evelyn-hugo': {
            title: 'LOS 7 MARIDOS DE EVELYN HUGO',
            description: 'Reedición de los 7 maridos de Evelyn hugo, libro de la autora Taylor Jenkins Reid. Dandole un estilo mucho más experimental, probando vacios, juegos de tipografía y colocación del texto... Dandole un enfoque mucho más hacia el gusto visual y emocional que practico de lectura.',
            program: 'INDESIGN',
            images: ['../img/EDITORIAL/evelyn/primera foto.jpg',
                '../img/EDITORIAL/evelyn/evelyn 2.jpg',
                '../img/EDITORIAL/evelyn/evelyn 3.jpg',
                '../img/EDITORIAL/evelyn/evelyn 4.jpg',
                '../img/EDITORIAL/evelyn/evelyn 5.jpg',
                '../img/EDITORIAL/evelyn/evelyn 6.jpg',
            ]
        },
        'luisa-fernanda': {
            title: 'CARTEL LUISA FERNANDA',
            description: 'Propuesta finalista para la elección del cartel de Luisa Fernanda para la actuación realizada por la escuela superior de canto en 2025.',
            program: 'PHOTOSHOP',
            images: ['../img/IDENTIDAD GRÁFICA/luisa fernanda/1.jpg',
                '../img/IDENTIDAD GRÁFICA/luisa fernanda/2.jpg',
            ]
        },
        'fancine': {
            title: 'FANCINE',
            description: 'Fancine inspirado en una caja de cartas. Habla sobre como no todo es lo que parece, y tal como una carta, todo tiene dos lados. Se compone de dos lados separados, pudiendo iniciar el libro por cualquiera de ellos, en uno se muestra como la ven otros por fuera y en el otro como lo siente ella por dentro.',
            program: 'CLIP STUDIO PAINT/ INDESIGN',
            images: ['../img/ILUSTRACIÓN/parte mala/1.jpg',
                '../img/ILUSTRACIÓN/parte mala/2.jpg',
                '../img/ILUSTRACIÓN/parte mala/3.jpg',
                '../img/ILUSTRACIÓN/parte mala/4.jpg',
                '../img/ILUSTRACIÓN/parte mala/5.jpg',
                '../img/ILUSTRACIÓN/parte mala/6.jpg',
                '../img/ILUSTRACIÓN/parte mala/7.jpg',
                '../img/ILUSTRACIÓN/parte mala/8.jpg',
                '../img/ILUSTRACIÓN/parte mala/9.jpg',
                '../img/ILUSTRACIÓN/parte mala/10.jpg',
                '../img/ILUSTRACIÓN/parte mala/11.jpg',
                '../img/ILUSTRACIÓN/parte mala/12.jpg',
            ]
        },
        'escultura-abstracta': {
            title: 'ESCULTURA ABSTRACTA',
            description: 'Escultura realizada como prueba de materiales, texturas y luces.',
            program: 'CINEMA 4D',
            images: ['../img/3d/jpg/proyecto 1/primera foto.jpg',
                '../img/3d/jpg/proyecto 1/1.jpg',
                '../img/3d/jpg/proyecto 1/2.jpg',
                '../img/3d/jpg/proyecto 1/3.jpg',
            ]
        },
        'fotos-movimiento': {
            title: 'FOTOS EN MOVIMIENTO',
            description: 'Estudio fotográfico centrado en capturar el dinamismo, la estela del tiempo y la sensación de velocidad.',
            program: 'CAMARA',
            images: ['../img/foto/3/primera foto.JPG',
                '../img/foto/3/2.JPG',
                '../img/foto/3/3.JPG',
                '../img/foto/3/4.JPG',
            ]
        },
        'capturar-momento': {
            title: 'CAPTURAR EL MOMENTO',
            description: 'Estudio fotográfico centrado en capturar el momento, el segundo de movimiento, pausando el tiempo brevemente.',
            program: 'CAMARA',
            images: ['../img/foto/4/primera foto.JPG',
                '../img/foto/4/1.jpeg',
                '../img/foto/4/2.jpeg',
                '../img/foto/4/3.jpeg',
                '../img/foto/4/4.JPG',
            ]
        },
        'serigrafia': {
            title: 'ZOE CIUDADES INVISIBLES',
            description: 'El trabajo consiste en la reinterpretación de la ciudad de Zoe del libro Las ciudades invisibles de Italo Calvino mediante técnicas clásicas de estampación, concretamente planchas litográficas. A través de este proceso se busca traducir el texto a un lenguaje visual basado en el grabado, generando composiciones abstractas donde las formas y manchas refuerzan la idea de una ciudad sin límites claros ni funciones definidas. El concepto de Zoe como “ciudad indivisible”, en la que todo puede ser cualquier cosa y las fronteras entre espacios desaparecen, se refleja en imágenes ambiguas, densas y en transformación constante, donde la interpretación del espacio queda abierta al espectador.',
            program: 'TÉCNICAS MANUALES',
            images: [
                '../img/ILUSTRACIÓN/serigrafía/1.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/2.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/3.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/4.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/5.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/6.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/7.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/8.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/9.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/primera foto.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/10.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/11.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/12.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/13.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/14.jpeg',
                '../img/ILUSTRACIÓN/serigrafía/15.jpeg',
            ]
        },
        'animacion-abstracta': {
            title: 'ANIMACIÓN ABSTRACTA',
            description: 'La historia que se representa es la de una bola que es atacada por otras, como si la estubieran “acosando”. Así que despues de ser “atacada” muchas veces, explota, revelando su interior. El cual ha sido llenado de todos esos ataques, cambiando hasta como era antes',
            program: 'AFTER EFFECTS',
            images: ['../img/ANIMACIÓN/animacion abstracta/1.mp4']
        },
        'e-ese-days': {
            title: 'E ESE DAYS',
            description: 'Animaciones realizadas para las jornadas de los E ESE Days en la Escuela Superior de Diseño de Madrid (ESD) en Febrero de 2026.',
            program: 'AFTER EFFECTS',
            images: [
                '../img/ANIMACIÓN/esdays/1.mp4',
                '../img/ANIMACIÓN/esdays/2.mp4',
                '../img/ANIMACIÓN/esdays/3.mp4',
                '../img/ANIMACIÓN/esdays/4.mp4',
                '../img/ANIMACIÓN/esdays/5.mp4',
            ]
        },
        'modelado-objeto': {
            title: 'MODELADO OBJETO',
            description: 'Se modeló una cafetera moka en Cinema 4D a partir de planos de referencia, buscando un resultado realista. Se usaron formas geométricas modificadas con herramientas como el cuchillo, y se aplicaron materiales de aluminio y plástico. Finalmente, se suavizaron las uniones con extrusión de superficie y se realizaron renders desde distintas vistas.',
            program: 'CINEMA 4D',
            images: ['../img/3d/jpg/cafetera/primera foto.jpg',
                '../img/3d/jpg/cafetera/1.jpg',
                '../img/3d/jpg/cafetera/2.jpg',
                '../img/3d/jpg/cafetera/3.jpg',
                '../img/3d/jpg/cafetera/4.jpg',
                '../img/3d/jpg/cafetera/5.png',
                '../img/3d/jpg/cafetera/6.png',
                '../img/3d/jpg/cafetera/7.jpg',
            ]
        },
        'iconos-salud-mental': {
            title: 'ICONOS SOBRE LA SALUD MENTAL',
            description: 'Se diseñaron 12 pictogramas sobre salud mental con una estética cuadrada, usando una retícula de líneas horizontales, verticales y a 45°. Las formas se construyeron principalmente con rectángulos y círculos, asegurando que todos encajaran en un mismo cuadrado base. Tras ajustar problemas de legibilidad en tamaños pequeños y en negativo, se definió el estilo final. Se eligió la tipografía Avenir por su coherencia geométrica y se propusieron aplicaciones como carteles, patrones y una app personalizada, buscando una función más allá de lo estético. Los pictogramas representan: narcisismo, miedo a hablar en público, insomnio, bipolaridad, problemas alimentarios, conciencia de la salud mental, depresión, autolesiones, enfado, ansiedad, esquizofrenia y miedo.',
            program: 'ILLUSTRATOR',
            images: ['../img/IDENTIDAD GRÁFICA/pictogramas salud mental/primera foto.jpg',
                '../img/IDENTIDAD GRÁFICA/pictogramas salud mental/2.jpg',
                '../img/IDENTIDAD GRÁFICA/pictogramas salud mental/3.png',
                '../img/IDENTIDAD GRÁFICA/pictogramas salud mental/4.png',
                '../img/IDENTIDAD GRÁFICA/pictogramas salud mental/5.jpg',
                '../img/IDENTIDAD GRÁFICA/pictogramas salud mental/6.jpg',
                '../img/IDENTIDAD GRÁFICA/pictogramas salud mental/7.jpg',
                '../img/IDENTIDAD GRÁFICA/pictogramas salud mental/8.jpg',
                
            ]
        },
        'portada-disco': {
            title: 'PORTADA DISCO | BEATLES',
            description: 'El diseño presenta una cinta de vídeo que recorre la composición de izquierda a derecha mostrando los rostros de The Beatles, simbolizando su trayectoria continua y atemporal. A nivel técnico, se utilizó un degradado de azul a blanco para el fondo, la cinta se construyó con rectángulos negros y los agujeros mediante buscatrazos, mientras que las caras se editaron a partir de fotos reales con calco de imagen en blanco y negro, añadiendo además efectos de ruido y polvo para un acabado envejecido. La propuesta del reverso es más sencilla y se centra en el nombre de la banda y la letra de la canción, incorporando partituras sutiles en el fondo y manteniendo el mismo estilo visual, dando mayor protagonismo al nombre y añadiendo un toque manuscrito junto con información adicional, sin perder los efectos de textura y antigüedad.',
            program: 'ILLUSTRATOR/ PHOTOSHOP',
            images: ['../img/IDENTIDAD GRÁFICA/beatles/Portada now and then_Emma Gonzalez 1.jpg',
                '../img/IDENTIDAD GRÁFICA/beatles/Contraportada los beatles_Emma Gonzalez 2.jpg',
            ]
        },
        'maneskin': {
            title: 'ILUSTRACIÓN MÅNESKIN | GOSSIP',
            description: 'El trabajo consiste en desarrollar una frase mediante lettering, en este caso “You’re not iconic, you’re just like them all. Don’t act like you don’t know” de la canción “Gossip” de Måneskin. Para ello, el diseño se inspira en la estética y actitud de la banda, caracterizada por su carácter desafiante y rompedor de normas, así como en el mensaje de la canción, que critica la falsa individualidad. Esta idea se traslada a la tipografía a través de la forma, textura y composición de las letras, buscando reflejar ese espíritu de rebeldía.',
            program: 'CLIP STUDIO PAINT',
            images: ["../img/ILUSTRACIÓN/you're just like them all/primera foto.png",
                "../img/ILUSTRACIÓN/you're just like them all/1.png",
                "../img/ILUSTRACIÓN/you're just like them all/2.png",
                "../img/ILUSTRACIÓN/you're just like them all/3.png",
                "../img/ILUSTRACIÓN/you're just like them all/4.png",
                "../img/ILUSTRACIÓN/you're just like them all/5.png",
                "../img/ILUSTRACIÓN/you're just like them all/6.png",
                "../img/ILUSTRACIÓN/you're just like them all/7.png",
                "../img/ILUSTRACIÓN/you're just like them all/8.jpg",
                "../img/ILUSTRACIÓN/you're just like them all/9.png",
            ]
        },
        'cartel-ilustracion': {
            title: 'CARTEL JORNADAS ILUSTRACIÓN',
            description: 'El trabajo consiste en presentar de forma dinámica las Jornadas de ilustración, mostrando las dos caras principales: la ilustración como herramienta de interpretación y creación, y la autoedición como proceso que implica decisiones sobre producción, distribución y marca personal. A través de una ilustración centrada en una mesa como espacio de encuentro y debate, se plantea una composición que refleja la dualidad entre ambos ámbitos. Se experimenta con un estilo cercano al cómic, de carácter espontáneo, con trazos imperfectos y color aplicado de forma informal para aportar dinamismo. El uso de colores complementarios, azul y rojo, permite diferenciar los roles y reforzar el concepto, mientras que el fondo amarillo potencia la visibilidad. La composición triangular genera sensación de volumen y movimiento, dando como resultado una imagen clara pero enérgica que comunica tanto el contenido del evento como las tensiones entre las exigencias externas e internas dentro del ámbito creativo.',
            program: 'CLIP STUDIO PAINT',
            images: ['../img/ILUSTRACIÓN/cartel ilustracion/1.jpeg',
                '../img/ILUSTRACIÓN/cartel ilustracion/2.jpeg',
                '../img/ILUSTRACIÓN/cartel ilustracion/3.jpeg',
                '../img/ILUSTRACIÓN/cartel ilustracion/4.jpeg',
                '../img/ILUSTRACIÓN/cartel ilustracion/5.jpeg',
            ]
        },
        'retrato': {
            title: 'RETRATO',
            description: 'Realización de fotos en primer plano, centrados en el rostro y la expresión.',
            program: 'CAMARA',
            images: ['../img/foto/1/primera foto.JPG',
                '../img/foto/1/1.JPG',
                '../img/foto/1/2.JPG',
                '../img/foto/1/3.JPG',
                '../img/foto/1/4.JPG',
                '../img/foto/1/5.JPG',
            ]
        },
        'teatros-canal': {
            title: 'REDISEÑO TEATROS DEL CANAL',
            description: 'El rediseño consistia en la modernización en la web, logo y en general toda la estética de los teatros del canal. optamos por unos colores más llamativos para captar la atención del público, así como por una estética mucho más moderna, conectando más con las nuevas generaciones. Se usan 4 colores principales, representando las versas salas del teatro. También se creó una tipografía y logo propio, siguiendo una retícula curva.',
            program: 'ILLUSTRATOR/ PHOTOSHOP/ INDESING/ AFTER EFFECTS',
            images: ['../img/IDENTIDAD GRÁFICA/teatros del canal/primera foto.png',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/1.png',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/2.jpg',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/3.png',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/4.jpg',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/5.mp4',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/6.mp4',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/7.mp4',
                '../img/IDENTIDAD GRÁFICA/teatros del canal/8.png',
            ]
        },
        'pimientito': {
            title: 'ALBUM ILUSTRADO | PIMIENTITO MORRÓN',
            description: 'Para este proyecto se creó un álbum ilustrado con el objetivo de explorar cómo la narrativa y el relato visual pueden combinarse para transmitir valores, emociones y mensajes de forma accesible. La historia, titulada Pimientito Morrón, sigue a un niño travieso que no quiere ir al colegio, pero que poco a poco descubre la importancia del esfuerzo cuando empieza a recibir cada mañana una moneda misteriosa que resulta ser un regalo de su hada madrina. A través de este descubrimiento, aprende que crecer y superarse también puede ser una aventura. La ilustración se realiza por un valor sentimental, ya que es un cuento inventado por la abuela del autor para su familia, convirtiéndose en un proyecto con carga emocional además de académica. Está dirigido a un público infantil en edad preescolar y primeros cursos de primaria, y busca transmitir valores como la motivación por aprender, la superación de miedos y la confianza en uno mismo a través de una historia cercana y comprensible.',
            program: 'CLIP STUDIO PAINT',
            images: ['../img/ILUSTRACIÓN/pimientito/primera foto.jpg',
                '../img/ILUSTRACIÓN/pimientito/1.jpg',
                '../img/ILUSTRACIÓN/pimientito/2.jpeg',
                '../img/ILUSTRACIÓN/pimientito/3.png',
                '../img/ILUSTRACIÓN/pimientito/4.png',
                '../img/ILUSTRACIÓN/pimientito/5.jpg',
                '../img/ILUSTRACIÓN/pimientito/6.jpeg',
            ]
        },
        'jardin-botanico': {
            title: 'CUADERNILLO REAL JARDÍN BOTÁNICO',
            description: 'Propuesta de rediseño para el folleto del Real Jardín Botánico para mejorar su legibilidad, jerarquía y atractivo visual. Se utilizan imágenes tratadas como grabados inspirados en la ilustración científica tradicional, aportando un carácter serio y contemporáneo. La paleta se limita a gamas de verde para reforzar la relación con la naturaleza y generar unidad visual, combinada con blanco y negro en textos para mejorar la claridad. La información se organiza separando teoría y ejercicios en dos partes independientes dentro del mismo sistema. Tipográficamente se combinan Bodoni y Montserrat, creando un contraste entre tradición y modernidad. El resultado es una composición limpia, coherente y fácilmente replicable en series variando solo color e imágenes según la temática.',
            program: 'PHOTOSHOP/ INDESIGN',
            images: ['../img/EDITORIAL/libro plantitas/primera foto.jpg',
                '../img/EDITORIAL/libro plantitas/1.jpg',
                '../img/EDITORIAL/libro plantitas/2.jpg',
                '../img/EDITORIAL/libro plantitas/3.jpg',
                '../img/EDITORIAL/libro plantitas/4.jpg',
            ]
        },
        'rotoscopia': {
            title: 'ROTOSCOPIA | REGRESO AL FUTURO',
            description: 'El trabajo consiste en una pieza audiovisual de rotoscopia basada en el tema del futuro, inspirada en Regreso al Futuro. La animación, de 16 segundos, muestra a Marty McFly utilizando un patinete que se transforma en su versión voladora, acompañado de un cambio de color más desaturado a tonos vivos para marcar la transición temporal. El estilo visual es sencillo, con líneas dibujadas y color plano, influenciado por el ending Lost in Paradise de Jujutsu Kaisen, y acompañado por la banda sonora de la película. Para su realización se partió de un vídeo base, sobre el que se aplicó rotoscopia en Photoshop y ajustes en After Effects, incorporando además el diseño del personaje a partir de referencias y elementos propios.',
            program: 'PHOTOSHOP/ AFTER EFFECTS',
            images: ['../img/ANIMACIÓN/rotoscopia/1.mp4']
        },
        'starbucks': {
            title: 'MODELAJE STARBUCKS',
            description: 'El trabajo consiste en crear la versión tridimensional del logotipo de Starbucks, respetando sus valores comunicativos y realizando cuatro renders desde distintas vistas. Tras varias pruebas (desde una extrusión simple hasta un vaso con el logo como tapa), se desarrolló un modelado 3D más completo utilizando cilindros, splines y modificadores para generar las formas curvas. Aunque presenta algunas imprecisiones en detalles como las colas y el rostro, el resultado final logra una representación volumétrica coherente y reconocible del logotipo.',
            program: 'CINEMA 4D',
            images: ['../img/3d/jpg/starbucks/primera foto.jpg',
                '../img/3d/jpg/starbucks/1.jpg',
                '../img/3d/jpg/starbucks/2.jpg',
                '../img/3d/jpg/starbucks/3.png',
                '../img/3d/jpg/starbucks/4.png',
            ]
        },
        'animacion-collage': {
            title: 'ANIMACIÓN COLLAGE',
            description: 'Animación de caracter cómico que representa de manera figurativa la frase "A quien madruga dios le ayuda"',
            program: 'PHOTOSHOP/ AFTER EFFECTS',
            images: ['../img/ANIMACIÓN/collage animacion/1.mp4',
                '../img/ANIMACIÓN/collage animacion/2.mp4',
            ]
        },
        'animales-arquitectos': {
            title: 'ANIMALES ARQUITECTOS',
            description: 'El proyecto consiste en el rediseño de Animales arquitectos de Juhani Pallasmaa para integrarlo en una colección editorial más contemporánea y atractiva para un lector actual. Se busca mejorar la experiencia de lectura mediante una maquetación más clara, un formato ampliado, tipografía Helvetica por su legibilidad y un lenguaje visual más actual sin perder la esencia del libro. Las ilustraciones mantienen la referencia a los grabados originales, pero reinterpretados de forma moderna con técnicas digitales, dibujo manual y una paleta azul común, generando una estética coherente y accesible dentro de una narrativa visual renovada.',
            program: 'INDESIGN/ PHOTOSHOP',
            images: ['../img/EDITORIAL/animales arquitectos/primera foto.png',
                '../img/EDITORIAL/animales arquitectos/1.jpg',
                '../img/EDITORIAL/animales arquitectos/2.jpg',
                '../img/EDITORIAL/animales arquitectos/3.jpg',
                '../img/EDITORIAL/animales arquitectos/4.jpg',
            ]
        }
    };

    // 2. Variables y elementos del DOM
    let currentProjectData = null;
    let currentImageIndex = 0;

    const modal = document.getElementById('projectModal');
    const closeBtnModal = document.getElementById('closeModal');
    const projectLinks = document.querySelectorAll('.item-proyecto');
    const modalImg = document.getElementById('modalImg');
    const modalTitle = document.getElementById('modalProjectTitle');
    const modalDesc = document.getElementById('modalDescription');
    const modalProgram = document.getElementById('modalProgram');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Comprobamos de que el modal existe en esta página antes de continuar
    if (!modal) return; 

    // 3. Funciones
function updateModalContent() {
        if (!currentProjectData || !currentProjectData.images || currentProjectData.images.length === 0) return;
        
        const mediaPath = currentProjectData.images[currentImageIndex];
        
        // 1. ¿Es vídeo o foto?
        if (mediaPath.toLowerCase().endsWith('.mp4')) {
            // ES UN VÍDEO 🎬
            modalImg.style.display = 'none'; // Ocultamos la foto
            
            // Buscamos si ya creamos la etiqueta de vídeo antes
            let videoEl = document.getElementById('modalVideo');
            if (!videoEl) {
                // Si no existe, la creamos
                videoEl = document.createElement('video');
                videoEl.id = 'modalVideo';
                videoEl.controls = true;  // Muestra la barra de play/pausa
                videoEl.autoplay = true;  // Que empiece solo
                videoEl.loop = true;      // Que se repita en bucle
                videoEl.muted = true;     // Que empiece sin sonido (mejor para la UX)
                
                // Lo metemos justo después de la imagen
                modalImg.parentNode.insertBefore(videoEl, modalImg.nextSibling);
            }
            
            videoEl.src = mediaPath;
            videoEl.style.display = 'block'; // Mostramos el vídeo
            videoEl.play();                  // Le damos al play
            
        } else {
            // ES UNA FOTO 📷
            let videoEl = document.getElementById('modalVideo');
            if (videoEl) {
                videoEl.style.display = 'none'; // Ocultamos el vídeo
                videoEl.pause();                // Lo pausamos por si estaba sonando
            }
            
            modalImg.src = mediaPath;
            modalImg.style.display = 'block'; // Mostramos la foto
        }

        // 2. Actualizamos los textos
        modalTitle.innerText = currentProjectData.title || '';
        modalDesc.innerText = currentProjectData.description || '';
        modalProgram.innerText = currentProjectData.program || '';
    }

    function closeModal() {
        modal.classList.remove('active');
        
        // Si hay un vídeo reproduciéndose, lo apagamos al cerrar la ventana
        let videoEl = document.getElementById('modalVideo');
        if (videoEl) {
            videoEl.pause();
        }
    }

    function prevImage() {
        if (!currentProjectData || !currentProjectData.images) return;
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = currentProjectData.images.length - 1;
        }
        updateModalContent();
    }

    function nextImage() {
        if (!currentProjectData || !currentProjectData.images) return;
        currentImageIndex++;
        if (currentImageIndex >= currentProjectData.images.length) {
            currentImageIndex = 0;
        }
        updateModalContent();
    }

    // 4. Asignar los eventos de CLIC a las imágenes
    projectLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // ¡ESTO ES LO QUE FRENA EL SALTO!

            const projectId = link.getAttribute('data-project-id');
            
            // Verificamos si el ID existe en tus datos
            if (projectData[projectId]) {
                currentProjectData = projectData[projectId];

                // Verificamos si el proyecto tiene al menos 1 imagen
                if (currentProjectData.images && currentProjectData.images.length > 0) {
                    currentImageIndex = 0; 
                    updateModalContent();
                    modal.classList.add('active'); // Mostramos el modal
                } else {
                    alert("Aún no has metido imágenes para este proyecto en el JavaScript.");
                }
            } else {
                alert("El ID '" + projectId + "' no existe en tu projectData de JavaScript.");
            }
        });
    });

    // 5. Controles del Modal
    if (closeBtnModal) closeBtnModal.addEventListener('click', closeModal);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

});
