import { useNavigate } from "react-router-dom";
import { BannerBtn, BannerContents, BannerImg, BannerTitle, BannersubTitle, Wrapper } from "./BannerStyles";
import { auth } from "../../../firebase";

export default function Banner() {

    const navigate = useNavigate();

    const toScript = () => {
        if (auth.currentUser) {
            navigate("/script");
        }
        else {
            navigate("/login");
        }
    };

    return (
      <Wrapper>
          <BannerImg src="/Banner.png" alt="banner image" />
          <BannerContents>
              <BannerTitle>적어놓은 글 하나에<br/>세상을 연결시키다</BannerTitle>
              <BannersubTitle>MemoLinx는 기록하는 것을 넘어<br/>서로 공유하고, 인사이트를 얻는 데 도움이 되는 플랫폼입니다.</BannersubTitle>
              <BannerBtn onClick={toScript}>Go Start!</BannerBtn>
          </BannerContents>
      </Wrapper>
    )
}
