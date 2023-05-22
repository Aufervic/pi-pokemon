import './Modal.css'
import IconFail from '../../assets/icon-fail.png'
import IconSuccess from '../../assets/icon-success.png'
import IconAlert from '../../assets/icon-alert.png'

const Modal = ({modalConfig, onClose}) => {

  const getImage = (type) =>{
    switch(type){
      case 'fail':
        return IconFail
      case 'success':
        return IconSuccess
      case 'alert':
        return IconAlert
      default:
        return IconAlert
    }
  }

  return (
    <div className="modal-container" style={{display: modalConfig.isOpen?'grid': 'none'}}>
      <div className="modal-body">
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={getImage(modalConfig.type)} alter='icon' className='modal-icon' width='60px'/>
        <p className='modal-title'>{modalConfig.title}</p>
        <p className='modal-content'>{modalConfig.message}</p>
        <div className='btns-container'>
          <button onClick={onClose} className='btn'>OK</button>
        </div>
      </div>
    </div>
  )

}

export default Modal