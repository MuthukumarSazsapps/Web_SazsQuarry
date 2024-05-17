import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const ContactForm = ({ style = "4", rtl }) => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    captcha:""
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

  const newErrors = {};

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (userInput === captchaCode) {
      console.log("true");
      setCaptchaError(true);
      setIsCorrect(true);
    } else {
      console.log("false");
      setIsCorrect(false);
      setCaptchaError(false);
      newErrors["captcha"]="captha not matched"
    }


    for (const field of ["name", "phone"]) {
      if (!formData[field].trim()) {
        newErrors[field] = `${
          field.charAt(0).toUpperCase() + field.slice(1)
        } is required`;
      }
    }


    setErrors(newErrors);
    console.log(newErrors,"newErrors");
    
    if (Object.keys(newErrors).length === 0) {

      try {
        const body = {
          name: formData.name,
          comment: "Demo Request",
          email: "",
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

        if (isEmailSent.data === "Success") {
          console.log(isEmailSent.data , "success");
             setFormData({
               name: "",
               phone: "",
               
             });
          regenerateCaptcha();
          // Clear success message after 6 seconds (adjust as needed)
          setTimeout(() => {
              setSuccess("We will reach you soon");              
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
      className={`contact section-padding pt-${style === "4" ? "0" : "50"
        } style-6`}
    >
      <div className="container">
        <div className="content">
          {/* <img src="assets/img/about/sazs quarry logo white 1.webp" alt="logo" className='text-center mb-5' width={150} style={{marginLeft:"130px"}}/> */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <section className="form">
              <div>
                <img src="/assets/img/about/sqlwhite.webp" alt="logo" className='' width={150} style={{marginLeft:"60px",position:"relative", bottom:50}}/>
              </div>
              {success.length?(
                <div>
                  <p className="text-center text-white fs-16px mb-30">
                    <h3>{success}</h3>{" "}
                    <i className="fa fa-check-circle-o" style={{color:"Green",fontSize:48}}></i>
                  </p>
                </div>
              ):(
                <>
                {/* <ParticleComponent /> */}
                <p className="text-center text-white fs-16px mb-30">
                  <h3>{success.length ? success : "Get 10% offer Today"}  </h3>{" "}
                </p>
                <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mb-10">
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

                  <div className="form-group mb-20 mt-2">
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

                 
                    <div className="form-group mb-20">
                      <div>
                        <div>
                          <input
                            placeholder="Enter Captcha"
                            id="user_captcha_input"
                            name="user_captcha_input"
                            type="text"
                            className="form-control"
                            value={userInput}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="mt-3 ms-3">
                          <span className="captchacode me-2 bg-light">
                            {captchaCode}
                          </span>
                          <button
                            onClick={regenerateCaptcha}
                            className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                          >
                            Regenerate
                          </button>
                        </div>
                        <div className="text-danger text-center mt-2 fs-12px">
                          {errors.captcha}
                        </div>
                      </div>
                    </div>
                </div>
                <div className="col-lg-12 text-center mt-5">
                  <input
                    type="submit"
                    onClick={handleFormSubmit}
                    value={rtl ? "ارسل طلبك" : "Try our demo for free"}
                    className="btn rounded-pill blue5-3Dbutn hover-blue2 sm-butn fw-bold text-light"
                  />
                </div>
              </div>
              </>
              )}
                
               
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