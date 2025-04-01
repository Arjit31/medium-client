import { BlogCard } from "../components/BlogCard";
import { Appbar } from "../components/Appbar";
import { useState, useEffect } from "react";
import axios from "axios";
type blogType = {
  id: string;
  authorId: string;
  content: string;
  published: boolean;
  title: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
  };
};

export function Blog() {
  const [blogData, setBlogData] = useState<Array<blogType>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const token: string = localStorage.getItem("Authorization") || "";
    const headers = {
      Authorization: token,
    };
    async function fetchBlocks() {
      const res = await axios.get(
        "https://my-app.apk20023110.workers.dev/api/v1/blog/bulk",
        {
          headers: headers,
        }
      );
      const arr = res.data;
      console.log(arr);
      setBlogData(arr);
      setLoading(false);
      return res;
    }
    fetchBlocks();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center scroll-smooth ">
      <Appbar />
      {loading ? (
        <div className="h-full flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <div className="w-full h-full scrollbar overflow-y-auto flex justify-center">
          <div className="w-5/6 h-full flex flex-col items-center p-10">
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
      )}
    </div>
  );
}
