import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

import { useAtom } from "jotai";
import { userAtom } from "../atom";

export function Appbar() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  const getStarted = () => {
    navigate("/signup");
  };
  function logoutHandler(){
    localStorage.removeItem("Authorization");
    navigate("/signup");
    setUser(undefined);
  }
  return (
    <div className="w-full">
      <div className="bg-slate-600 py-4 px-5 flex items-center justify-between">
        <Link to="/">
          <div className="flex gap-2">
            <div className="text-white font-extrabold text-xl">TB</div>
            {/* <Avatar name="TechBlogs.com" short="TB" /> */}
            <div className="text-white font-extralight text-xl">
              TechBlogs.com
            </div>
          </div>
        </Link>
        <div className="flex gap-4 justify-center items-center">
          <Link to="/blogs">
            <div className="text-white text-lg">Blogs</div>
          </Link>
          <Link to="/publish">
            <div className="text-white text-lg">Write</div>
          </Link>
          {!user ? (
            <div className="w-full flex items-center gap-4">
              <Link to="/signin">
                <div className="text-white text-lg">Signin</div>
              </Link>
              <div className="max-w-32">
                <Button text="Get Strated" clickHandler={getStarted} />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <div className="text-white text-lg">{user.name}</div>
              <Avatar name={user.name} />
              <div className="max-w-32 border-l-2  border-gray-700 pl-2">
                <Button text="Logout" clickHandler={logoutHandler} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
