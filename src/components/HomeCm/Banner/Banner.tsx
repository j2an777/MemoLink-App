import { useNavigate } from "react-router-dom";
import { BannerBtn, BannerContents, BannerImg, BannerTitle, BannersubTitle, Wrapper } from "./BannerStyles";

export default function Banner() {

    const navigate = useNavigate();

    const toScript = () => {
        navigate("/script");
    }

    return (
      <Wrapper>
          <BannerImg src="/Banner.png" alt="banner image" />
          <BannerContents>
              <BannerTitle>새로운 노트!<br/>모든 기록은 여기에</BannerTitle>
              <BannersubTitle>MemoLinx는 기존 기록을 넘어<br/>서로 공유하고, 인사이트를 얻는 데 도움이 되는 플랫폼입니다.</BannersubTitle>
              <BannerBtn onClick={toScript}>Go Start!</BannerBtn>
          </BannerContents>
      </Wrapper>
    )
}
