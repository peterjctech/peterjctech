import React, { useState } from "react";
import { Input, Button } from "components";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser, AiOutlineEdit } from "react-icons/ai";
import { validateContactForm, sendEmail } from "../helpers/contactHelpers";
import ReCAPTCHA from "react-google-recaptcha";
import Toast from "../components/Toast";

const defaultState = {
    nameOrCompany: "",
    subject: "",
    email: "",
    phoneNumber: "",
    message: "",
    isVerified: false,
};

const ContactPage = () => {
    const [formData, setFormData] = useState(defaultState);
    const [showToast, setShowToast] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        const { value, name } = event.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const handleValidate = () => setFormData({ ...formData, isVerified: true });

    const submitForm = async () => {
        const error = validateContactForm(formData);
        if (error) {
            setErrorMessage("*" + error + "*");
        } else {
            setErrorMessage("");
            const response = await sendEmail(formData);
            if (response) {
                setShowToast("E-Mail has been sent successfully");
                setFormData(defaultState);
                setTimeout(() => {
                    setShowToast("");
                }, 3000);
            }
        }
    };
    return (
        <main className="contact-page">
            {showToast && <Toast message={showToast} />}
            <h1>Contact Me</h1>
            <div className="container">
                <div className="form">
                    <div className="form__content">
                        <p>{errorMessage}</p>
                        <h6>Please enter your name and/or company</h6>
                        <Input
                            name="nameOrCompany"
                            value={formData.nameOrCompany}
                            handleChange={handleChange}
                            placeholder="Name / Company"
                            icon={<AiOutlineUser />}
                        />
                        <h6>Please enter the subject</h6>
                        <Input
                            name="subject"
                            value={formData.subject}
                            handleChange={handleChange}
                            placeholder="Subject"
                            icon={<AiOutlineEdit />}
                        />
                        <h6>Please enter your preferred method of contact</h6>
                        <section>
                            <Input
                                name="email"
                                value={formData.email}
                                handleChange={handleChange}
                                placeholder="E-Mail"
                                icon={<AiOutlineMail />}
                            />
                            <Input
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                handleChange={handleChange}
                                placeholder="Phone Number"
                                icon={<AiOutlinePhone />}
                            />
                        </section>
                        <h6>Please enter your message</h6>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            spellCheck="false"
                            rows={5}
                        />
                    </div>
                    <div className="recaptcha">
                        <ReCAPTCHA sitekey={process.env.RECAPTCHA_SITE_KEY!} onChange={handleValidate} theme="dark" />
                    </div>
                    <Button click={submitForm} variant="success">
                        Submit
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
