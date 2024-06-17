const nodemailer= require("nodemailer");

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ce26a25ee342a5",
          pass: "2db6512064561e"
        }
      });
    const mensaje={
        from: "Esencial Home Store <noreply@esencialhome.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;