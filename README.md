# Resumen del proyecto
El propósito de este proyecto es el de proporcionar una herramienta para los estudiantes de toda carrera relacionada con informática y afines. Este mismo fue creado sin fines de lucro y con el fin de proporcionar un apoyo para corroborar las operaciones y operaciones aritmetico/lógicas, desarrolladas a lo largo de la carrera. 

- Tecnologías utilizadas para el desarrollo del proyecto
. HTML 5
. CSS 3
. Javascript
. React JS
. Jest
. Docker

Pasos para la instalación y despliegue del proyecto en forma local:
1) git clone link-https-github
2) cd frontBinary
3) npm install
4) npm run dev
5) Ir al navegador y colocar http://localhost:5173

Explicación del armado del proyecto:

Durante la creación del mismo la idea central era crear una aplicación en la cual no haya navegación y que todos los componentes y funcionalidades esten desplegadas en una única vista.

Cada una de estas funcionalidades tiene su propio componente que las envuelve entre si para poder controlar renderizados y además poder realizar el respectivo test de cada uno de los componentes con su respectivo renderizado, control de escritura de inputs, esperando que los resultados en los mismos sean los esperados a la hora de la construcción del proyecto.

Cada componente esta encargado de resolver una única operación. Estos mismos tienen sus propios componentes que lo resolveran y ejecutaran su lógica de manera independiente mediante los diferentes custom hooks que se han creado. Esto se decidió resolver de esta manera para poder generar un código mas limpio para su lectura y entendimiento, además de respetar los principios SOLID. 
