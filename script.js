
document.addEventListener('DOMContentLoaded', function () {
    
    const form = document.querySelector('.contacto__formulario');
    const nombre = form.querySelector('input[type="text"]');
    const email = form.querySelector('input[type="email"]');
    const mensaje = form.querySelector('textarea');
    const errorContainer = document.createElement('div'); 
    errorContainer.classList.add('error-container'); 
    form.insertBefore(errorContainer, form.firstChild); 

    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        let errores = [];
        errorContainer.innerHTML = ''; 

        if (nombre.value.trim() === '') {
            errores.push('El campo "Nombre" es obligatorio.');
        }

        if (!validarEmail(email.value)) {
            errores.push('El correo electrónico no es válido.');
        }

        if (mensaje.value.trim() === '') {
            errores.push('El campo "Mensaje" es obligatorio.');
        }

        if (errores.length > 0) {
            errorContainer.innerHTML = errores.join('<br>'); 
        } else {
            alert('Formulario enviado con éxito');
            
            form.reset(); 
        }
    });

        function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const secciones = document.querySelectorAll('section');
    const options = {
        threshold: 0.2 
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, options);

    secciones.forEach(seccion => {
        observer.observe(seccion);
    });

    const enlacesMenu = document.querySelectorAll('.navegacion__elemento a');
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function () {
            enlace.classList.add('animar-enlace');
            setTimeout(() => {
                enlace.classList.remove('animar-enlace');
            }, 500); 
        });
    });
});
