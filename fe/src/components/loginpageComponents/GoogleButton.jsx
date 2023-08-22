import { GoogleOAuthProvider } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'

function GoogleButton() {
  return(
<GoogleOAuthProvider clientId={`1080660686567-rqrevbajc9tg7blt32q2kfihoe4kbono.apps.googleusercontent.com`}>
	<GoogleLogin
            clientId={`1080660686567-rqrevbajc9tg7blt32q2kfihoe4kbono.apps.googleusercontent.com`}
            onSuccess={(res) => console.log(res, '성공')}
            onFailure={(res) => console.log(res, '실패')}
            render={(renderProps) => (
              <div className='social_login_box google' onClick={renderProps.onClick}>
                <div className='social_login_text_box'>구글로 시작하기</div>
                <div className='social_login_blank_box'> </div>
              </div>
            )}
	/>
</GoogleOAuthProvider>

  )
}

export default GoogleButton;