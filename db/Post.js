import { DataTypes } from "sequelize";
import sequelize from "./";

const Post = sequelize.define("Post", {
  name: { type: DataTypes.STRING },
  image: { type: DataTypes.STRING },
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
