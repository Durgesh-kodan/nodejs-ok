import { MailtrapClient } from "mailtrap.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { response } from "express";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ emai }];
  try {
    const response = await MailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email verification",
    });
    console.log("Email sent successfully", response);
  } catch (error) {
    console.log(`Error sending email`, error);

    throw new error(`Error sending email verification ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];
  try {
    const response = await MailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "f472daa3-4723-4361-921a-617de3248046",
      template_variables: {
        company_info_name: "Auth_company",
        name: name,
      },
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error(`Error sending welcome Email`, error);
    throw new Error(`Error sending email: ${error}`);
  }
};

const { MailtrapClient } = require("mailtrap");

const TOKEN = "5c00ee837d7950ad3760d4716f65fa53";

const client = new MailtrapClient({
  token: TOKEN,
});

const sender = {
  email: "hello@demomailtrap.com",
  name: "Mailtrap Test",
};
const recipients = [
  {
    email: "cum2hellhehe@gmail.com",
  },
];

client
  .send({
    from: sender,
    to: recipients,
    template_uuid: "f472daa3-4723-4361-921a-617de3248046",
    template_variables: {
      company_info_name: "Test_Company_info_name",
      name: "Test_Name",
    },
  })
  .then(console.log, console.error);

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];
  try {
    const response = await MailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("resetURL", resetURL),
      category: "Password Reset",
    });
  } catch (error) {
    console.log(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email:${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];
  try {
    const response = await MailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "password reset successful",
      html: PASSWORD_RESET_REQUEST_TEMPLATE,
      category: "Password Reset",
    });
  } catch (error) {
    console.log(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email:${error}`);
  }
};
