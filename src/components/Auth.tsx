import { LabeledInput } from "./LabeledInput";
import { data, Link, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import { SignupType, SigninType } from "@arjit31/medium-common-module";
import axios from "axios";
import { useAtom } from "jotai";
import { userAtom } from "../atom";

export function Auth({ type }: { type: "signin" | "signup" }) {
  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    if (user) {
      navigate("/blogs");
    }
  }, [user]);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupType>({
    name: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState<string>("");

  async function sendRequest() {
    try {
      let res;
      if (type === "signup") {
        res = await axios.post(
          "https://my-app.apk20023110.workers.dev/api/v1/user/signup",
          formData
        );
      } else {
        res = await axios.post(
          "https://my-app.apk20023110.workers.dev/api/v1/user/signin",
          formData
        );
      }
      const token = "Bearer " + res.data.token;
      localStorage.setItem("Authorization", token);
      setUser(res.data.user);
      navigate("/blogs");
    } catch (error) {
      console.log(error);
      setError("Wrong credentials!");
    }
  }

  return (
    <div className="signupContainer flex-1/2 flex flex-col justify-center items-center">
      <div className="font-bold text-3xl">
        {type === "signup" ? "Create an account" : "Get into account"}
      </div>
      <div className="text-slate-500 mb-3">
        {type === "signup"
          ? "All ready have an account"
          : "Dont have an account"}
        ?{" "}
        <Link
          to={type === "signup" ? "/signin" : "/signup"}
          className="underline underline-offset-2"
        >
          {type === "signup" ? "Login" : "Register"}
        </Link>
      </div>
      <div className="flex flex-col justify-center gap-1.5 mt-4 w-80">
        {type === "signup" ? (
          <LabeledInput
            label="Name"
            placeholder="Enter your name ..."
            type="text"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        ) : null}
        <LabeledInput
          label="Username"
          placeholder="Enter your username ..."
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />
        <LabeledInput
          label="Password"
          placeholder="Enter your pasword ..."
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button
          text={type === "signup" ? "Sign up" : "Sign in"}
          clickHandler={sendRequest}
        />
        <div className="text-red-400">{error}</div>
      </div>
    </div>
  );
}
