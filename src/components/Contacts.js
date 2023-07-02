import React, { useState } from 'react';
import "./contact.css";
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import {TbBrandTelegram} from "react-icons/tb";
import { useRef } from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [forma, setForma] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForma({
      ...forma,
      [name]: value
    })
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w5o1do5','template_ojzaewl', form.current, 'bWMquDmtZwdr5JsG7' )
    e.target.reset();
  }


  return (
    <section className='contact'>
      <div className='contact__header'>
        <h5>Get in touch</h5>
        <h2>Contact me</h2>
      </div>

      <div className='container contact__container'>
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>petrozabila@gmail.com</h5>
            <a href="mailto:petrozabila@gmail.com" target="_blank" rel="noreferrer">Send a message via email</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
      
            <a href="https://m.me/petro.zabila" target="_blank" rel="noreferrer">Send a message via email</a>
          </article>

          <article className='contact__option'>
            <TbBrandTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <a href="https://petrozabila.t.me" target="_blank" rel="noreferrer">Write me on Telegram</a>
          </article>
        </div>
        <div className="contact__options">
          <form ref={form} onSubmit={sendEmail}>
          <input
              type='text'
              name='name'
              value={forma.name}
              onChange={handleChange}
              placeholder="What's your good name?"
            />
   

            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={forma.email}
              onChange={handleChange}
              placeholder="What's your web address?" 
            />
  

            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={forma.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

        </div>
    </section>
  )
}

export default Contact;