# Base Image
FROM node:10

# Download Dockerize
RUN apt-get update && apt-get install -y wget
ENV DOCKERIZE_VERSION v0.6.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Create App Directory
RUN mkdir /app
WORKDIR /app

# Install Dependencies
COPY package*.json /app/
RUN npm install

# Move Code
COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
