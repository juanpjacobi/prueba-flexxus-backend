# Prueba Flexxus – Backend

**Descripción**  
Proyecto de servicio REST/GraphQL con Node.js, TypeScript, Express y Sequelize sobre MySQL.

**Arquitectura**  
- Node.js + Express  
- TypeScript  
- Sequelize ORM + MySQL (docker-compose)  
- Estructura de carpetas en `/src`

---

## Cómo arrancar en modo desarrollo

1. **Copiar `.env.example`** a `.env` y ajustar credenciales (usuario, contraseña, puerto, etc.).  
2. **Levantar la base de datos** con Docker:  
   ```bash
   docker-compose up -d
   ```  
   Esto crea los contenedores de MySQL y Adminer.  
3. **Instalar dependencias**:  
   ```bash
   npm install
   ```  
4. **Iniciar servidor en modo watch**:  
   ```bash
   npm run dev
   ```  
5. **Ejecutar migraciones** para crear las tablas:  
   ```bash
   npx sequelize-cli db:migrate
   ```  
6. **(Opcional) Poblar datos de prueba** usando los seeders:  
   ```bash
   npx sequelize-cli db:seed:all
   ```  
7. El API quedará disponible en `http://localhost:<PUERTO>/api`.

---

## Ramas Git  
- `main`: código listo para producción  
- `develop`: base de desarrollo  
- `feature/<tarea>`: cada historia/tarea en su propia rama

---

## Comandos útiles

- **Rollback de última migración**:  
  ```bash
  npx sequelize-cli db:migrate:undo
  ```  
- **Rollback de todas las migraciones** (wipe):  
  ```bash
  npx sequelize-cli db:migrate:undo:all
  ```  
- **Borrar contenedores y volúmenes Docker** (para base limpia):  
  ```bash
  docker-compose down -v
  ```

---

_Actualizado: abril 2025_

