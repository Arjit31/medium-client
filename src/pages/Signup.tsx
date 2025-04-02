import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";
import { Appbar } from "../components/Appbar";

export function Signup() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Appbar></Appbar>
      <div className="pageContainer flex w-full h-full">
        <Auth type="signup" />
        <Quote />
      </div>
    </div>
  );
}
