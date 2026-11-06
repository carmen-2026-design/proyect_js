# Hogwarts

**Enciclopedia interactiva de personajes del universo Harry Potter**

## Descripción

Hogwarts es una aplicación web que permite explorar el universo de Harry
Potter a través de un catálogo interactivo de personajes.

La aplicación ofrece un espacio para consultar información de los
personajes, conocer sus características y descubrir a qué casa de
Hogwarts pertenecen. Permite buscar personajes por nombre, consultar sus
datos principales y guardar los favoritos para acceder a ellos
fácilmente.

El proyecto está organizado en diferentes páginas para facilitar la
navegación y separar las funcionalidades principales: página de inicio,
catálogo de personajes y sección de favoritos.

Se trata de una aplicación **responsive**, diseñada para adaptarse a
distintos tamaños de pantalla y ofrecer una experiencia de navegación
cómoda tanto en ordenadores como en dispositivos móviles y tabletas.

## Tecnologías y API

-   **HTML5:** estructura de las páginas de la aplicación.
-   **CSS3:** diseño visual, estilos y adaptación a diferentes
    dispositivos.
-   **JavaScript (vanilla, módulos ES):** lógica de la aplicación,
    interacción con el DOM y gestión de eventos.
-   **Programación orientada a objetos:** representación de los
    personajes mediante la clase `Character`.
-   **Fetch API:** realización de peticiones asíncronas para obtener los
    datos de los personajes.
-   **Harry Potter API:** obtención de información de los personajes del
    universo Harry Potter mediante el endpoint
    `https://hp-api.onrender.com/api/characters`.
-   **localStorage:** almacenamiento y persistencia de los personajes
    favoritos en el navegador.
-   **Font Awesome:** utilización de iconos en la interfaz.
-   **Google Fonts:** utilización de las tipografías **Cinzel
    Decorative** y **Fauna One** para personalizar la presentación
    visual.
-   **Git:** control de versiones.

La aplicación funciona directamente en el navegador, sin backend propio
ni base de datos externa.

## Instalación y ejecución local

Hogwarts está desarrollado con HTML, CSS y JavaScript, por lo que no
requiere instalar dependencias del proyecto ni configurar una base de
datos.

Para ejecutarlo localmente:

1.  Descarga el repositorio o clónalo desde GitHub.
2.  Abre la carpeta del proyecto en **Visual Studio Code**.
3.  Abre el archivo `index.html` utilizando la extensión **Live Server**
    (por ejemplo, mediante la opción *Open with Live Server*).
4.  La aplicación se abrirá en el navegador desde una dirección local.

**Requisitos:** un navegador moderno, un servidor HTTP local como Live
Server y conexión a Internet para consultar la API.

> **Nota:** se recomienda utilizar un servidor local en lugar de abrir
> `index.html` directamente como archivo, ya que la aplicación utiliza
> módulos JavaScript (`import`/`export`).

## Guía rápida de uso

### Explorar Hogwarts

En la página de inicio encontrarás una presentación del universo
Hogwarts y sus cuatro casas: **Gryffindor, Slytherin, Ravenclaw y
Hufflepuff**.

Cada casa incluye una breve descripción de sus características y
elementos distintivos.

### Consultar el catálogo

Accede al catálogo para explorar los personajes de Harry Potter mediante
tarjetas visuales.

Cada tarjeta muestra información relevante, como:

-   Nombre del personaje.
-   Imagen.
-   Casa de Hogwarts.
-   Varita.
-   Patronus.

Puedes utilizar el buscador para localizar personajes por su nombre y el
selector para filtrar los resultados por casa. La información se
presenta mediante paginación para facilitar su consulta.

### Gestionar favoritos

Añade o elimina personajes de tu lista de favoritos mediante el icono
del corazón disponible en cada tarjeta.

Accede a la sección **Favoritos** para consultar los personajes que has
guardado. La información se conserva en el navegador mediante
`localStorage`, incluso después de cerrar la aplicación.

## Organización general del código

El proyecto separa sus responsabilidades en diferentes carpetas para
facilitar el mantenimiento y la reutilización del código:

  -----------------------------------------------------------------------
  Carpeta                             Función principal
  ----------------------------------- -----------------------------------
  `core/`                             Lógica principal de las páginas:
                                      inicio, catálogo y favoritos.

  `model/`                            Modelo de datos y representación de
                                      los personajes mediante la clase
                                      `Character`.

  `ui/`                               Creación y renderizado de
                                      componentes HTML dinámicos en el
                                      DOM.

  `utils/`                            Funciones auxiliares para las
                                      peticiones a la API, gestión de
                                      errores y almacenamiento local.

  `html/`                             Páginas secundarias de la
                                      aplicación.

  `css/`                              Hojas de estilo y variables CSS
                                      para personalizar la interfaz.

  `img/`                              Imágenes y recursos gráficos.
  -----------------------------------------------------------------------

## Alcance y limitaciones

Esta versión permite consultar los personajes disponibles en la API,
filtrarlos y guardar favoritos en el navegador.

La aplicación no incluye cuentas de usuario, autenticación,
sincronización de favoritos entre dispositivos ni un backend propio. Los
favoritos se almacenan localmente mediante `localStorage`, por lo que
están asociados al navegador utilizado.

La disponibilidad y los datos del catálogo dependen del servicio externo
de la API.

## Documentación técnica

La **Memoria Técnica de Hogwarts** amplía la información sobre la
arquitectura de la aplicación, la organización de los módulos
JavaScript, el modelo de clases, el flujo de datos, las decisiones de
diseño UI/UX y los principales desafíos encontrados durante el
desarrollo.

## Posibles mejoras

-   Incorporar filtros adicionales por especie, género o condición del
    personaje.
-   Ampliar las fichas individuales con información más detallada.
-   Añadir nuevas funcionalidades de interacción con los personajes.
-   Incorporar un fichero de configuración en formato **JSON** que
    permita gestionar los textos de la aplicación en diferentes idiomas
    y facilitar así su adaptación a un entorno multilenguaje.

------------------------------------------------------------------------

*Proyecto individual desarrollado por Carmen Asensio.*
