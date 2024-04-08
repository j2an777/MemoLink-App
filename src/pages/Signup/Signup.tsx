import { Link, useNavigate } from "react-router-dom";
import { Error, Form, Input, LoginBox, OkContents, OkImg, OkPopup, OkTitle, Switcher, Title, ToLogin, Wrapper } from "./SignupStyles";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { FirebaseError } from "firebase/app";
import Overlay from "../../components/Overlay/Overlay";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [isOk, setIsOk] = useState(false);

  const navigate = useNavigate();

  const [signLoading, setSignLoading] = useState(false);

  const onSignChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSignSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError("");
    if (signLoading || name === "" || email === "" || password === "") return;

    try {
      setSignLoading(true);
      // firebase email, password 정보 담긴 user 정보 넣기
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      
      await updateProfile(credentials.user, {
        displayName: name
      });

      const db = getFirestore();
      const count = 0;

      // 회원가입 성공과 동시에 users문서 내 avatarUrl, introduce 필드 초기화 생성
      await setDoc(doc(db, 'users', credentials.user.uid), {
        avatarUrl: '',
        introduce: '',
        username: name,
        count : count,
        userId : credentials.user.uid
      });

      setIsOk(true);
    } catch (error) {
      if (error instanceof FirebaseError) {
        setIsError(error.message);
      }
    } finally {
      setSignLoading(false);
    }
  };


  return (
    <Wrapper>
      <LoginBox>
        <Title>MemoLinx</Title>
        <Form onSubmit={onSignSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="닉네임 입력"
            value={name}
            onChange={onSignChange}
            required/>
          <Input
            type="email"
            name="email"
            placeholder="이메일 입력"
            value={email}
            onChange={onSignChange}
            required
            />
          <Input
            type="password"
            name="password"
            placeholder="비밀번호 입력"
            value={password}
            onChange={onSignChange}
            required/>
          <Input
            type="submit"
            value={signLoading ? "로딩 중..." : "회원 가입"}/>
        </Form>
        {isError !== "" ? <Error>{isError}</Error> : null}
        <Switcher>
          계정이 이미 있으신가요? <Link to = "/login">로그인 &rarr;</Link>
        </Switcher>
      </LoginBox>
      {isOk ? (
        <>
          <Overlay />
          <OkPopup>
            <OkImg>
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" />
              </svg>
            </OkImg>
            <OkContents>
              <OkTitle>회원가입이 완료되었습니다!</OkTitle>
              <ToLogin
                onClick={() => {navigate("/login")}}>
                확인
              </ToLogin>
            </OkContents>
          </OkPopup>
        </>
      ) : (
        null
      )}
    </Wrapper>
  )
}
