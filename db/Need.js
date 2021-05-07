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

async function findAndCountAll(search, limit = 10, offset = 0, sortBy = "createdAt", sortOrder = "DESC", category = "") {
  const whereClause = buildWhereClause(search, category)

  try {
    const needs = await Need.findAndCountAll({
      where: whereClause,
      order: [
        [sortBy, sortOrder]
      ],
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

async function getCategoriesForItem(itemName) {
  const whereClause = buildWhereClause(itemName)

  try {
    const data = await Need.aggregate('itemCategory', 'DISTINCT', { plain: false, where: whereClause })
    return data.map(row => row["DISTINCT"])
  } catch (error) {
    consol.log(error)
    throw error
  }
}

function buildWhereClause(search = "", category = "") {
  const splited = search.split(" ");

  const itemNameChecks = {};
  splited.forEach((word) => {
    itemNameChecks[Op.iLike] = `%${word}%`;
  });

  const where = {
    itemName: {
      [Op.and]: itemNameChecks,
    },
  }

  if(category) where.itemCategory = category;

  return where
}

export default {
  findAll,
  findAndCountAll,
  findOne,
  create,
  getCategoriesForItem,
};
