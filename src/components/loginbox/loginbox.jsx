import './index.css'
import DefaultLoginBoxSection from './loginbox-components/default-loginbox-section/defaultSection'
import PicSelectSection from './loginbox-components/pic-select-section/picSelect'

// componente responsável por renderizar a caixa de login e a de seleção de fotos.
const LoginBox = () => {
  return(
    <div id='login-box'>
      <div id='default-section'>
        <DefaultLoginBoxSection />
      </div>
      <div id='pic-select-section'>
        <PicSelectSection />
      </div>
    </div>
  )
}

export default LoginBox