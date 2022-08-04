const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LSP9KSAbLbnLrWDjmtXs2cgxjNJnsxQhFZTrloHsxPSSRt3567I8N3Lntp47loN7XAsGgtGqTinYYOEQLv0t1j3007dqWRpg9");


//App Config
const app = express();

//MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());


//API Routes
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
})

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Total value of order is >>>>>>", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    });
})


//Listener
exports.api = functions.https.onRequest(app);




//http://localhost:5001/clone-c1daf/us-central1/api