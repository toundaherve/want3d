import { useForm } from "react-hook-form";
import PostPage from "../components/PostPage";

export default function Post() {
  const onSubmit = (data) => {
    console.log(data);
  };

  return <PostPage onSubmit={onSubmit} />;
}
