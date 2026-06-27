# Post It Simulator

Este es el proyecto para la Evaluación 3 de Programación Front End. Consiste en un pequeño tablero virtual donde se pueden agregar notas autoadhesivas (Post-its).

## 1. Instalación
Para hacer funcionar el proyecto en tu computador local, necesitas tener instalado Node.js.
Sigue estos pasos:

1. Extrae esta carpeta en tu computador.
2. Abre la terminal o consola de comandos en esta misma carpeta (`EVA 3 FRONT END FINAL`).
3. Instala las dependencias ejecutando:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo escribiendo:
   ```bash
   npm run dev
   ```
5. Te aparecerá un enlace (generalmente `http://localhost:5173/`), ábrelo en tu navegador y verás la página funcionando.

---

## 2. Cumplimiento de Requerimientos (Justificación)
A continuación se detalla cómo se cumplió cada punto de la rúbrica de evaluación, apoyado en documentación oficial:

* **Agregar notas (título, descripción, importancia):** Se logró usando el hook de estado `useState` para almacenar un arreglo de objetos en la memoria. ([Documentación React: useState](https://es.react.dev/reference/react/useState))
* **Destacar notas importantes en rojo:** Se utilizó un renderizado condicional de clases CSS. Si la nota es importante, se le añade la clase `.important`. ([Documentación React: Renderizado condicional](https://es.react.dev/learn/conditional-rendering))
* **Eliminar notas con la X:** Se implementó usando el método nativo de JavaScript `.filter()` para quitar del arreglo el ID seleccionado y actualizar la vista. ([MDN Web Docs: Array filter](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter))
* **Responsividad (4 por fila en PC, 1 en móvil):** Se solucionó incorporando el framework CSS Bootstrap. Específicamente el uso de sus clases de grilla (`col-12` para teléfonos y `col-lg-3` para pantallas grandes). ([Documentación Bootstrap: Grid System](https://getbootstrap.com/docs/5.3/layout/grid/))
* **Validación de descripción obligatoria:** Al intentar enviar el formulario (`onSubmit`), se agregó una pequeña lógica que verifica si la descripción está vacía, bloqueando el envío si es así. ([Documentación React: Respondiendo a eventos](https://es.react.dev/learn/responding-to-events))
* **Desarrollo en React JS:** Proyecto inicializado con la arquitectura moderna de Vite + React (JSX). ([Documentación Vite](https://vitejs.dev/guide/))
* **Uso de Framework CSS:** Se agregó Bootstrap 5 vía CDN en el archivo principal `index.html`. ([Documentación Bootstrap: Introducción](https://getbootstrap.com/docs/5.3/getting-started/introduction/))
* **Separación en Componentes:** El sistema modular se dividió correctamente en `PostItApp.jsx` (Manejador principal), `PostItForm.jsx` (El formulario superior) y `PostIt.jsx` (La tarjeta visual de cada nota). ([Documentación React: Tu primer componente](https://es.react.dev/learn/your-first-component))

---

## 3. Repositorios y Fuentes Adicionales
Como apoyo general extra para afinar este proyecto, la fuente principal de buenas prácticas fue el material de clases de Inacap, complementado con documentación oficial:

- **Material de Clase (PDF Inacap): "Cápsula interactiva - IA en React – Buenas Prácticas y Seguridad en SPA"**: 
  De este documento oficial de la asignatura se extrajeron e implementaron los siguientes conceptos y fragmentos de código textuales:
  - **Sanitización contra vulnerabilidades XSS:** Para evitar ataques de inyección de código, se aplicó la recomendación de validar datos antes de renderizarlos en lugar de usar `dangerouslySetInnerHTML`, implementando el reemplazo sugerido en el apunte: `String(valor).replace(/</g, "&lt;").replace(/>/g, "&gt;")` (Sección 1 del PDF).
  - **Validación de Propiedades (Prop-Types):** Se añadió el paquete `prop-types` para asegurar que las variables pasadas a los componentes sean del tipo correcto (ej. `PostItForm.propTypes = { agregarNota: PropTypes.func.isRequired }`), siguiendo el prompt sugerido (Página 4).
  - **Manejo de Errores (Error Boundaries):** Se extrajo la estructura del componente `ErrorBoundary` (`static getDerivedStateFromError(error)` y `componentDidCatch`) para envolver la aplicación y evitar caídas críticas de React (Página 4).
  - **Accesibilidad (A11y):** Se incorporaron roles ARIA sugeridos en la guía para los mensajes de error del formulario (`role="alert"`, `aria-live="assertive"`, `aria-atomic="true"`), para mejorar la retroalimentación a usuarios con discapacidad (Páginas 6 y 8).

- **Documentación oficial de React:** Para entender cómo manejar el estado global de los Post-its con `useState`.
- **Google Fonts (Reenie Beanie):** Tipografía cursiva manuscrita oficial gratuita importada para simular el texto de los post-its de manera idéntica al mock-up. (https://fonts.google.com/specimen/Reenie+Beanie)
- **Bootstrap 5:** Sistema de grillas usado para cumplir con la responsividad (`col-12` para móviles, `col-lg-3` para escritorio).
- **StackOverflow y CSS Tricks:** Tips de persistencia de datos con `localStorage` y la rotación sutil de los Post-its con CSS (`:nth-child`).

---

## 4. Manual de Uso Rápido
1. **Ingresar un Post-it**: Ve a la barra superior oscura, llena el campo `Titulo` y el campo `Descripcion`.
2. **Validación Accesible**: Si intentas darle al botón "AGREGAR" sin escribir nada en la descripción, te saldrá un aviso rojo obligando a completarlo. 
3. **Importancia**: Si marcas la casilla blanca que dice `Importante!`, la nota aparecerá de color rojo oscuro. Si no la marcas, saldrá en color amarillo tradicional.
4. **Eliminar**: Para borrar cualquier nota, solo haz clic en la "x" que está en la esquina superior derecha del cuadrito de cada Post-it.
5. ¡Tus notas no se pierden! Todo se guarda automáticamente en la memoria caché de tu navegador.
