import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export function Signin() {
  return (
    <div className="pageContainer flex w-full h-screen">
      <Auth type="signin" />
      <Quote />
    </div>
  );
}
