import './index.css'

const InputBox = () => {
  // caixa de input com o limite de 16 caracteres
  return(
    <div id='input-label-section'>
      <p id='label-input-box'></p> 
      <div className='input-box'>
        <input id='input-section' type='text' placeholder='name' maxLength="16" />
      </div>
    </div>
  )
}

export default InputBox