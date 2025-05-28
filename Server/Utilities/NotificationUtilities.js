import nodemailer from "nodemailer";
const sendEmail = (email, subject, html) => {
  const emailId = email.join(" ,");
  //   console.log(email);
  //   console.log(subject);
  //   console.log(html);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "gunjankotadiya1@gmail.com",
      pass: "zymlsgtdsnbnmjnd",
    },
  });
  let mailDetails = {
    from: "gunjankotadiy1@gmail.com",
    to: emailId,
    subject: subject,
    html: html,
  };
  transporter.sendMail(mailDetails, (err, data) => {
    if (err) {
      console.log("Unable to send email", err);
    } else {
      console.log(`Email sent sucessfully to: ${emailId}`);
    }
  });
};

//zyml sgtd snbn mjnd
export default sendEmail;
