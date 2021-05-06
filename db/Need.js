import { DataTypes, Op } from "sequelize";
import sequelize from ".";

export const Need = sequelize.define("Need", {
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

async function create(data) {
  try {
    await Need.sync();

    const created = await Need.create(data);
    return created;
  } catch (error) {
    throw error;
  }
}

async function findOne(id) {
  let pk = id;
  if (typeof id === "string") {
    pk = parseInt(id);
  }
  try {
    const found = await Need.findByPk(pk, { raw: true });
    return found;
  } catch (error) {
    throw error;
  }
}

async function findAll(search, limit = 10, offset = 0) {
  console.log(search)
  const splited = search.split(" ");

  const clauses = {};
  splited.forEach((word) => {
    clauses[Op.iLike] = `%${word}%`;
  });

  try {
    const needs = await Need.findAll({
      where: {
        itemName: {
          [Op.and]: clauses,
        },
      },
      offset,
      limit,
      raw: true,
    });

    return needs;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

async function findAndCountAll(search, limit = 10, offset = 0) {
  console.log(search)
  const splited = search.split(" ");

  const clauses = {};
  splited.forEach((word) => {
    clauses[Op.iLike] = `%${word}%`;
  });

  try {
    const needs = await Need.findAndCountAll({
      where: {
        itemName: {
          [Op.and]: clauses,
        },
      },
      offset,
      limit,
      raw: true,
    });

    return needs;
  } catch (error) {
    console.log(error)
    throw error;
  }
}


export default {
  findAll,
  findAndCountAll,
  findOne,
  create,
};
