# Usar una imagen base oficial de Node.js en la versión 20.8.1
FROM node:20.8.1

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación al directorio de trabajo
COPY . .

# Exponer el puerto en el que tu aplicación escucha
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

