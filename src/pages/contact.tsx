import React, { useState } from "react";
import { Input, Button, Toast } from "components";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser, AiOutlineEdit } from "react-icons/ai";
import { validateContactForm, sendEmail } from "../helpers/contactHelpers";
import ReCAPTCHA from "react-google-recaptcha";
import { HeadFC } from "gatsby";

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
    const [toast, setToast] = useState<{ variant: "success" | "error"; message: string }>({
        variant: "success",
        message: "",
    });
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        const { value, name } = event.currentTarget;
        setFormData({ ...formData, [name]: value });
    };

    const handleValidate = () => setFormData({ ...formData, isVerified: true });

    const submitForm = async () => {
        const error = validateContactForm(formData);
        if (error) {
            setToast({
                variant: "error",
                message: error,
            });
            setTimeout(() => {
                setToast({ ...toast, message: "" });
            }, 3000);
        } else {
            setErrorMessage("");
            const response = await sendEmail(formData);
            if (response) {
                setFormData(defaultState);
                setToast({
                    variant: "error",
                    message: "E-mail has been sent successfully",
                });
                setTimeout(() => {
                    setToast({ ...toast, message: "" });
                }, 3000);
            }
        }
    };
    return (
        <main className="contact-page">
            {toast.message && <Toast message={toast.message} variant={toast.variant} />}
            <h1 className="title">CONTACT</h1>
            <div className="container">
                <div className="form">
                    <div className="form__content">
                        <p>{errorMessage}</p>
                        <h6 className="cindex-1">Please enter your name and/or company</h6>
                        <Input
                            name="nameOrCompany"
                            value={formData.nameOrCompany}
                            handleChange={handleChange}
                            placeholder="Name / Company"
                            icon={<AiOutlineUser />}
                            cindex={2}
                        />
                        <h6 className="cindex-3">Please enter the subject</h6>
                        <Input
                            name="subject"
                            value={formData.subject}
                            handleChange={handleChange}
                            placeholder="Subject"
                            icon={<AiOutlineEdit />}
                            cindex={4}
                        />
                        <h6 className="cindex-5">Please enter your preferred method of contact</h6>
                        <section className="cindex-6">
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
                        <h6 className="cindex-7">Please enter your message</h6>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            spellCheck="false"
                            rows={5}
                            className="cindex-8"
                        />
                    </div>
                    <div className="recaptcha cindex-9">
                        <ReCAPTCHA
                            sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY!}
                            onChange={handleValidate}
                            theme="dark"
                        />
                    </div>
                    <Button click={submitForm} variant="success" className="cindex-10">
                        Submit
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;

export const Head: HeadFC = () => <title>PJCTech | Contact</title>;
