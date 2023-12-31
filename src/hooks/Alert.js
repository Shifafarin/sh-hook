import React from 'react'


export default function Alert(props) {
 
  return (
    <div style={{height:'55px'}}>
    {props.alert &&
   <div>
    <div className="alert alert-warning alert-dismissible fade show container" role="alert">
    <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
  </symbol>
        <strong>{props.alert.type}</strong><span> {props.alert.msg}</span>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"/>
    </div>
    {/* <div id="message">
    <div id="inner-message" class="alert alert-error">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        test error message
    </div>
</div> */}
    </div>}
    </div>
  )
}
