// @ts-nocheck
import { useEffect,useState } from "react";
import Card from "../Component/Card";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactSkelo from "../Skeloton/ContactSkelo";

export default function Contact() {


    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        },1000);

        // return () => clearTimeout(timer);
    },[]);

    const data = [
        { icon: <PhoneIcon className="text-blue-500" />,title: "Phone Number",paragraph: "+91 ( 7041 ) 541-797" },
        { icon: <EmailIcon className="text-error" />,title: "Email",paragraph: "devaliyanimesh61972@gmail.com" },
    ];

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors,setErrors] = useState({});

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => !phone || /^(\+?\d{7,15})$/.test(phone.replace(/\s+/g,''));
    const validateName = (name) => /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name.trim());

    function handleChange(e) {
        const { name,value } = e.target;

        // Special handling for name field
        let newValue = value;
        if (name === "name") {
            newValue = value.replace(/[^A-Za-z\s]/g,"").replace(/\s{2,}/g," ");
        }

        setFormData((prev) => ({ ...prev,[name]: newValue }));

        // Live validation
        setErrors((prev) => {
            const newErrors = { ...prev };

            switch (name) {
                case "name":
                    if (!newValue.trim()) newErrors.name = "Name is required";
                    else if (!validateName(newValue)) newErrors.name = "Only alphabets and single space allowed";
                    else delete newErrors.name;
                    break;
                case "email":
                    if (!value.trim()) newErrors.email = "Email is required";
                    else if (!validateEmail(value)) newErrors.email = "Email is invalid";
                    else delete newErrors.email;
                    break;
                case "phone":
                    if (value && !validatePhone(value)) newErrors.phone = "Phone number is invalid";
                    else delete newErrors.phone;
                    break;
                case "message":
                    if (!value.trim()) newErrors.message = "Message is required";
                    else delete newErrors.message;
                    break;
                default:
                    break;
            }

            return newErrors;
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = "Name is required";
        } else if (!validateName(formData.name)) {
            validationErrors.name = "Only alphabets and single space allowed";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            validationErrors.email = "Email is invalid";
        }

        if (formData.phone && !validatePhone(formData.phone)) {
            validationErrors.phone = "Phone number is invalid";
        }

        if (!formData.message.trim()) {
            validationErrors.message = "Message is required";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            Object.values(validationErrors).forEach((msg) => toast.error(msg));
            return;
        }

        toast.success("Form submitted successfully!");

        setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        console.log("Form submitted:",formData);
    }

    const isFormValid =
        formData.name.trim() &&
        validateName(formData.name) &&
        formData.email.trim() &&
        validateEmail(formData.email) &&
        (!formData.phone || validatePhone(formData.phone)) &&
        formData.message.trim() &&
        Object.keys(errors).length === 0;


    if (loading) {
        return <  ContactSkelo />
    }

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} />

            <section className="mb-3">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <div className="mt-2 ml-1 w-28 h-1 bg-accent"></div>
            </section>

            <Card data={data} grid="2" />
            <div className="flex flex-col lg:flex-row gap-6 mt-4">
                {/* Contact Form */}
                <section className="w-full lg:w-1/2">
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                        <div>
                            <label htmlFor="name" className="block font-medium">
                                Name <span className="text-error ml-1">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="off"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full border rounded px-3 py-2 text-black ${errors.name ? "border-red-500" : ""}`}
                                required
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block font-medium">
                                Email <span className="text-error ml-1">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="off"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full border rounded px-3 py-2 text-black ${errors.email ? "border-red-500" : ""}`}
                                required
                                placeholder="Enter your email"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block font-medium">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                autoComplete="off"
                                maxLength={10}
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full border rounded px-3 py-2 text-black ${errors.phone ? "border-red-500" : ""}`}
                                placeholder="Enter phone number"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block font-medium">
                                Message <span className="text-error ml-1">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                autoComplete="off"
                                value={formData.message}
                                onChange={handleChange}
                                className={`w-full border rounded px-3 py-2 text-black ${errors.message ? "border-red-500" : ""}`}
                                rows="4"
                                required
                                placeholder="Write your message here"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={!isFormValid}
                            className={`bg-info border border-accent font-medium text-white px-10 shadow-xl py-2 rounded hover:bg-accent hover:text-info ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            Submit
                        </button>
                    </form>
                </section>

                {/* Google Map */}
                <div className="w-full lg:w-1/2 h-[450px] border-2 border-accent rounded overflow-hidden">
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.6769105845461!2d72.85834031965112!3d21.24343879875475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f2c21c4a1a9%3A0x42e6e2842510680f!2sMaruti%20Dham%20Society%2C%20Amroli%2C%20Surat%2C%20Gujarat%20394107!5e0!3m2!1sen!2sin!4v1756722026045!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

        </>
    );
}
