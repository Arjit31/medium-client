import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";

export function BlogCard({
  id,
  name,
  title,
  content,
  createdAt,
}: {
  id: string;
  name: string;
  title: string;
  content: string;
  createdAt: string;
}) {
  return (
    <Link to={"/blog/" + id}>
      <div className="w-full flex flex-col gap-1">
        <div className="flex items-center gap-1.5">
          <Avatar name={name} />
          <div className="font-extralight ml-1">{name}</div>
          <span className="flex w-1 h-1 bg-gray-500 rounded-full"></span>
          <span className="text-slate-500">{createdAt}</span>
        </div>
        <div className="font-bold text-2xl">{title}</div>
        <div className="line-clamp-3">{content}</div>
        <div className="text-slate-500">
          {Math.ceil(content.length / 100)} minute read
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </Link>
  );
}
