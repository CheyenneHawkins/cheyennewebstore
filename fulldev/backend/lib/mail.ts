import { createTransport, getTestMessageUrl } from 'nodemailer';

// const nodemailer = require('nodemailer');

const transport = createTransport({
  host: `${process.env.MAIL_HOST}`,
  port: `${process.env.MAIL_PORT}`,
  auth: {
    user: `${process.env.MAIL_USER}`,
    pass: `${process.env.MAIL_PASS}`,
  },
});

// const transport = createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   auth: {
//     user: process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

function makeEmail(text: string) {
  return `
        <div style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px;
        ">
        <h2>Hey!</h2>
        <p>${text}</p>
        <p>Love, Cheyenne</p>
        </div>
    `;
}

interface MailResponse {
  message: string;
}

export async function sendPasswordResetEmail(
  resetToken: string,
  to: string
): Promise<void> {
  // email user token
  const info = (await transport.sendMail({
    to,
    from: 'cheyenne.hawkins@gmail.com',
    subject: 'Your password reset token',
    html: makeEmail(`YOOOOOOO:
        <a href="${process.env.FRONTENED_URL}/reset?token=${resetToken}">
        Click here to reset</a>
        `),
  })) as MailResponse;
  console.log(info);
}
