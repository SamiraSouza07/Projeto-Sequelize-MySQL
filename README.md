# 🚀 Node.js + MySQL + Sequelize CRUD

Este repositório contém uma aplicação web desenvolvida em **Node.js** com **Express**, **MySQL** e **Sequelize**, que implementa um sistema completo de gerenciamento de **Usuários** e seus **Endereços**. O projeto traz operações **CRUD** (criar, listar, editar e remover), interface dinâmica com **Handlebars** e persistência de dados em banco relacional.

## ✨ Funcionalidades

- 👤 **Gerenciamento de Usuários**
  - Criar, listar, editar e excluir usuários.
  - Campos: nome, profissão e inscrição em newsletter.
- 🏠 **Gerenciamento de Endereços**
  - Adicionar múltiplos endereços para um usuário.
  - Remover endereços vinculados.
- 🗂️ **Relacionamentos**
  - Relacionamento **1:N** entre usuários e endereços no Sequelize.
- 🎨 **Interface visual**
  - Páginas dinâmicas com **Express-Handlebars**.
  - Layout responsivo com **CSS**.

## 📸 Demonstração

> Sugestão: incluir prints de tela aqui.

- Página inicial: listagem de usuários em cards.  
- Formulário para criar novo usuário.  
- Página de detalhes com lista de endereços.  
- Tela de edição de usuário.

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [Sequelize](https://sequelize.org/)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
- [Nodemon](https://nodemon.io/)

## 📂 Estrutura do Projeto

```
meu-projeto-sequelize/
├── index.js              # Arquivo principal do servidor
├── package.json
├── public/               # Arquivos estáticos (CSS, imagens)
│   └── css/styles.css
├── views/                # Templates Handlebars
│   ├── layouts/main.handlebars
│   ├── home.handlebars
│   ├── adduser.handlebars
│   ├── userview.handlebars
│   └── useredit.handlebars
├── db/                   # Conexão com o banco
│   └── conn.js
└── models/               # Modelos Sequelize
    ├── User.js
    └── Address.js
```

## ⚙️ Como Executar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/meu-projeto-sequelize.git
   cd meu-projeto-sequelize
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados MySQL**
   ```sql
   CREATE DATABASE nodesequelize CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

   Ajuste as credenciais no arquivo `db/conn.js`:
   ```js
   const sequelize = new Sequelize('nodesequelize', 'root', 'SUA_SENHA', {
     host: 'localhost',
     dialect: 'mysql',
   });
   ```

4. **Inicie a aplicação**
   ```bash
   npm run dev
   ```

5. Acesse no navegador:  
   👉 [http://localhost:3000](http://localhost:3000)

## 📌 Próximos Passos (Ideias de Evolução)

- Autenticação de usuários (login e registro).  
- Paginação e filtros de busca.  
- Criação de API REST para consumo externo.  
- Testes automatizados.  

## 👩‍💻 Autor

Projeto desenvolvido para fins de aprendizado em **Node.js, Sequelize e MySQL**.  
📌 Código aberto para estudos e melhorias.
