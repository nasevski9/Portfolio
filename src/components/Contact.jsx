import React, { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7q24bpp', 'template_9zlrty9', form.current, 'U8amcQ9y-B0wKCOLq')
            .then((result) => {
              console.log('Email sent successfully:', result.text);
            })
            .catch((error) => {
              console.error('Error sending email:', error.text);
            });

        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <>
            <div>
                <div className="p-3 justify-content-center d-flex">
                    <h1>Contact Me</h1>
                </div>
            </div>
            <form className="contact-form d-flex justify-content-center row mx-0" onSubmit={handleSubmit}>
            <div className="row">
                <label className="col-lg-12 mb-3 fs-5">
                    Full Name
                </label>
                <input className="col-lg-12 bg-light text-dark fs-5 p-1 border border-dark rounded" type="text" id="name" title="Please fill out this field." value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="row">
                <label className="fs-5 mb-2 mt-2">
                    Email
                </label>
                <input className="bg-light text-dark fs-5 p-1 border border-dark rounded" type="email" id="email" title="Please fill out this field."value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="row">
                <label className="fs-5 mb-2 mt-2">
                    Message
                </label>
                <textarea className="bg-light text-dark fs-5 p-1 border border-dark rounded" title="Please fill out this field." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <div className="row">
                <button className="btn btn-success p-2 fs-3 col-lg-12 mt-5 rounded-pill" id="contact-btn" type="button" onClick={handleSubmit}>Submit</button>
            </div>
            </form>
        </>
    )
}