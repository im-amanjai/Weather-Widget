FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Use Nginx as a lightweight web server.
FROM nginx:alpine 

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# -g "daemon off;" means:
# → Run Nginx without going into background/daemon mode.
# → Docker containers must keep one process running in the foreground.
# → If Nginx daemonized itself, the container would exit immediately.
