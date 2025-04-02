import { useNavigate } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { Button } from "../components/Button";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { userAtom } from "../atom";


export function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    if(user){
      navigate("/blogs")
    }
  }, [user])
  const getStarted = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Appbar />
      <div className="w-full h-full scrollbar overflow-y-auto flex justify-center">
        <div className="w-5/6 h-full flex flex-col p-10 gap-10">
          <div className="text-9xl">Your Hub for Tech Discovery</div>
          <div className="font-bold text-2xl">
            Insights and Opinions from the Community
          </div>
          <div className="w-70">
            <Button text="Get Started" clickHandler={getStarted} />
          </div>
        </div>
      </div>
    </div>
  );
}
