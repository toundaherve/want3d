import { DataTypes, Op } from "sequelize";
import sequelize from ".";

const Need = sequelize.define("Need", {
  name: { type: DataTypes.STRING },
  budget: { type: DataTypes.DOUBLE },
  currency: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT, allowNull: false, defaultValue: "" },
  category: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
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
    const needs = Need.findAll({
      where: {
        name: {
          [Op.and]: clauses,
        },
      },
      offset,
      limit,
      raw: true,
    });

    return needs;
  } catch (error) {
    throw error;
  }
}

export default {
  findAll,
  findOne,
  create,
};
