import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Script from "../pages/Script/Script";
import MyPage from "../pages/MyPage/MyPage";
import Signup from "../pages/Signup/Signup";
import Linx from "../pages/Linx/Linx";
import About from "../pages/About/About";
import Review from "../pages/Review/Review";

export const routers = [
    {
        path:"/",
        Element: <Home />
    },
    {
        path:"/script",
        Element: <Script />
    },
    {
        path:"/login",
        Element: <Login />
    },
    {
        path:"/signup",
        Element: <Signup />
    },
    {
        path:"/mypage",
        Element: <MyPage />
    },
    {
        path:"/linx",
        Element: <Linx />    
    },
    {
        path:"/about",
        Element: <About />
    },
    {
        path:"/review",
        Element: <Review />
    }
];