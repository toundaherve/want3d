import needModel from "../../db/Need"
import { notifyNewOfferToBuyer } from "../../email-service"
import getCurrencySymbol from "../../utils/getCurrencySymbol"

async function handleNotification(req, res) {
    const { postID, sellerName, sellerEmail, sellerCountry, sellerCity, itemImages  } = req.body

    try {
        const post = await needModel.findOne(postID)

        const buyer = {
            name: post.buyerName,
            email: post.buyerEmail,
            budget: `${getCurrencySymbol(post.buyerCurrency)}${post.buyerBudget}`,
        }

        const seller = {
            name: sellerName,
            email: sellerEmail,
            country: sellerCountry,
            city: sellerCity,
        }

        const item = {
            name: post.itemName,
            images: itemImages
        }

        try {
            await notifyNewOfferToBuyer(buyer, seller, item)

            res.writeHead(200)
            res.end()
        } catch {
            console.log("Notification API: Failed to notify buyer : " + error.message)
            res.writeHead(500)
            res.end("Internal server error")
        }

    } catch (error) {
        console.log("Notification API: Failed to get post from DB : " + error.message)
        res.writeHead(500)
        res.end("Internal server error")
    }
}

export default function handler(req, res) {
    if (req.method === "POST") {
      handleNotification(req, res);
      return;
    }
  
    res.writeHead(405)
    res.end("Method not Allowed")
  }