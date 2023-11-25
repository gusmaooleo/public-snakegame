import './index.css'
import Background from '../../components/background/background'
import SideBox from '../../components/sidebox/sidebox'
import LoginBox from '../../components/loginbox/loginbox'
import { useEffect } from 'react'
import { useGlobalState } from '../state'

const Login = () => {
  const [currentPage] = useGlobalState('currentPage');

  useEffect(() => {
    if (currentPage === 'main') {
      window.location.reload();
    }
    // eslint-disable-next-line
  }, [])

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