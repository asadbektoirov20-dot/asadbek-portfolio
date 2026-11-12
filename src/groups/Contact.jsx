import React from 'react'
import '../App.css'
import './Contact.css'

const Contact = () => {
  return (
    <div>

      <section className="hero4">

        <h2>Contact</h2>

        <div className="email-location">

          <div className="mail">

            <input type="text" placeholder='Ismingizni kiriting' />
            <input type="text" placeholder='Email manzilingiz' />
            <input type="text" placeholder='Telefon raqamingiz' />
            <input type="text" placeholder='Xabarni kiriting' />

            <button className="sendBtn">Yuborish</button>

          </div>

          <div className="location">

            <h3>Manzil: <span>Samarkand, Amur temur 12</span></h3>
            <h3>Bog'lanish: <span>+998 (88) 223 22 75</span></h3>
            <h3>Email: <span>asadbektoirov20@gmail.com</span></h3>


            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d786534.6677616939!2d66.967887!3d39.640688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2z0KHQsNC80LDRgNC60LDQvdC0LCDQodCw0LzQsNGA0LrQsNC90LTRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2sus!4v1794475677180!5m2!1sru!2sus"
              width="250px"
              height="250px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe> 


          </div>


        </div>

      </section>

    </div>
  )
}

export default Contact
