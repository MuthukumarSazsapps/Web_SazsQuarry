import React from 'react'
import ContactForm from './About/ContactForm'

const Modal = () => {
  return (
    <div>

      <div className="modal fade" id="myModal">
        <div className="modal-dialog  modal-dialog-centered">
        <div className="modal-content" style={{backgroundColor:"transparent ",borderColor:"transparent"}}>
          <div className="">
          {/* <button type="button" className="close  btn-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
            <button type="button" className="btn-close  btn-light " data-bs-dismiss="modal" style={{backgroundColor:'white',color:"blue",pointerEvents: "auto"}}></button>
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

// style={{backgroundColor:"#7f7f7f",borderColor:"#7f7f7f"}}