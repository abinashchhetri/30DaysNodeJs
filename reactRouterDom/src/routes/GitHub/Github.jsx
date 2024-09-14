import { useState } from "react";
import { useEffect } from "react";

export default function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/abinashchhetri")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4  text-white flex  items-center justify-evenly align-middle gap-7">
      <img className="rounded-full w-[20%] " src={data.avatar_url} alt="" />

      <div className="flex flex-col text-start gap-3 font-bold text-[2.5rem] text-gray-700">
        <span>Github Name: {data.login} </span>
        <span>Github Followers: {data.followers}</span>
      </div>
    </div>
  );
}
