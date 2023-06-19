import React from 'react'

const Modal = () => {
  return (
    <div style={{ width: "350px", height: "350px", backgroundColor: "lightgray" }}>
      <p>My contact information</p>
      <ul>
        <li>My cell: +380631353552</li>
        <li>Email me: petrozabila@gmail.com</li>
      </ul>
      <h3>Feel free to write me</h3>
      <form>
        <textarea
            name='your message'
            value=""

        />
      </form>
    </div>
  )
};

export default Modal
