const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (userEmail, userName) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"PulseHub Support" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: 'Welcome to PulseHub! ',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2F80ED;">Welcome, ${userName}!</h2>
          <p>Thank you for joining <strong>PulseHub</strong>. Your journey to fitness starts now.</p>
          <p>You can now log in to the app to book classes and track your progress.</p>
          <br>
          <p>See you at the gym,<br>PulseHub Team</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(` Welcome email sent to: ${userEmail}`);
  } catch (error) {
    console.error(' Email sending failed:', error);
  }
};

module.exports = sendWelcomeEmail;