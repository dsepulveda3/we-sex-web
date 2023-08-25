import mercadopago from 'mercadopago';

mercadopago.configure({
  access_token: "TEST-3400648491412129-070613-212fa8b290284cff56c2493a9ba7d747-250071994",
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Assuming you have the subscription_plan_id, cardToken, and paymentMethod

    const { token, payment_method_id } = req.body; // Extract the data
    console.log("token");
    console.log(token);
    console.log(payment_method_id);

    // Create the data for the second POST request
    const subscriptionData = {
      // cardToken: token,
      // paymentMethod: "MP",
    };

    try {
      // Send the second POST request to the subscription endpoint
      const subscriptionResponse = await fetch(`http://localhost:8000/v1/Subscription/64e8fb610ab67f331b72c531`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriptionData),
      });

      console.log("sending info");

      const subscriptionResult = await subscriptionResponse.json();

      res.status(subscriptionResponse.status).json(subscriptionResult);
    } catch (error) {
      console.error("Caught error while creating subscription:", error);
      res.status(500).json({ message: 'Error creating subscription' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
