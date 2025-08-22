import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const myEmail = "ashutoshanandsharma51@gmail.com";
    const myName = "Ashutosh Anand Sharma";

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);
    const [notification, setNotification] = useState(null); // State for notification

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: myName,
                    from_email: form.email,
                    to_email: myEmail,
                    message: form.message
                },
                import.meta.env.VITE_PUBLIC_KEY
            );
            setLoading(false);
            setNotification({ type: 'success', message: 'Your message has been sent!' });
            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            setLoading(false);
            console.log(error);
            setNotification({ type: 'error', message: 'Something went wrong!' });
            setForm({ name: '', email: '', message: '' });
        }
    };

    // Automatically remove notification after 5 seconds
    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                setNotification(null);
            }, 5000); // 5000 ms = 5 seconds
            return () => clearTimeout(timer); // Cleanup the timeout on unmount or update
        }
    }, [notification]);

    // Function to manually close notification
    const handleCloseNotification = () => {
        setNotification(null);
    };

    return (
        <section className="my-20 c-space" id="contact">
            <div className="flex flex-col items-center justify-center min-w-full h-fit">
                <div className="flex justify-center border border-gray-700 contact-container min-w-2/3 md:min-w-full rounded-2xl bg-black-200">
                    <div className="absolute top-0 left-0 flex items-center w-full h-6 gap-1 px-3 rounded-t-2xl bg-gradient-to-r from-black-300 via-white-600 to-black-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full drop-shadow-terminal-red" />
                        <div className="w-2 h-2 bg-yellow-500 rounded-full drop-shadow-terminal-yellow" />
                        <div className="w-2 h-2 bg-green-500 rounded-full drop-shadow-terminal-green" />
                        <div className="ml-auto text-white-500" >+</div>
                    </div>
                    <div className="py-6 contact-container">
                        <h3 className="head-text">Let's Connect</h3>
                        <p className="mt-3 text-lg text-white-600">
                            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col mt-12 space-y-7">
                            <label className="space-y-3">
                                <span className="field-label">Full Name</span>
                                <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder={myName} />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">Email</span>
                                <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder={myEmail} />
                            </label>
                            <label className="space-y-3">
                                <span className="field-label">Your message</span>
                                <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hi, I want to give you a job..." />
                            </label>

                            <button className="field-btn" type="submit" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                                <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Notification */}
            {notification && (
                <div
                    className={`notification ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white p-3 rounded-md mt-4 flex justify-between items-center`}
                >
                    <span>{notification.message}</span>
                    <button
                        className="ml-4 font-bold text-white"
                        onClick={handleCloseNotification}
                    >
                        &times;
                    </button>
                </div>
            )}
        </section>
    )
}

export default Contact;