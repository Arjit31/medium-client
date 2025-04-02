import { Appbar } from "../components/Appbar";
import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export function Signin() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Appbar></Appbar>
      <div className="pageContainer flex w-full h-screen">
        <Auth type="signin" />
        <Quote />
      </div>
    </div>
  );
}
