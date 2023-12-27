import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Profile from "../Pages/Profile";
import NotFoundPage from "../Pages/NotFoundPage";


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
       < Route path="/profile/:Id" element={<Profile />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route >
    )
  );
  
  export default router