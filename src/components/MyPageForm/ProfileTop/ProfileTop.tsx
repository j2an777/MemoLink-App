import { useState } from "react";
import { ProFileAvatarContainer, ProFileEdit, ProFileEditContainer, ProFileEditMessage, ProFileImg, ProFileMessage, ProFileName, ProFilePreview, ProFileUserEdit, ProFileUserEditLabel, Wrapper } from "./ProfileTopStyles";

export default function ProfileTop() {

    const [isEditing, setIsEditing] = useState(false);
    const [introduceValue, setIntroduceValue] = useState("");
    const [profileImgUrl, setProfileImgUrl] = useState("/user.svg");

    const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIntroduceValue(e.target.value);
    };

    // 업로드한 이미지에 대한 url를 string으로 보관
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const fileReader = new FileReader();

            fileReader.onload = (e) => {
                const result = e.target?.result;
                if (typeof result === 'string') {
                    setProfileImgUrl(result);
                }
            };

            fileReader.readAsDataURL(file);
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    return (
        <Wrapper>
            <ProFileAvatarContainer>
                <ProFileImg>
                    <img src={profileImgUrl} />
                </ProFileImg>
                <ProFileUserEditLabel htmlFor="avatar-upload">
                    +
                    <ProFileUserEdit 
                        type="file" 
                        id="avatar-upload"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                </ProFileUserEditLabel>
            </ProFileAvatarContainer>
            <ProFilePreview>
                <ProFileName>하승진</ProFileName>
                <ProFileEditContainer>
                    {isEditing ? (
                        <ProFileEditMessage
                            type="text" 
                            placeholder="자기소개 글 입력하세요."
                            value={introduceValue}
                            onChange={handleMessageChange}
                        />
                    ) : (
                        <ProFileMessage>{introduceValue ? introduceValue : "자기소개 글 넣어주세요."}</ProFileMessage>
                    )}
                    <ProFileEdit onClick={toggleEdit}>{isEditing ? "확인" : "편집"}</ProFileEdit>
                </ProFileEditContainer>
            </ProFilePreview>
        </Wrapper>
    )
}