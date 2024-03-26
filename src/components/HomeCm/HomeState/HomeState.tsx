import { useEffect, useState } from "react";
import { CircularProgress, ProgressText, ProgressValue, ToScriptBtn, Wrapper } from "./HomeStateStyles";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function HomeState() {

  const [progress, setProgress] = useState(0);
  const [linxCount, setLinxCount] = useState(1);
  const navigate = useNavigate();

  // linxCount가 5 이상일 때는 countPoint 무조건 100으로 설정
  const countPoint = Math.min(linxCount * 20, 100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // 진행률이 countPoint 또는 100 초과 안되도록 설정
        const nextProgress = Math.min(prevProgress + 1, countPoint, 100);
        if (nextProgress >= countPoint) {
          clearInterval(interval);
          return nextProgress;
        }
        return prevProgress + 1;
      });
    }, 20);

    const fetchLinxCount = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnapshot = await getDoc(userRef);

        if (userSnapshot.exists()) {
          setLinxCount(userSnapshot.data().count);
        } else {
          console.log('No such user!');
        }
      } else {
        setLinxCount(0);
      }
    }

    fetchLinxCount();
    return () => clearInterval(interval);
  }, [countPoint]);

  const toScript = () => {
    if (auth.currentUser) {
      navigate("/script");
    } else {
      navigate("/login");
    }
  };

  return (
    <Wrapper>
      <CircularProgress $progress={progress}>
        <ProgressValue>{progress}%</ProgressValue>
      </CircularProgress>
      <ProgressText>Daily Linx : <span>{linxCount}</span> / 5</ProgressText>
      <ToScriptBtn onClick={toScript}>Linx Up!</ToScriptBtn>
    </Wrapper>
  )
}
