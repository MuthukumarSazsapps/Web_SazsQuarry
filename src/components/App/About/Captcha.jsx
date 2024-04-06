
import React, {useState} from "react";

const generateRandomCode = (length) => {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    code += charset[randomIndex];
  }
  return code;
};

const Captcha = () => {
  const [captchaCode, setCaptchaCode] = useState(generateRandomCode(6));
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);


  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const regenerateCaptcha = (e) => {
    e.preventDefault();
    setCaptchaCode(generateRandomCode(6));
    setUserInput("");
    setIsCorrect(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput === captchaCode) {
      alert("Captcha Matched");
      setIsCorrect(true);
      // onData(true)
    } else {
      setIsCorrect(false);
      alert("Captcha not Matched");
    }
  };

  return (
    <div className="container">
      <div className="col mt-3 ">
        <span>{captchaCode}</span>
        <button onClick={regenerateCaptcha}>Regenerate</button>
      </div>
      <div className="col mt-3">
        <input
          placeholder="Enter Captcha"
          id="user_captcha_input"
          name="user_captcha_input"
          type="text"
          value={userInput}
          onChange={handleInputChange}
        />
      </div>
      <div className="col mt-3">
        <button
          className="btn btn-primary"
          onClick={handleSubmit}
          disabled={isCorrect}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Captcha;



