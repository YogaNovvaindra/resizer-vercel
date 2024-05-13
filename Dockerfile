FROM node:18 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

FROM node:18 as runner

WORKDIR /app

RUN apt update && apt install ffmpeg -y

COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src ./src
COPY --from=builder /app/public ./public
COPY --from=builder /app/views ./views

EXPOSE 5000

CMD "npm" "start"