import { DataTypes, Op } from "sequelize";
import sequelize from "./";

const Post = sequelize.define("Post", {
  name: { type: DataTypes.STRING },
  image: { type: DataTypes.BLOB },
  reward: { type: DataTypes.DOUBLE },
  currency: { type: DataTypes.STRING },
  description: { type: DataTypes.TEXT, allowNull: false, defaultValue: "" },
  category: { type: DataTypes.STRING },
  location: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
});

export async function savePostToDb(data) {
  try {
    await Post.sync();

    const newPost = await Post.create(data);
    return newPost;
  } catch (error) {
    throw error;
  }
}

export async function getPostFromDb(id) {
  let pk = id;
  if (typeof id === "string") {
    pk = parseInt(id);
  }
  try {
    const newPost = await Post.findByPk(pk, { raw: true });
    return newPost;
  } catch (error) {
    throw error;
  }
}

export async function searchPostsInDb(text, limit = 10, offset = 0) {
  const splited = text.split(" ");

  const clauses = {};
  splited.forEach((word) => {
    clauses[Op.iLike] = `%${word}%`;
  });

  try {
    const posts = Post.findAll({
      where: {
        name: {
          [Op.and]: clauses,
        },
      },
      offset,
      limit,
      raw: true,
    });

    return posts;
  } catch (error) {
    throw error;
  }
}
