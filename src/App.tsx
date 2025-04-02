import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { SingleBlog } from "./pages/SingleBlog";
import { Publish } from "./pages/Publish";
import { useEffect } from "react";
import axios from "axios";
import { useAtom } from "jotai";
import { userAtom } from "./atom";
import { Home } from "./pages/Home";
import { Update } from "./pages/Update";

function App() {
  const [user, setUser] = useAtom(userAtom);
  useEffect(() => {
    const token: string = localStorage.getItem("Authorization") || "";
    const headers = {
      Authorization: token,
    };
    async function fetchUser() {
      const res = await axios.get(
        "https://my-app.apk20023110.workers.dev/api/v1/user/user",
        { headers: headers }
      );
      setUser(res.data.user);
    }

    fetchUser();
  }, []);
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/update/:id" element={<Update />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
          <Route path="/publish" element={<Publish />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
