const nodemailer = require("nodemailer");

const sendMail = (userData) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sazsappss@gmail.com",
      pass: "ffpyhmlljqbujfsr",
    },
  });

  var mailOptions = {
    from: "sazsappss@gmail.com",
    to: "sazsappss@gmail.com",
    subject: `Name: ${userData.name}`,
    text: `Content:${userData.comments}
    Phone No: ${userData.phoneno}
    Email: ${userData.email}
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
};


const handler = async (req, res) => {
 res.setHeader("Access-Control-Allow-Credentials", true);
 res.setHeader("Access-Control-Allow-Origin", "*");
 // another common pattern
 // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
 res.setHeader(
   "Access-Control-Allow-Methods",
   "GET,OPTIONS,PATCH,DELETE,POST,PUT"
 );
 res.setHeader(
   "Access-Control-Allow-Headers",
   "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
 );
  
  try {
    const {method} = req;
    switch (method) {
      case "POST": {
        //Do some thing
        await sendMail(req.body);
        res.status(200).send("Success");
        break;
      }
    }
  } catch (err) {
    res.status(400).json({
      error_code: "api_one",
      message: err.message,
    });
  }
};

export default handler;
