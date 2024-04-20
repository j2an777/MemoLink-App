import { Link, useNavigate } from "react-router-dom";
import { Error, Form, Input, LoginBox, PlatformItem, PlatformLogin, Switcher, Title, Wrapper } from "./LoginStyles";
import { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db } from "../../firebase";
import { FirebaseError } from "firebase/app";
import LoadingScreen from "../../components/Loader/LoadingScreen";
import { getErrorMessage } from "./LoginErrorData";
import { doc, setDoc } from "firebase/firestore";

export default function Login() {

  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [logLoading, setLogLoading] = useState(false);

  const [logError, setLogError] = useState("");

  const navigate = useNavigate();

  const onLogChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: {name, value} } = e;
    
    if (name === "email") {
      setLogEmail(value);
    } else if (name === "password") {
      setLogPassword(value);
    }
  };

  const onLogSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogError("");
    
    if (logLoading || logEmail === "" || logPassword === "") return;

    try {
      setLogLoading(true);
      await signInWithEmailAndPassword(auth, logEmail, logPassword);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setLogError(getErrorMessage(error.code));
      }
    } finally {
      setLogLoading(false);
    }
  };

  const onGithubLogin = async () => {
    try {
      const gitProvider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, gitProvider);
      const randomNum = Math.floor(Math.random() * 1000) + 1;

      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        username: user.displayName || `user${randomNum}`,
        avatarUrl: user.photoURL,
        introduce: "",
        count: 0,
        userId : user.uid
      }, { merge : true });
      
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error instanceof FirebaseError) {
        setLogError(getErrorMessage(error.code));
      }
    }
  };

  const onGoogleLogin = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      await setDoc(doc(db, "users", user.uid), {
        username: user.displayName,
        avatarUrl: user.photoURL,
        introduce: "",
        count: 0,
        userId : user.uid
      }, { merge : true });

      navigate("/");
    } catch (error) {
      console.log(error);
      if (error instanceof FirebaseError) {
        setLogError(getErrorMessage(error.code));
      }
    }
  };

  return (
    <Wrapper>
      {logLoading ? (
        <LoadingScreen />
      ) : (
      <LoginBox>
        <Title>MemoLinx</Title>
          <Form onSubmit={onLogSubmit}>
            <Input
              name="email"
              type="email"
              placeholder="이메일 입력"
              value={logEmail}
              onChange={onLogChange}
              autoComplete="email"
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="비밀번호 입력"
              value={logPassword}
              onChange={onLogChange}
              autoComplete="currentUser.password"
              required
            />
            <Input
              type="submit"
              value="로그인"
            />
          </Form>
        {logError !== "" ? <Error>{logError}</Error> : null}
        <Switcher>
          가입하신 계정이 없으신가요? <Link to="/signup">회원가입 &rarr;</Link>
        </Switcher>
        <PlatformItem>
          <PlatformLogin onClick={onGoogleLogin}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M43.611 20.083H42V20H24V28H35.303C33.654 32.657 29.223 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12C27.059 12 29.842 13.154 31.961 15.039L37.618 9.382C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24C4 35.045 12.955 44 24 44C35.045 44 44 35.045 44 24C44 22.659 43.862 21.35 43.611 20.083Z" fill="#FFC107"/>
              <path d="M6.30664 14.691L12.8776 19.51C14.6556 15.108 18.9616 12 24.0006 12C27.0596 12 29.8426 13.154 31.9616 15.039L37.6186 9.382C34.0466 6.053 29.2686 4 24.0006 4C16.3186 4 9.65664 8.337 6.30664 14.691Z" fill="#FF3D00"/>
              <path d="M24.0003 44C29.1663 44 33.8603 42.023 37.4093 38.808L31.2193 33.57C29.1439 35.1483 26.6078 36.002 24.0003 36C18.7983 36 14.3813 32.683 12.7173 28.054L6.19531 33.079C9.50531 39.556 16.2273 44 24.0003 44Z" fill="#4CAF50"/>
              <path d="M43.611 20.083H42V20H24V28H35.303C34.5142 30.2164 33.0934 32.1532 31.216 33.571L31.219 33.569L37.409 38.807C36.971 39.205 44 34 44 24C44 22.659 43.862 21.35 43.611 20.083Z" fill="#1976D2"/>
            </svg>
          </PlatformLogin>
          <PlatformLogin onClick={onGithubLogin}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C21.3736 4 18.7728 4.51732 16.3463 5.52241C13.9198 6.5275 11.715 8.00069 9.85786 9.85786C6.10714 13.6086 4 18.6957 4 24C4 32.84 9.74 40.34 17.68 43C18.68 43.16 19 42.54 19 42V38.62C13.46 39.82 12.28 35.94 12.28 35.94C11.36 33.62 10.06 33 10.06 33C8.24 31.76 10.2 31.8 10.2 31.8C12.2 31.94 13.26 33.86 13.26 33.86C15 36.9 17.94 36 19.08 35.52C19.26 34.22 19.78 33.34 20.34 32.84C15.9 32.34 11.24 30.62 11.24 23C11.24 20.78 12 19 13.3 17.58C13.1 17.08 12.4 15 13.5 12.3C13.5 12.3 15.18 11.76 19 14.34C20.58 13.9 22.3 13.68 24 13.68C25.7 13.68 27.42 13.9 29 14.34C32.82 11.76 34.5 12.3 34.5 12.3C35.6 15 34.9 17.08 34.7 17.58C36 19 36.76 20.78 36.76 23C36.76 30.64 32.08 32.32 27.62 32.82C28.34 33.44 29 34.66 29 36.52V42C29 42.54 29.32 43.18 30.34 43C38.28 40.32 44 32.84 44 24C44 21.3736 43.4827 18.7728 42.4776 16.3463C41.4725 13.9198 39.9993 11.715 38.1421 9.85786C36.285 8.00069 34.0802 6.5275 31.6537 5.52241C29.2272 4.51732 26.6264 4 24 4Z" fill="black"/>
            </svg>
          </PlatformLogin>
        </PlatformItem>
      </LoginBox>
      )}
    </Wrapper>
  )
}
