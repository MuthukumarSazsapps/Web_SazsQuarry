// import {useEffect, useState} from "react";
// // import {
// //   loadCaptchaEnginge,
// //   LoadCanvasTemplate,
// //   validateCaptcha,
// // } from "react-simple-captcha";


// import dynamic from "next/dynamic";

// const CaptchaComponent = dynamic(() => import("react-simple-captcha"), {
//   ssr: false,
// });

// const Captcha = () => {
//   const [userInput, setUserInput] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);

//   useEffect(() => {
//     // Access the components directly from CaptchaComponent
//     CaptchaComponent.loadCaptchaEnginge(8);
//   }, []);

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (CaptchaComponent.validateCaptcha(userInput)) {
//       alert("Captcha Matched");
//       setIsCorrect(true);
//       CaptchaComponent.loadCaptchaEnginge(6);
//       setUserInput("");
//     } else {
//       setIsCorrect(false);
//       setUserInput("");
//     }
//   };

//   return (
//     <div>
//       <div className="col mt-3">
//         {/* Access the components directly from CaptchaComponent */}
//         <CaptchaComponent.LoadCanvasTemplate />
//       </div>
//       <div className="col mt-3">
//         <input
//           placeholder="Enter Captcha"
//           id="user_captcha_input"
//           name="user_captcha_input"
//           type="text"
//           value={userInput}
//           onChange={handleInputChange}
//         ></input>
//       </div>
//       <div className="col mt-3">
//         <button className="btn btn-primary" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };


// const Captcha22 = () => {
//   const [userInput, setUserInput] = useState("");
//   const [isCorrect, setIsCorrect] = useState(false);
  
//   const {
//     loadCaptchaEnginge,
//     LoadCanvasTemplate,
//     LoadCanvasTemplateNoReload,
//     validateCaptcha,
//   } = CaptchaComponent;
//   useEffect(() => {
//     loadCaptchaEnginge(8);
//   }, []);

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (validateCaptcha(userInput)) {
//       alert("Captcha Matched");
//       setIsCorrect(true)
//       loadCaptchaEnginge(6);
//       setUserInput("");
//     } else {
//       setIsCorrect(false);
//       setUserInput("");
//     }
//   };

//   return (
//     <div>
//       <div className="col mt-3">
//         <LoadCanvasTemplate />
//       </div>
//       <div className="col mt-3">
//         <input
//           placeholder="Enter Captcha"
//           id="user_captcha_input"
//           name="user_captcha_input"
//           type="text"
//           value={userInput}
//           onChange={handleInputChange}
//         ></input>
//       </div>
//       <div className="col mt-3">
//         <button className="btn btn-primary" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Captcha;



