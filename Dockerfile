# Usa una imagen base de Nginx
FROM nginx:alpine

# Copia los archivos de construcción a la carpeta de Nginx
COPY dist /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
