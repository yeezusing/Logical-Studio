
window.addEventListener('scroll', function () {
    // Seleccionar la imagen
    const imagen = document.getElementById('fon');
    // Obtener la posición de scroll vertical
    const scrollPosition = window.scrollY;
    // Ajustar el nivel de opacidad
    const maxScroll = 500; // Rango de scroll para que la opacidad cambie
    let opacity = 1 - (scrollPosition / maxScroll);

    // Limitar la opacidad a un mínimo de 0.3
    if (opacity < 0.05) {
        opacity = 0.05;
    }

    // Aplicar la opacidad calculada a la imagen
    imagen.style.opacity = opacity;
});

// Crear el cursor y su rastro dinámico
const customCursor = document.createElement('div');
const customCursorTrail = document.createElement('div');

// Asignar IDs a los elementos
customCursor.id = 'custom-cursor';
customCursorTrail.id = 'custom-cursor-trail';

// Agregar los elementos al documento
document.body.appendChild(customCursor);
document.body.appendChild(customCursorTrail);

// Función para mover el cursor y su rastro
document.addEventListener('mousemove', (e) => {
    const scrollY = window.scrollY;

    // Posicionar el cursor principal
    customCursor.style.left = `${e.pageX}px`;
    customCursor.style.top = `${e.pageY - scrollY}px`;

    // Posicionar el rastro del cursor con un ligero retraso
    setTimeout(() => {
        customCursorTrail.style.left = `${e.pageX}px`;
        customCursorTrail.style.top = `${e.pageY - scrollY}px`;
    }, 100);
});

// Opcional: Cambiar el estilo del cursor al pasar sobre enlaces
const links = document.querySelectorAll('a');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        document.body.classList.add('link-hover');
    });
    link.addEventListener('mouseleave', () => {
        document.body.classList.remove('link-hover');
    });
});


// Escucha el evento de scroll
window.addEventListener('scroll', () => {
    const secHome = document.getElementById('sec-home');
    const scrollY = window.scrollY; // Posición actual del scroll
    const fadeStart = 0; // Donde empieza el desvanecimiento
    const fadeEnd = 350; // Donde termina el desvanecimiento
    const fadeRange = fadeEnd - fadeStart;

    // Calcula la nueva opacidad
    let newOpacity = 1 - (scrollY - fadeStart) / fadeRange;
    if (newOpacity < 0) newOpacity = 0; // No permite opacidad negativa

    // Aplica la opacidad al sec-home
    secHome.style.opacity = newOpacity;
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Cuando la sección entra en vista, animamos el texto desde abajo
                    entry.target.classList.add("show");
                    entry.target.classList.remove("hidden");
                } else {
                    // Cuando la sección sale de la vista, animamos el texto hacia abajo
                    entry.target.classList.add("hidden");
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0.3 } // Activa cuando el 30% del elemento es visible
    );

    // Observamos los elementos que tienen la clase "hidden"
    const textos = document.querySelectorAll(".hidden");
    textos.forEach((texto) => {
        observer.observe(texto);
    });
});




document.addEventListener("scroll", function () {
    const sec2 = document.querySelector("#sec-2");
    const storeImg = document.querySelector("#store");
    const asesoriaImg = document.querySelector("#asesoriaimg");

    const sec2Position = sec2.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Verifica si la sección 2 está visible
    if (sec2Position.top < windowHeight && sec2Position.bottom > 0) {
        const opacity = Math.max(0, 1 - (sec2Position.top / windowHeight).toFixed(2));
        const translateY = Math.max(0, (1 - opacity) * 80); // Desplazamiento desde abajo

        // Aplica la animación a las imágenes
        storeImg.style.opacity = opacity;
        storeImg.style.transform = `translateY(${translateY}px)`;
        asesoriaImg.style.opacity = opacity;
        asesoriaImg.style.transform = `translateY(${translateY}px)`;
    } else {
        // Restablece las propiedades cuando la sección no está visible
        storeImg.style.opacity = 0;
        storeImg.style.transform = "translateY(50px)";
        asesoriaImg.style.opacity = 0;
        asesoriaImg.style.transform = "translateY(50px)";
    }
});

// Obtener los elementos del DOM
const storeImg = document.getElementById('store');
const textoProyectos = document.getElementById("textoproyectos");
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// Mostrar el popup cuando se haga clic en la imagen
storeImg.addEventListener('click', () => {
    popup.style.display = 'flex'; // Mostrar la ventana emergente
});

// Mostrar el popup cuando se haga clic en el texto "Proyectos"
textoProyectos.addEventListener('click', () => {
    popup.style.display = 'flex'; // Mostrar la ventana emergente
});

// Cerrar el popup cuando se haga clic en la X
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // Ocultar la ventana emergente
});

