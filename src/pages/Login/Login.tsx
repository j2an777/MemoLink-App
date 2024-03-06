import { Link, useNavigate } from "react-router-dom";
import { Error, Form, Input, LoginBox, Switcher, Title, Wrapper } from "./LoginStyles";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";

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
        setLogError(error.message);
      }
    } finally {
      setLogLoading(false);
    }
  }

  return (
    <Wrapper>
      <LoginBox>
        <Title>MemoLinx</Title>
        <Form onSubmit={onLogSubmit}>
          <Input
            name="email"
            type="email"
            placeholder="이메일 입력"
            value={logEmail}
            onChange={onLogChange}
          />
          <Input
            name="password"
            type="password"
            placeholder="비밀번호 입력"
            value={logPassword}
            onChange={onLogChange}
          />
          <Input
            type="submit"
            value={logLoading ? "로딩 중..." : "로그인"}
          />
        </Form>
        {logError !== "" ? <Error>{logError}</Error> : null}
        <Switcher>
          가입하신 계정이 없으신가요? <Link to = "/signup">회원가입 &rarr;</Link>
        </Switcher>
      </LoginBox>
    </Wrapper>
  )
}
