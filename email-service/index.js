import sgMail from "@sendgrid/mail"

export async function notifyNewOfferToBuyer(buyer, seller, item) {
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
    
    try {
        await sgMail.send(msg)
        console.log("Email sent")
    } catch (error) {
        console.log(error)
        throw new Error("Failed to send email")
    }
}
