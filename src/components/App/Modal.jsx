import React from 'react'
import ContactForm from './About/ContactForm'

const Modal = () => {
  return (
    <div>

      <div class="modal fade" id="myModal">
        <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content" style={{backgroundColor:"transparent ",borderColor:"transparent"}}>
          <div class="">
          {/* <button type="button" class="close  btn-light" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
            <button type="button" class="btn-close  btn-light " data-bs-dismiss="modal" style={{backgroundColor:'white',color:"blue",pointerEvents: "auto"}}></button>
          </div>
          <div class="modal-body">
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