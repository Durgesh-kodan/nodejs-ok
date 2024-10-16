import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();
const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_CLIENT;

export const client = new MailtrapClient({
  endpoint: ENDPOINT,
  token: TOKEN,
});

export const sender = {
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
    subject: "You are a loser",
    text: "congrats for losing ",
    category: "Integration Test",
  })
  .then(console.log, console.error);
