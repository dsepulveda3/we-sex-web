import crypto from 'crypto';
import axios from 'axios';

function post_perfit(account, listId, contactData, axiosConfig) {
  axios
          .post(
            `https://api.myperfit.com/v2/${account}/lists/${listId}/contacts`,
            contactData,
            axiosConfig
          )
          .then((response) => {
            const contact = response.data.data;
            console.log('Contacto creado/actualizado', contact);
          })
          .catch((error) => {
            console.error('Error creating/updating contact:', error);
          });
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const payload = req.body;
    
    // const payload = JSON.parse(req.body);

    // Verify the signature (if required)
    // const apiKeyPayHip = 'e8d8578359860447414fbcaefec9fd179fb48de5'; // Replace with your actual API key
    
    

    const account = 'wesex';
    const apiKeyPerfit = 'wesex-UnDzvCG44TVzuajb7g8bbybtyDuiKIRw';
    const axiosConfig = { headers: { Authorization: `Bearer ${apiKeyPerfit}` } };

    console.log('Body', payload);
    console.log('Email:', payload.email);
    console.log('Signature:', payload.signature);

    // Process the payload
    // Example: Accessing the email and product name
    const email = payload.email;
    const productName = payload.items[0].product_name;

    // Perform your desired actions with the payload data
    // Example: Send an email notification, add to a database, etc.
    if (
      productName === 'Guía Zonas Erógenas - Aprende a dar placer' ||
      productName ===
        '¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de zonas erógenas por mail y empezar a disfrutar.' ||
      productName === 'Another Product Name' ||
      productName === 'Another Product Name'
    ) {
      const listId = 71; // lista Perfit Zonas Erógenas
      const contactData = {
        email: email,
      };

      post_perfit(account, listId, contactData, axiosConfig);
    } else if (productName === 'Guía Tantra - Orgasmos más profundos') {
      const listId = 72; // lista Perfit Zonas Erógenas
      const contactData = {
        email: email,
      };

      post_perfit(account, listId, contactData, axiosConfig);
    }

    console.log('Successful request');
    res.status(200).end(); // Return a 200 status code to acknowledge the webhook request
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
