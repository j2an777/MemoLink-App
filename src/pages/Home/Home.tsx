import styled from 'styled-components'
import HomeIndex from '../../components/HomeCm/HomeIndex';

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
      <HomeIndex />
    </Wrapper>
  )
}
