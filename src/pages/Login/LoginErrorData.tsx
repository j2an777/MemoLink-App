export const getErrorMessage = (errorCode: string) => {
    switch (errorCode) {
        case 'auth/user-not-found':
            return '계정을 찾을 수 없습니다.';
        case 'auth/wrong-password':
            return '비밀번호가 틀렸습니다.';
        case 'auth/invalid-email':
            return '이메일 주소가 올바르지 않습니다.';
        case 'auth/user-disabled':
            return '계정이 비활성화되었습니다.';
        case 'auth/too-many-requests':
            return '너무 많은 시도가 있었습니다. 나중에 다시 시도해주세요.';
        case 'auth/invalid-credential' :
            return '사용자 정보가 일치하지 않습니다. 다시 시도해주세요.';
        // 추가적인 오류 코드에 대한 메시지를 여기에 추가
        default:
            return '로그인 중 오류가 발생했습니다. 나중에 다시 시도해주세요.';
    }
};