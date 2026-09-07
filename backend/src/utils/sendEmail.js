const nodemailer = require("nodemailer");

async function sendVerificataionEmail(to, subject, body) {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: emailUser,
            pass: emailPass
        }
    });

    const mailOptions = {
        from: emailUser,
        to,
        subject,
        html: body
    };

    await transporter.sendMail(mailOptions);
}

module.exports = sendVerificataionEmail;