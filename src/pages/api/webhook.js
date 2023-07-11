
import crypto from 'crypto';

function hash(algorithm, apiKey) {
  const hmac = crypto.createHmac(algorithm, apiKey);
  const hash = hmac.digest('hex');
  return hash;
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const payload = req.body;

    // Verify the signature (if required)
    const signature = payload.signature;
    const apiKey = 'e8d8578359860447414fbcaefec9fd179fb48de5'; // Replace with your actual API key
    const calculatedSignature = hash('sha256', apiKey); // Calculate the expected signature
    const isSignatureValid = signature === calculatedSignature;

    console.log('Body', payload);
    console.log('Email:', payload.email);
    console.log('Signature:', payload.signature);

    if (isSignatureValid) {
      // Process the payload
      // Example: Accessing the email and product name
      const email = payload.email;
      const productName = payload.items[0].product_name;
      console.log('Email:', email);
      console.log('Signature:', signature);

      // Perform your desired actions with the payload data
      // Example: Send an email notification, add to a database, etc.

      console.log('Signature is valid, successful request');
      res.status(200).end(); // Return a 200 status code to acknowledge the webhook request
    } else {
      console.log('Signature is not valid');
      res.status(401).end(); // Return a 401 status code if the signature is not valid
    }
  } else {
    console.log('Unsupported method');
    res.status(405).json({ message: 'Unsupported method' });
  }
}


// FOR TESTING WITH POSTMAN. HERE WE USE JSON.parse, that is not needed when hitting endpoint directly from PayHip.

// import crypto from 'crypto';

// function hash(algorithm, apiKey) {
//   const hmac = crypto.createHmac(algorithm, apiKey);
//   const hash = hmac.digest('hex');
//   return hash;
// }

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const payload = JSON.parse(req.body);

//     // Verify the signature (if required)
//     const signature = payload.signature;
//     const apiKey = 'e8d8578359860447414fbcaefec9fd179fb48de5'; // Replace with your actual API key
//     const calculatedSignature = hash('sha256', apiKey); // Calculate the expected signature
//     const isSignatureValid = signature === calculatedSignature;

//     console.log('Body', payload);
//     console.log('Email:', payload.email);
//     console.log('Signature:', payload.signature);

//     if (isSignatureValid) {
//       // Process the payload
//       // Example: Accessing the email and product name
//       const email = payload.email;
//       const productName = payload.items[0].product_name;
//       console.log('Email:', email);
//       console.log('Signature:', signature);

//       // Perform your desired actions with the payload data
//       // Example: Send an email notification, add to a database, etc.
      
//       console.log('Signature is valid, succesfull request');
//       res.status(200).end(); // Return a 200 status code to acknowledge the webhook request
//     } else {
//       console.log('Signature is not valid');
//       res.status(401).end(); // Return a 401 status code if the signature is not valid
//     }
//   } else {
//     console.log('Unsupported method');
//     res.status(405).json({ message: 'Unsupported method' });
//   }
// }
