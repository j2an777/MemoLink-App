import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Script from "../pages/Script/Script";
import MyPage from "../pages/MyPage/MyPage";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Review from "../pages/Review/Review";

export const routers = [
    {
        path:"/",
        Element: <Home />,
        isProtected: false,
    },
    {
        path:"/script",
        Element: <Script />,
        isProtected: true,
    },
    {
        path:"/login",
        Element: <Login />,
        isProtected: false,
    },
    {
        path:"/signup",
        Element: <Signup />,
        isProtected: false,
    },
    {
        path:"/mypage",
        Element: <MyPage />,
        isProtected: true,
    },
    {
        path:"/about",
        Element: <About />,
        isProtected: false,
    },
    {
        path:"/review",
        Element: <Review />,
        isProtected: false,
    }
];