const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const sslCertPath = path.join(__dirname, "..", "certs", "ca.pem");

const sslCert = fs.readFileSync(sslCertPath);

const sequelize = new Sequelize(
  process.env.database,
  process.env.user,
  process.env.password,
  {
    host: process.env.host,
    port: process.env.portdb,
    dialect: "mysql",
    logging: console.log,
    define: {
      timestamps: true,
      underscored: false,
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    dialectOptions: {
      ssl: {
        ca: sslCert,
        rejectUnauthorized: true,
      },
    },
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "✅ Conexão com MySQL estabelecida com sucesso (SSL habilitado)!"
    );
  } catch (error) {
    console.error("❌ Erro ao conectar com o banco de dados:", error.message);
  }
}

testConnection();

module.exports = sequelize;
