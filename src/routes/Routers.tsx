import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Script from "../pages/Script/Script";
import MyPage from "../pages/MyPage/MyPage";
import Signup from "../pages/Signup/Signup";
import About from "../pages/About/About";
import Review from "../pages/Review/Review";
import ListNotePopup from "../components/Modal/ListNotePopup/ListNotePopup";

export const routers = [
    {
        path:"/",
        Element: <Home />,
        isProtected: false,
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
        path:"/script",
        Element: <Script />,
        isProtected: true,
    },
    {
        path:"/script/:fileId",
        Element: <ListNotePopup />,
        isProtected: false,
    },
    {
        path:"/mp/:userId",
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