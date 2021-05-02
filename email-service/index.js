const sgMail = require("@sendgrid/mail")

function notifyNewOfferToBuyer(buyer, seller, item) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: buyer.email,
        from: {email:"notifications@bonvih.com", name: "Bonvih"},
        replyTo: "customer-service@bonvih.com",
        template_id: "d-fd32e146aa294990b70237b89d3fe7a2",
        dynamic_template_data: {
            buyer,
            seller,
            item
        }
    }
    sgMail.send(msg).then(() => console.log("Email sent")).catch(error => console.log(error))
}

const buyer = {
    name: "Herve",
    email: "toundaherve@gmail.com", 
    budget: "$3000",
}

const item = {
    name: "Toyota Corolla",
    images:[]
}

const seller = {
    name: "Franck",
    email: "franckbethuel@gmail.com",
    city: "Dudley",
    country: "United Kingdom"
}

notifyNewOfferToBuyer(buyer, seller, item)