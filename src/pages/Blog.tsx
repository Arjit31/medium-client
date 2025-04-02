import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { blogType } from "../types/blogType";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export function Blog() {
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState<Array<blogType>>();
  useEffect(() => {
    const token: string = localStorage.getItem("Authorization") || "";
    const headers = {
      Authorization: token,
    };
    async function fetchBlocks() {
      try {
        const res = await axios.get(
          "https://my-app.apk20023110.workers.dev/api/v1/blog/bulk",
          {
            headers: headers,
          }
        );
        const arr = res.data;
        console.log(arr);
        setBlogData(arr);
        return res;
      } catch (error) {
        navigate("/signup");
      }
    }
    fetchBlocks();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center scroll-smooth ">
      <Appbar />
      {!blogData ? (
        <div className="h-full flex items-center justify-center">
          <Spinner></Spinner>
        </div>
      ) : (
        <div className="w-full h-full scrollbar overflow-y-auto flex justify-center">
          <div className="w-5/6 h-full flex flex-col items-center p-10">
            <div className="w-full">
              {blogData.map((value) => (
                <BlogCard
                  key={value.id}
                  id={value.id}
                  name={value.author.name}
                  title={value.title}
                  content={value.content}
                  createdAt={value.updatedAt.substring(0, 10)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
