import { Quote } from "../components/Quote";
import { Auth } from "../components/Auth";

export function Signup() {
  return (
    <div className="pageContainer flex w-full h-screen">
      <Auth type="signup" />
      <Quote />
    </div>
  );
}
