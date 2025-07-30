import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your Gmail
    pass: process.env.EMAIL_PASS  // your Gmail App Password
  }
});

// Optional: verify transport
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Server is ready to send emails');
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: `Contact Form Submission: ${subject}`,
    replyTo: email,
    html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2e6c80;">📬 New Message from Portfolio Webpage</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>

        <hr style="margin: 20px 0;" />

        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>

        <hr style="margin: 30px 0;" />
        <footer style="font-size: 0.9em; color: #777;">
            This message was sent from your portfolio contact form.
        </footer>
        </div>
    `,
    };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
