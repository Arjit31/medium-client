import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Button } from "./Button";


export function Appbar() {
    const navigate = useNavigate();
    const getStarted = () => {
        navigate("/signup")
    } 
  return (
    <div className="w-full">
      <div className="bg-slate-600 py-4 px-5 flex items-center justify-between">
        <div className="flex gap-2">
          <div className="text-white font-extrabold text-xl">TB</div>
          {/* <Avatar name="TechBlogs.com" short="TB" /> */}
          <div className="text-white font-extralight text-xl">
            TechBlogs.com
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <Link to="/blogs">
            <div className="text-white text-lg">Blogs</div>
          </Link>
          <div className="text-white text-lg">Write</div>
          <Link to="/signin">
          <div className="text-white text-lg">Signin</div>
          </Link>
          <div className="max-w-32">
            <Button text="Get Strated" clickHandler={getStarted} />
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="text-white text-lg">Arjit</div>
            <Avatar name="Arjit" />
          </div>
        </div>
      </div>
    </div>
  );
}