// Cerrar el popup si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none'; // Ocultar el popup si se hace clic fuera
    }
});


// Obtener el modal y la imagen de asesoría
var asesoriaImg = document.getElementById("asesoriaimg");
var popup2 = document.getElementById("popup2");
var closeBtn2 = document.querySelector(".close-btn2");

// Mostrar el modal cuando se hace clic en la imagen de asesoría
asesoriaImg.addEventListener("click", function() {
  popup2.style.display = "flex";  // Muestra el modal
});

// Cerrar el modal cuando se hace clic en el botón de cierre
closeBtn2.addEventListener("click", function() {
  popup2.style.display = "none";  // Oculta el modal
});

// Cerrar el modal si se hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
  if (event.target == popup2) {
    popup2.style.display = "none";  // Oculta el modal
  }
});


//textproyectos
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de texto de proyectos
    var textoProyectos = document.getElementById('textoproyectos');

    // Función para verificar la visibilidad al hacer scroll
    function checkVisibility() {
        var position = textoProyectos.getBoundingClientRect();

        // Verificamos si el texto está dentro de la vista
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            textoProyectos.classList.add('show');
        } else {
            textoProyectos.classList.remove('show');
        }
    }

    // Llamamos a la función al hacer scroll
    window.addEventListener('scroll', checkVisibility);

    // También verificamos la visibilidad al cargar la página
    checkVisibility();
});

// SEC-3
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Cuando el elemento entra en vista, se muestra con animación
                    entry.target.classList.add("show");
                    entry.target.classList.remove("inactive");
                } else {
                    // Cuando el elemento sale de la vista, vuelve a su estado inicial
                    entry.target.classList.add("inactive");
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0.3 } // Activa cuando el 30% del elemento es visible
    );

    // Observamos los elementos que tienen la clase "inactive"
    const textos = document.querySelectorAll(".inactive");
    textos.forEach((texto) => {
        observer.observe(texto);
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("video-modal");
  const video = document.getElementById("modal-video");
  const closeButton = document.querySelector(".close-button");
  const triggers = document.querySelectorAll(".video-container img, .play-button");

  // Abrir modal al hacer clic en la imagen o el botón
  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      modal.style.display = "flex"; // Muestra el modal
      video.play(); // Reproduce el video automáticamente
    });
  });

  // Cerrar modal al hacer clic en el botón de cerrar
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
    video.pause(); // Pausa el video
    video.currentTime = 0; // Reinicia el video
  });

  // Cerrar modal al hacer clic fuera del contenido
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      video.pause();
      video.currentTime = 0;
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Cuando el contenedor entra en la vista, activa la animación de entrada
                    entry.target.classList.add("show");
                    entry.target.classList.remove("inactive");
                } else {
                    // Cuando el contenedor sale de la vista, activa la animación de salida
                    entry.target.classList.add("inactive");
                    entry.target.classList.remove("show");
                }
            });
        },
        {
            threshold: 0.3 // El contenedor se activa cuando el 30% es visible
        }
    );

    // Observamos el contenedor de video
    const videoContainer = document.querySelectorAll(".video-container");
    videoContainer.forEach((container) => {
        observer.observe(container);
    });
});






// Seleccionar la imagen
var footerImage = document.getElementById("footerimage");

// Función para verificar si la imagen está dentro del viewport
function checkIfInView() {
    var rect = footerImage.getBoundingClientRect();
    var isInView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isInView) {
        // Si entra en el viewport, cambia la duración a 6.5s y muestra
        footerImage.style.transition = "opacity 6s ease";
        footerImage.classList.add("visible");
    } else {
        // Si sale del viewport, cambia la duración a 3s y oculta
        footerImage.style.transition = "opacity 1s ease";
        footerImage.classList.remove("visible");
    }
}

// Ejecutar la función cuando se hace scroll
window.addEventListener("scroll", checkIfInView);

// Verificar al cargar la página si la imagen ya está en el viewport
document.addEventListener("DOMContentLoaded", checkIfInView);


// Seleccionar el contenedor del texto del footer
var textFooter = document.querySelector(".text-footer");

// Función para verificar si el texto está en el viewport
function toggleFooterVisibility() {
    var rect = textFooter.getBoundingClientRect();
    var isInView = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInView) {
        textFooter.classList.add("visible");
        textFooter.classList.remove("hidden");
    } else {
        textFooter.classList.add("hidden");
        textFooter.classList.remove("visible");
    }
}

// Escuchar el scroll para verificar la visibilidad del texto
window.addEventListener("scroll", toggleFooterVisibility);

// Verificar al cargar la página si el texto está visible
document.addEventListener("DOMContentLoaded", toggleFooterVisibility);

