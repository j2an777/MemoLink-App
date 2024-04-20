import { useEffect, useState } from "react";
import { CircularProgress, ProgressText, ProgressValue, ToScriptBtn, Wrapper } from "./HomeStateStyles";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function HomeState() {

  const [target, setTarget] = useState(5);
  const [progress, setProgress] = useState(0);
  const [linxCount, setLinxCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (linxCount >= target) {
      setTarget(target + 5);
    }
  }, [linxCount, target]);

  useEffect(() => {
    const progressIncrement = 100 / target;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const maxProgress = linxCount * progressIncrement;
        const nextProgress = Math.min(prevProgress + 1, maxProgress);
        if (nextProgress >= maxProgress) {
          clearInterval(interval);
          return nextProgress;
        }
        return nextProgress;
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
          setLinxCount(0);
        }
      } else {
        setLinxCount(0);
      }
    }

    fetchLinxCount();
    return () => clearInterval(interval);
  }, [linxCount, target]);

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
        <ProgressValue>{Math.round(progress)}%</ProgressValue>
      </CircularProgress>
      <ProgressText>Daily Linx : <span>{linxCount}</span> / {target}</ProgressText>
      <ToScriptBtn onClick={toScript}>Linx Up!</ToScriptBtn>
    </Wrapper>
  )
}
