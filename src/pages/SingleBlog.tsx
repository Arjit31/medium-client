import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { blogType } from "../types/blogType";
import { Appbar } from "../components/Appbar";
import { Avatar } from "../components/Avatar";
import { useAtom } from "jotai";
import { userAtom } from "../atom";
import { Button } from "../components/Button";
import { Spinner } from "../components/Spinner";

export function SingleBlog() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const { id } = useParams();
  const [blogData, setBlogData] = useState<blogType>();
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
        setBlogData(res.data);
      } catch (error) {
        console.log(error);
        navigate("/signup");
      }
    }
    fetchBlog();
  }, []);

  async function deleteHandler() {
    const token: string = localStorage.getItem("Authorization") || "";
    const headers = {
      Authorization: token,
    };
    try {
      const res = await axios.delete("https://my-app.apk20023110.workers.dev/api/v1/blog/" + id, {
        headers: headers,
      });
      console.log(res);
      navigate("/blogs")
    } catch (error) {
      console.log(error);
    }

  }
  function editHandler(){
    navigate("/update/"+id)
  }
  return (
    <div className="w-full h-screen flex flex-col items-center scroll-smooth ">
      <Appbar />
      {!blogData ? (
        <div className="h-full flex items-center justify-center">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="w-full h-full scrollbar overflow-y-auto flex justify-center">
          <div className="w-5/6 h-full flex flex-col p-10 gap-5">
            <div className="text-4xl font-extrabold">{blogData?.title}</div>
            <div>{blogData?.content}</div>
            <div className="flex items-center gap-2 pb-10">
              <Avatar name={blogData?.author.name || "X"} />
              <div className="font-extralight ml-1">
                {blogData?.author.name}
              </div>
              <span className="flex w-1 h-1 bg-gray-500 rounded-full"></span>
              <span className="text-slate-500">
                {blogData?.updatedAt.substring(0, 10)}
              </span>
            </div>
            {user && blogData.authorId === user.id ? (
              <div className="flex gap-5 pb-10">
                <div>
                  <Button text="Edit" clickHandler={editHandler} />
                </div>
                <div>
                  <Button text="Delete" clickHandler={deleteHandler} />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
