import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { SingleBlog } from "./pages/SingleBlog";

function App() {
  return (
    <div className="relative">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/blog/:id" element={<SingleBlog />}></Route>
          <Route path="/blogs" element={<Blog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
