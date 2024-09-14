import { useParams } from "react-router-dom";

export default function Gallery() {
  const { userId } = useParams;
  return <div>user Id = {userId}</div>;
}
