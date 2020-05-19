const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log("The server started on port 3000 !!!!!!");
});

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Serwer działa :D</h1>"
  );
});

app.post("/sendmail", (req, res) => {
  console.log("request came");
 
  let user= req.body;
  sendMail(user, info => {
    console.log(`E-mail został wysłany ${info.messageId}`);
    res.send(info);
    
  });
});


async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Wypozyczalnia Kontakt"<testowek12345@gmail.com', // sender address
    to: user.email, // list of receivers
    subject: "Potwierdzenie wysłania e-maila", // Subject line
    html: `
    <h1>Hej! ${user.imie} ${user.nazwisko}</h1><br>
    <h4>Dziękuje za kontakt!</h4>
    <h5>Wiadomość wygenerowana automatycznie</h5>`
  };


  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

// main().catch(console.error);
