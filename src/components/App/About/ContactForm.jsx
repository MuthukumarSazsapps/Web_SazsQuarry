import React from 'react'
import {useState, useEffect} from "react";
import axios from "axios";


const ContactForm = ({style = "4",rtl}) => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({agreed: ""});
  const [captchaError, setCaptchaError] = useState(true);
  const [captchaCode, setCaptchaCode] = useState();
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const generateRandomCode = (length) => {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      code += charset[randomIndex];
    }
    return code;
  };

  useEffect(() => {
    regenerateCaptcha();
  }, []);

  const regenerateCaptcha = () => {
    const code = generateRandomCode(6);
    setCaptchaCode(code);
    setUserInput("");
    setIsCorrect(false);
  };

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleCheckboxChange = (e) => {
    const {checked} = e.target;
    setFormData((prevData) => ({
      ...prevData,
      agreed: checked,
    }));
    // Clear the associated error when the checkbox is checked
    setErrors((prevErrors) => ({
      ...prevErrors,
      agreed: "",
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (userInput === captchaCode) {
      setCaptchaError(true);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
      setCaptchaError(false);
    }

    const newErrors = {};

    for (const field of ["name", "phone"]) {
      if (!formData[field].trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    }

   

    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "phone number Required";
    }

   

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {

      try {
        const body = {
          name: formData.name,
          phoneno: formData.phone,
        };

        const isEmailSent = await axios.post(
          "http://localhost:3000/api/api_email",
          body,
          {
            headers: {
              "Access-Control-Allow-Origin": true,
            },
          }
        );
          console.log(isEmailSent.data, "success");

        if (isEmailSent.data === "Success") {
          console.log(isEmailSent.data , "success");
             setFormData({
               name: "",
               phone: "",
             });
          regenerateCaptcha();
          // Clear success message after 6 seconds (adjust as needed)
          setTimeout(() => {
              setSuccess("Register Successfully");
          },);

          setTimeout(() => {
            setSuccess("");
          }, 6000);
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email: ", error);
      }
    }
  };

  return (
    <section
      className={`contact section-padding pt-${
        style === "4" ? "0" : "50"
      } style-6`}
    >
      <div className="container">
        <div className="content">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <section className="form">
                <p className="text-center text-white fs-16px mb-30">
                  <h3>{success.length ?success:"Lets Get Started"}  </h3>{" "}
                </p>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mb-20">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder={rtl ? "الاسم" : "Name *"}
                        value={formData.name}
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2  fs-12px">
                        {errors.name}
                      </div>
                    </div>

                    <div className="form-group mb-20 mt-5">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder={rtl ? "الاسم" : "Phone Number *"}
                        value={formData.phone}
                        onChange={handleFormChange}
                      />
                      <div className="text-danger text-center mt-2  fs-12px">
                        {errors.phone}
                      </div>
                    </div>
                  </div>

             
                  <div className="col-lg-12 text-center mt-5">
                    <input
                      type="submit"
                      onClick={handleFormSubmit}
                      value={rtl ? "ارسل طلبك" : "Register For Free Demo"}
                      className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          <img src="/assets/img/icons/contact_message.png" alt="" className="mail" />
          <img src="/assets/img/icons/contact_a.png" alt="" className="contact_a" />
        </div>
      </div>
    </section>
  )
}

export default ContactForm 