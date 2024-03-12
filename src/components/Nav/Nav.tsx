import { Link, useNavigate } from "react-router-dom";
import { HomeItem, LoginItem, MenuOne, MenuTwo, ProfileItem, Wrapper } from "./NavStyles";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function Nav() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    const logoutOk = confirm("정말로 로그아웃 하시겠습니까?");
    
    if (logoutOk) {
      signOut(auth);
      setIsLoggedIn(false);
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <MenuOne>
        <Link to="/">
          <HomeItem>
            <svg width="135" height="87" viewBox="0 0 135 87" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M56.5984 85.7998L22.7984 85.7998C21.4651 85.7998 19.7651 85.8331 17.6984 85.8998C15.5651 85.8998 13.4984 85.9998 11.4984 86.1998C9.43177 86.3331 7.79844 86.5331 6.59844 86.7998L5.79844 86.4998C4.86511 84.2998 3.99844 81.7998 3.19844 78.9998C2.39844 76.1998 1.73177 73.2331 1.19844 70.0998C0.665106 66.8998 0.398437 63.6998 0.398437 60.4998C0.398437 57.1665 0.765108 53.9331 1.49844 50.7998C2.23178 47.6665 3.53177 44.8331 5.39844 42.2998C7.19844 39.6998 9.73177 37.6331 12.9984 36.0998C16.2651 34.5665 20.3984 33.7998 25.3984 33.7998L56.5984 33.7998V51.3998L25.9984 51.3998C22.8651 51.3998 20.4651 51.8331 18.7984 52.6998C17.1318 53.5665 15.9651 54.7998 15.2984 56.3998C14.6318 57.9998 14.2984 59.7998 14.2984 61.7998C14.2984 63.7331 14.5318 65.5665 14.9984 67.2998C15.4651 69.0331 15.9318 70.5998 16.3984 71.9998L12.4984 69.4998C13.4984 69.0331 14.8318 68.6998 16.4984 68.4998C18.0984 68.2998 20.1318 68.1998 22.5984 68.1998H56.5984V85.7998ZM56.5984 17.5998L25.9984 17.5998C22.8651 17.5998 20.4651 18.0331 18.7984 18.8998C17.1318 19.7665 15.9651 20.9998 15.2984 22.5998C14.6318 24.1998 14.2984 26.0998 14.2984 28.2998C14.2984 29.6998 14.4318 31.1331 14.6984 32.5998C14.9651 33.9998 15.2984 35.2998 15.6984 36.4998L4.69844 45.4998C3.49844 42.8331 2.49844 39.7665 1.69844 36.2998C0.831773 32.8331 0.398437 29.2998 0.398437 25.6998C0.398437 22.4998 0.731771 19.3998 1.39844 16.3998C2.0651 13.3331 3.29844 10.5665 5.09844 8.0998C6.83177 5.63313 9.33177 3.66647 12.5984 2.1998C15.8651 0.733135 20.1318 -0.000198364 25.3984 -0.000198364L56.5984 -0.000198364L56.5984 17.5998Z" fill="#01FF39"/>
              <path d="M134.598 28.014L104.997 48.892L58 85.8L56 85.8V68.21L89.5979 40.2149L134.598 5.21489V28.014ZM134.598 80.2149L90.5979 45.7149L56.377 17.4278L56.377 0H58L103.853 37.023L134.598 58.33V80.2149Z" fill="#019020"/>
              <path d="M98.8711 33.1902L112.951 43.4902L99.8037 53.1199L86.8014 42.75L98.8711 33.1902Z" fill="#78EE76"/>
            </svg>
            <span>MemoLinx</span>
          </HomeItem>
        </Link>
      </MenuOne>
      <MenuTwo>
        <Link to="/profile">
          <ProfileItem>
            MyPage
          </ProfileItem>
        </Link>
        {isLoggedIn ? (
          <LoginItem onClick={handleLogout}>Logout</LoginItem>
        ) : (
          <Link to="/login">
            <LoginItem>
              Login
            </LoginItem>
          </Link>
        )}
      </MenuTwo>
    </Wrapper>
  )
}
