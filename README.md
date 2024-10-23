# Movies & Series

Una aplicación web sobre información de películas y series.

## Descripción

Movies & Series es una plataforma intuitiva que permite a los usuarios buscar, explorar y descubrir una amplia variedad de películas y series. Con una interfaz amigable, puedes acceder a detalles sobre cada título, incluyendo descripciones, fechas de lanzamiento, géneros y calificaciones.

## Características

- **Detalles de Títulos**: Accede a información detallada sobre cada película o serie, incluyendo sinopsis, reparto, y más.
- **Interfaz Amigable**: Navegación intuitiva y responsiva para una mejor experiencia de usuario.
- **Lista de Favoritos**: Guarda tus películas y series preferidas para acceder a ellas rápidamente.

## Instalación

Para instalar la aplicación, sigue estos pasos:

1. Clona el repositorio
2. Crear el archivo .env en el directorio raíz con las siguientes variables de entorno:

```
VITE_APIURL=https://api.themoviedb.org/3
VITE_APIKEY=YOUR_API_KEY
```

3. Instala las dependencias: `npm install`
4. Inicia el build de la aplicación: `npm run build`
5. Inicia la aplicación: `npm run preview`

## Sitio en linea en netlify

[![Netlify Status](https://api.netlify.com/api/v1/badges/8e902080-bae1-4f89-bb45-afeeb4edeba3/deploy-status)](https://app.netlify.com/sites/moviesandserieschallenge/deploys)

* Sitio en línea: [https://moviesandserieschallenge.netlify.app/](https://moviesandserieschallenge.netlify.app/)

## Decisiones Técnicas y Arquitectónicas

Para este proyecto, tomé varias decisiones técnicas y arquitectónicas para garantizar una solución robusta, eficiente y escalable:

### 1. *Elección de React con TypeScript*
El uso de TypeScript añadió ventajas como la tipificación estática, lo que mejora la calidad del código y la capacidad de mantenimiento.

### 2. *Estructura del Layout*
Creé un layout con los siguientes componentes:
- *Navbar:* Barra de navegación fija.
- *Footer:* Pie de página.
- *Content:* Componente principal que alberga todos los children y muestra las diferentes pantallas.

### 3. *Gestión de Screens y Componentes*
Se desarrollaron las distintas screens solicitadas y se implementó lazy loading para la carga eficiente de estas pantallas, mejorando así la performance de la aplicación.

### 4. *Manejo de Solicitudes a la API*
Para la interacción con la API de TMDB, utilicé axios y react-query, permitiendo un manejo eficiente de las solicitudes y el caching de las respuestas. Además, se creó un servicio específico para centralizar y manejar estas peticiones.

### 5. *Manejo de Errores*
Implementé Error Boundary para capturar y gestionar errores en la UI, asegurando que la aplicación no falle catastróficamente.

### 6. *Organización del Código*
Los componentes se dividieron en carpetas, siguiendo una estructura clara y modular, facilitando el mantenimiento y escalabilidad del proyecto.

### 7. *Modelos en TypeScript*
Se crearon los modelos necesarios en TypeScript para garantizar la coherencia y predictibilidad de los datos a través de la aplicación.

### 8. *Gestión del Estado*
Utilicé zustand para la creación de stores, manejando el estado del modal y el estado de los favoritos de manera eficiente y sencilla.

## Estrategias con Más Tiempo

Si tuviera más tiempo asignado al proyecto, consideraría las siguientes mejoras:
1. *Auditoría de Accesibilidad:* Implementar una auditoría completa de accesibilidad para asegurarse de que la aplicación sea completamente usable por personas con discapacidades.
2. *Documentación Extensiva:* Crear una documentación más detallada, incluyendo guías de estilo de código, convenciones de commits, y una hoja de ruta para el desarrollo futuro.
3. *Pruebas de Testing:* Aumentar la cobertura de pruebas de unit testing, incluyendo pruebas end-to-end con herramientas como Playwright.
4. *Internacionalización (i18n):* Preparar la aplicación para soportar múltiples idiomas, ampliando su alcance a una audiencia global.
5. *Crear un BFF:* Desarrollar un Backend for Frontend (BFF) para la aplicación, lo que facilitará una integración más eficiente y una gestión óptima de la información, delegando la lógica de los servicios para aliviar al frontend de procesos complejos.

## Contacto

Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme:

* Correo electrónico: [ignaciolmartin@gmail.com](mailto:ignaciolmartin@gmail.com)