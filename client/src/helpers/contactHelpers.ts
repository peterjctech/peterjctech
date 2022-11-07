import emailjs from "@emailjs/browser";

interface FormData {
    nameOrCompany: string;
    subject: string;
    email: string;
    phoneNumber: string;
    message: string;
    isVerified: boolean;
}

export const validateContactForm = (props: FormData) => {
    const { nameOrCompany, subject, email, phoneNumber, message, isVerified } = props;
    if (!nameOrCompany) return "Name or company is required";
    if (!subject) return "Subject is required";
    if (!email && !phoneNumber) return "E-Mail and/or phone number is required";
    if (!message) return "Message is required";
    if (email) {
        const isValid =
            /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
                email
            );

        if (!isValid) return "Invalid e-mail format";
    }
    if (phoneNumber) {
        const isValid = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phoneNumber);
        if (!isValid) return "Invalid phone number format";
    }
    if (!isVerified) return "Please verify using the ReCaptcha";
    return null;
};

export const sendEmail = async (props: FormData) => {
    const { nameOrCompany, subject, email, phoneNumber, message } = props;
    let contact = "";
    if (email) contact += `E-Mail: ${email}    `;
    if (phoneNumber) contact += `Phone Number: ${phoneNumber}`;
    const params = {
        from: nameOrCompany,
        subject,
        email: email ? `Email: ${email}` : "",
        phone: phoneNumber ? `Phone: ${phoneNumber}` : "",
        message,
    };
    try {
        await emailjs.send(
            process.env.GATSBY_SERVICE_ID!,
            process.env.GATSBY_TEMPLATE_ID!,
            params,
            process.env.GATSBY_PUBLIC_KEY!
        );
        return true;
    } catch (error) {
        console.log("error => ", error);
        return false;
    }
};
