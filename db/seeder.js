require("dotenv").config();
const {Sequelize, DataTypes, Op }  = require("sequelize")
const Promise = require("bluebird")

const { DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:5432/bonvih`
);

const Need = sequelize.define("Need", {
    itemName: { type: DataTypes.STRING },
    itemCategory: { type: DataTypes.STRING },
    itemDescription: { type: DataTypes.TEXT, allowNull: false, defaultValue: "" },
    buyerBudget: { type: DataTypes.DOUBLE },
    buyerCurrency: { type: DataTypes.STRING },
    buyerName: { type: DataTypes.STRING },
    buyerCountry: { type: DataTypes.STRING },
    buyerCity: { type: DataTypes.STRING },
    buyerEmail: { type: DataTypes.STRING },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("Database connection has been established successfully.")

        const needs = createNeeds(99)

        Promise.mapSeries(needs, function(need) {
            return Need.create(need).then(() => console.log(need.itemName))
        }).then(() => {
            closeDB()
        }).catch(error => {
            console.log(error)
            closeDB()
        })
        
      }
    )
    .catch((error) => {
      console.error("Unable to connect to database:", error);
      process.exit(1);
    });


function createNeeds(quantity) {
    const needs = []

    for(let i = 0; i < quantity; i++) {
        needs.push({
            itemName: `item99`,
            itemCategory: `category${Math.floor(Math.random() * 10)}`,
            itemDescription: `item${i}-description`,
            buyerBudget: `${Math.floor(Math.random() * 1000)}`,
            buyerCurrency: `GBP`,
            buyerName: `buyer${i}`,
            buyerCountry: `country${Math.floor(Math.random() * 5)}`,
            buyerCity: `city${Math.floor(Math.random() * 5)}`,
            buyerEmail: `email@example.org`,
        })
    }

    return needs
}

function closeDB() {
    sequelize.close().then(() => { console.log("Connexion closed")}).catch(error => { console.log("Failed to close Db connexiox: ", error) })
}

