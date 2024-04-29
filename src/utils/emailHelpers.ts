import { env } from '@/env/server.mjs';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const smtpConfig: SMTPTransport.Options = {
  host: env.MAIL_HOST,
  port: env.MAIL_PORT,
  auth: {
    user: env.MAIL_USERNAME,
    pass: env.MAIL_PASSWORD,
  },
};

// Create a Nodemailer transporter using the SMTP configuration
const transporter = nodemailer.createTransport(smtpConfig);

// Function to send the password reset email
export async function sendResetEmail(email: string, resetToken: string) {
  try {
    // Compose the email
    const mailOptions = {
      from: 'Design Palace<karan0805@zohomail.in>',
      to: email,
      subject: 'Password Reset Link',
      html: `<p>Click the following link to reset your password:</p>
             <p><a href="${env.FRONTEND_URL}/auth/reset-password?token=${resetToken}">Reset Password</a></p>`,
    };
    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send the reset email');
  }
}
