const sgMail = require("@sendgrid/mail")

function notifyNewOfferToBuyer() {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: "toundaherve@gmail.com",
        from: {email:"notifications@bonvih.com", name: "Bonvih"},
        replyTo: "customer-service@bonvih.com",
        fromname: "Bonvih",
        subject: "New offer for your Iphone X need",
        text: "Hi Herve, there is a new offer."
    }
    sgMail.send(msg).then(() => console.log("Email sent")).catch(error => console.log(error))
}

notifyNewOfferToBuyer()