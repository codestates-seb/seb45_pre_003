import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode'; // jwt-decode 라이브러리를 import합니다.

function GoogleButton() {

  return (
    <GoogleOAuthProvider clientId={'1080660686567-rqrevbajc9tg7blt32q2kfihoe4kbono.apps.googleusercontent.com'}>
      <GoogleLogin
        clientId={'1080660686567-rqrevbajc9tg7blt32q2kfihoe4kbono.apps.googleusercontent.com'}
        onSuccess={(CredentialResponse) => {
          console.log("CredentialResponse:", CredentialResponse);
          const token = CredentialResponse.Credential; // 적절한 속성을 사용하여 토큰을 가져옵니다.
        
          try {
            const decodedToken = jwtDecode(token);
            console.log("Decoded Token:", decodedToken);
          } catch (error) {
            console.error("Decoding Error:", error);
          }
        }}
        onFailure={(res) => console.log(res, '실패')}
        render={(renderProps) => (
          <div className='social_login_box google' onClick={renderProps.onClick}>
            <div className='social_login_text_box'>구글로 시작하기</div>
            <div className='social_login_blank_box'> </div>
          </div>
        )}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleButton;