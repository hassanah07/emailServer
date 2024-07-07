const nodemailer = require("nodemailer");
const express = require("express");
const route = express.Router();
// ASIF ASIF ASIF CONTACT SMTP SEND DETAILS
route.post("/contactAsif", async (req, res) => {
  // email shotting process start
  try {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      host: "smtp.forwardemail.net",
      port: 465,
      secure: true,
      service: "gmail",
      auth: {
        // user: userName,
        // pass: password,
      }
    });
    async function main() {
      const info = await transporter.sendMail({
        from: '"Server Mail"Asif@dev.com',
        to: "hassanah0007@gmail.com",
        subject: "Asif! You have a New Contact",
        html: `

        <b>Name :</b>${req.body.name}<br />
        <b>Email :</b>${req.body.email}<br />
        <b>Message :</b>${req.body.message}<br />
        `
      });
      res.status(200).json({ msg: "Thank You for Contact Me!" });
    }
    main().catch(() => {
      res.status(500).json({ msg: false });
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

module.exports = route;
