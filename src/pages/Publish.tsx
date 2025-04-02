import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../atom";

type postType = {
  title: string;
  content: string;
};

export function Publish() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const [data, setData] = useState<postType>({ title: "", content: "" });
  useEffect(() => {
    if (!user) {
      navigate("/blogs");
    }
  }, []);
  async function postBlog() {
    const token: string = localStorage.getItem("Authorization") || "";
    const headers = {
      Authorization: token,
    };
    await axios.post(
      "https://my-app.apk20023110.workers.dev/api/v1/blog",
      data,
      { headers: headers }
    );
    navigate("/blogs");
  }
  return (
    <div className="w-full h-screen flex flex-col items-center scroll-smooth ">
      <Appbar />
      <div className="w-3/4 mt-10 h-full p-2">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border-none border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none text-4xl font-extralight"
          placeholder="Title..."
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <textarea
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border-none border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none text-xl h-5/7 resize-none scrollbar"
          placeholder="Content..."
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        />
        <div className="w-1/2 float-right mt-2 flex items-center justify-around">
          <div className="text-slate-500">
            {Math.ceil(data.content.length / 100)} minute read
          </div>
          <div className="w-1/2">
            <Button text="Publish" clickHandler={postBlog} />
          </div>
        </div>
      </div>
    </div>
  );
}
