import dotenv from 'dotenv';
import ejs from 'ejs';
import nodemailer from 'nodemailer';
import path from 'path';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: Number(process.env.SMTP_PORT) === 465,
  service: process.env.SMTP_SERVICE,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const renderEmailTemplate = async (
  templateName: string,
  data: Record<string, unknown>
): Promise<string> => {
  const templatePath = path.join(
    process.cwd(),
    'apps',
    'auth-service',
    'src',
    'utils',
    'email-templates',
    `${templateName}.ejs`
  );

  return ejs.renderFile(templatePath, data);
};

export const sendEmail = async (
  to: string,
  subject: string,
  templateName: string,
  data: Record<string, unknown>
): Promise<boolean> => {
  try {
    const html = await renderEmailTemplate(templateName, data);

    console.log({ html });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html,
    });

    return true;
  } catch (error) {
    console.log('Error sending email', error);

    return false;
  }
};
