# TP2-Evaluación

  

Este proyecto resuelve el siguiente enunciado:
*"Desarrollar un servidor en Node.js con Express.js, siguiendo el modelo MVC visto en clase con su respectiva estructuración en capas y patrones de diseño. Puede estar constituido con clases o funciones, el manejo de funcionalidades asíncronas tanto con promesas o async/await y con persistencia en la memoria del servidor. Persistencia opcional: File System. Debe contemplar también, las siguientes características: 
1. Definir una ruta que inserte un registro de facturas en el servidor. El formato deberá contener: “id”, “número”, “tipo”, “monto” y “estado”. El ingreso de los datos será JSON. Ej: {“id”: 1, “número”: 00010, “tipo”: “A”, “monto”: 1405200, “estado”: “pendiente de pago”} 
2. Cada inserción debe tener un identificador único autogenerado por el propio servidor (id). El número de factura no cuenta como id. 
3. Definir una ruta que obtenga el total de la información añadida al servidor, es decir, todos los registros con número, tipo y monto. 
4. Definir una ruta que obtenga facturas por tipo. Ej: A, B, etc. 
5. Definir una ruta que obtenga facturas según su estado. Ej: “pendiente de pago”, “pagado”, “próximo a vencer”, etc. 
5. Definir validaciones de datos en cada solicitud de manera manual o con Joi. También configurar las respuestas del servidor de forma legible y codificada (status codes)."*
  

---

  
## Tecnologías Utilizadas
- Node.js
- Express.js
- Arquitectura en capas (DAO, Service, Controller, Routes)
- Persistencia en memoria y opcional con File System (facturas.json)
- Dotenv para variables de entorno


## Cómo levantar el servidor

  

### 1. Requisitos

  

- Node.js (versión 18 o superior)

- Postman (opcional para probar)

  

### 2. Pasos para iniciar el proyecto

  

```bash

npm install  # Instala las dependencias

npm start  # Levanta el servidor

npm run  watch  # También inicia el servidor pero con recarga automática
