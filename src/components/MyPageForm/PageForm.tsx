import { ProFileEdit, ProFileEditContainer, ProFileImg, ProFileMessage, ProFileName, ProFilePreview, ProFileTop, Wrapper } from "./PageFormStyles";

export default function PageForm() {
  return (
    <Wrapper>
        <ProFileTop>
            <ProFileImg>
                <img src="/Logo2.svg" />
            </ProFileImg>
            <ProFilePreview>
                <ProFileName>하승진</ProFileName>
                <ProFileEditContainer>
                    <ProFileMessage>기어갈지언정</ProFileMessage>
                    <ProFileEdit>편집</ProFileEdit>
                </ProFileEditContainer>
            </ProFilePreview>
        </ProFileTop>
    </Wrapper>
  )
}
