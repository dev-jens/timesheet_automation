FROM node:20.9.0-alpine as development

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .




# FROM node:16.18.0-alpine as production

# ARG NODE_ENV=production

# ENV NODE_ENV=$(NODE_ENV)

# WORKDIR /app

# COPY package*.json .

# RUN npm install --only=production

# COPY --from=development /app/dist ./dist

# CMD [ "node", "dist/main.js" ]





