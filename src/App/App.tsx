import styled from "styled-components"
import { AppStyles } from "./AppStyle";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import LoadingScreen from "../components/Loader/LoadingScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../routes/Layout";
import { routers } from "../routes/Routers";
import ProtectedRoute from "../routes/protected-route";

const Wrapper = styled.div`
  width : 100%;
  height : 100vh;
  display : flex;
  flex-direction : column;
  align-items : center;
  margin : 0;
`;

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const init = async () => {
    await auth.authStateReady();
    
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };
  
  useEffect(() => {
    init();
  }, []);

  return (
    <Wrapper>
      <AppStyles />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              {routers.map((route) => (
                route.isProtected ? (
                  <Route key={route.path} path={route.path} element={<ProtectedRoute element={route.Element} />} />
                ) : (
                  <Route key={route.path} path={route.path} element={route.Element} />
                )
              ))}
            </Route>
          </Routes>
        </BrowserRouter>
      )}
    </Wrapper>
  )
}

export default App;
