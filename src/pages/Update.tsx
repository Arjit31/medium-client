import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import axios from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "../atom";
import { Spinner } from "../components/Spinner";

type postType = {
  title: string;
  content: string;
};

export function Update() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useAtom(userAtom);
  const [data, setData] = useState<postType>({ title: "", content: "" });
  const { id } = useParams();
  useEffect(() => {
    const token: string = localStorage.getItem("Authorization") || "";
    const headers = {
      Authorization: token,
    };
    async function fetchBlog() {
      try {
        const res = await axios.get(
          "https://my-app.apk20023110.workers.dev/api/v1/blog/" + id,
          { headers: headers }
        );
        console.log(res.data);
        if(!user || res.data.authorId != user.id){
            navigate("/blogs");
        }
        setData({ title: res.data.title, content: res.data.content });
        console.log({ title: res.data.title, content: res.data.content })
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/signup");
      }
    }
    fetchBlog();
  }, []);
  async function updateBlog() {
    const token: string = localStorage.getItem("Authorization") || "";
    const headers = {
      Authorization: token,
    };
    const res = await axios.put(
      "https://my-app.apk20023110.workers.dev/api/v1/blog/" + id,
      data,
      { headers: headers }
    );
    console.log(res);
    navigate("/blogs");
  }
  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center">
        <Appbar />
        <div className="w-full h-full flex items-center justify-center">
        <Spinner></Spinner>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full h-screen flex flex-col items-center scroll-smooth ">
      <Appbar />
      <div className="w-3/4 mt-10 h-full p-2">
        <input
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border-none border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none text-4xl font-extralight"
          placeholder="Title..."
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
          }}
        />
        <textarea
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 border-none border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none text-xl h-5/7 resize-none scrollbar"
          placeholder="Content..."
          value={data.content}
          onChange={(e) => {
            setData({ ...data, content: e.target.value });
          }}
        />
        <div className="w-1/2 float-right mt-2 flex items-center justify-around">
          <div className="text-slate-500">
            {Math.ceil(data.content.length / 100)} minute read
          </div>
          <div className="w-1/2">
            <Button text="Update" clickHandler={updateBlog} />
          </div>
        </div>
      </div>
    </div>
  );
}
