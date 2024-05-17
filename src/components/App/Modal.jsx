import React from 'react'
import ContactForm from './About/ContactForm'

const Modal = () => {
  return (
    <div>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content" style={{backgroundColor:"transparent ",borderColor:"transparent"}}>
          <div>
          {/* <button type="button" className="close  btn-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
            <button type="button" className="btn-close  btn-light" name="ModalCloseButton" aria-label="Close" data-bs-dismiss="modal" style={{backgroundColor:'white',color:"blue",pointerEvents: "auto"}}></button>
          </div>
          <div className="modal-body">
          <ContactForm rtl={""} />
          </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Modal