'use client'
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [validInput, setValidInput] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [responseMessage, setResponseMessage] = useState("");

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(formData.email);
    };

    const handleDataChange = (event: { target: { name: string; value: string; } }) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formData.name && validateEmail() && formData.message) {
            setIsLoading(true);
            await fetch('/api/sendemail', {
                method: 'POST',
                body: JSON.stringify(formData),
            })
                .then((response) => response.json())
                .then((response) => {
                    setError(false);
                    setResponseMessage(response.message);
                })
                .catch((validInput) => {
                    setError(true);
                    setResponseMessage("There was an error, please try again later");
                });
            setValidInput(false);
        } else {
            setValidInput(true);
        };
        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto rounded-xl p-8 max-w-[384px] bg-malibu-700 text-left space-y-8">
            <div className="text-lg text-center">
                <p>Send Me A Message Here</p>
                <p className={`${error ? 'text-red-500' : 'text-green-500'}`}>{responseMessage}</p>
                <AiOutlineLoading3Quarters size={28} className={`${isLoading ? "block" : "hidden"} animate-spin mx-auto mt-2`} />
            </div>
            <div>
                <label htmlFor="name" className={`after:content-['*'] after:ml-0.5 ${validInput ? 'after:text-red-500' : ''}`}>Name</label>
                <input type="text" id="name" name="name" placeholder="Please enter your name" value={formData.name} onChange={handleDataChange} className="rounded-full px-2 py-1 w-full text-black" required />
            </div>
            <div>
                <label htmlFor="email" className={`after:content-['*'] after:ml-0.5 ${validInput ? 'after:text-red-500' : ''}`}>Email</label>
                <input type="email" id="email" name="email" placeholder="Please enter your email" value={formData.email} onChange={handleDataChange} className="rounded-full px-2 py-1 w-full text-black" required />
            </div>
            <div>
                <label htmlFor="message" className={`after:content-['*'] after:ml-0.5 ${validInput ? 'after:text-red-500' : ''}`}>Message</label>
                <textarea id="message" name="message" placeholder="Please enter your message here" value={formData.message} onChange={handleDataChange} className="rounded-lg px-2 py-1 w-full h-32 text-black" required />
            </div>
            <div className="text-center">
                <button type="submit">Submit</button>
            </div>
        </form>
    );
};
