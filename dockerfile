# Use a imagem oficial do Node.js como imagem base
FROM node:16

# Cria o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia os arquivos de configuração do projeto para o contêiner
COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/
COPY .env ./

# Instala as dependências do projeto
RUN npm install
RUN npx prisma generate
RUN npm run build

# Copia o restante do código da aplicação para o contêiner
COPY . .

# Compila o TypeScript para JavaScript

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["sh", "-c", "npx prisma migrate deploy && npm start" ]
