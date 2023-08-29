'use client'
import {useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(formData.email);
    };

    const handleDataChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (formData.name && validateEmail() && formData.message) {
            console.log(formData);
        };
    };

    return (
        <form className="mx-auto rounded-xl p-8 w-96 bg-slate-600 text-left space-y-8">
            <div className="text-lg text-center">
                <p>Send Me A Message Here</p>
            </div>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Please enter your name" value={formData.name} onChange={handleDataChange} className="block rounded-full px-2 py-1 w-full text-black" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Please enter your email" value={formData.email} onChange={handleDataChange} className="block rounded-full px-2 py-1 w-full text-black" />
            </div>
            <div>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Please enter your message here" value={formData.message} onChange={handleDataChange} className="block rounded-lg px-2 py-1 w-full h-32 text-black" required />
            </div>
            <div className="text-center">
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    );
};
