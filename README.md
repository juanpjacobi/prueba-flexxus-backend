# Prueba Flexxus – Backend

**Descripción**  
Proyecto de servicio REST/GraphQL con Node.js, TypeScript, Express y Sequelize sobre MySQL.

**Arquitectura**  
- Node.js + Express  
- TypeScript  
- Sequelize ORM + MySQL (docker-compose)  
- Estructura de carpetas en `/src`

**Cómo arrancar en modo desarrollo**  
1. Copiar `.env.example` a `.env` y ajustar credenciales.  
2. Levantar base de datos: `docker-compose up -d`  
3. Instalar dependencias: `npm install`  
4. Iniciar servidor: `npm run dev`

**Ramas Git**  
- `main`: código listo para producción  
- `develop`: base de desarrollo  
- `feature/<tarea>`: cada historia/tarea en su propia rama

