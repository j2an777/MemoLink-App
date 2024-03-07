import BannerIndex from '../../components/HomeCm/BannerIndex';
import styled from 'styled-components'

const Wrapper = styled.div`
  width : 100%;
  margin : 0;
  padding : 0;
  display : flex;
  justify-content : center;
`;

export default function Home() {
  return (
    <Wrapper>
      <BannerIndex />
    </Wrapper>
  )
}
