import './index.css'
import Background from '../../components/background/background'
import SideBox from '../../components/sidebox/sidebox'
import LoginBox from '../../components/loginbox/loginbox'

const Login = () => {
  return(
    <div id='login-page'>
      <Background />
      <div id='content'>
        <SideBox />
        <LoginBox />
      </div>
    </div>
  )
}

export default Login