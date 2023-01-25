require("dotenv/config");

module.exports = {
  dialect: "postgres",
  url: process.env.DATABASE_URL,
  ssl: process.env.SSL,
  // host: process.env.DB_HOST,
  // username: process.env.DB_USER,
  // password: process.env.DB_PASS,
  // database: process.env.DB_NAME,
  define: {
    ssl: {
      require: process.env.SSL,
      rejectUnauthorized: false,
    },
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
