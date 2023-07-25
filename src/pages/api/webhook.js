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
      productName === 'EMA - Guía Zonas Erógenas - Aprende a dar placer' ||
      productName === 
        'EMA - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de zonas erógenas por mail y empezar a disfrutar.' ||
      productName === 'EMB - Guía Zonas Erógenas - Aprende a dar placer' ||
      productName === 
        'EMB - ¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía de zonas erógenas por mail y empezar a disfrutar.' ||
      productName === 'EMC - Guía Zonas Erógenas - Aprende a dar placer' ||
      productName === 
        'EMC - ¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía de zonas erógenas por mail y empezar a disfrutar.' ||
      productName === 'EMD - Guía Zonas Erógenas - Aprende a dar placer' ||
      productName === 
        'EMD - ¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía de zonas erógenas por mail y empezar a disfrutar.'
    ) {
      const listId = 71; // lista Perfit guía Zonas Erógenas
      const contactData = {
        email: email,
      };

      post_perfit(account, listId, contactData, axiosConfig);

    } else if (
      productName === 'Guía Tantra - Orgasmos más profundos' ||
      productName ===
        '¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de tantra por mail y empezar a disfrutar.' ||
      productName === 'F - Guía Tantra - Orgasmos más profundos' ||
      productName === 
        'F - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de tantra por mail y empezar a disfrutar.' ||
      productName === 'EMA - Guía Tantra - Orgasmos más profundos' ||
      productName === 
        'EMA - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de tantra por mail y empezar a disfrutar.' ||
      productName === 'EMB - Guía Tantra - Orgasmos más profundos' ||
      productName === 
        'EMB - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de tantra por mail y empezar a disfrutar.' ||
      productName === 'EMC - Guía Tantra - Orgasmos más profundos' ||
      productName === 
        'EMC - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de tantra por mail y empezar a disfrutar.'
    ) {
      const listId = 72; // lista Perfit guía Tantra
      const contactData = {
        email: email,
      };

      post_perfit(account, listId, contactData, axiosConfig);
    

  } else if (
    productName === 'Guía de Sexo Anal - De cero a placer extremo' ||
    productName ===
      '¡GRACIAS! Presioná el boton "Descargar ahora" para recibir la guía por mail y empezar a disfrutar.' ||
    productName === 'B - Guía de Sexo Anal - De cero a placer extremo' ||
    productName === 
      'B - ¡GRACIAS! Presioná el boton "Descargar ahora" para recibir la guía por mail y empezar a disfrutar.' ||
    productName === 'C - Guía de Sexo Anal - De cero a placer extremo' ||
    productName === 
      'C - ¡GRACIAS! Presioná el boton "Descargar ahora" para recibir la guía por mail y empezar a disfrutar.' ||
    productName === 'L - Guía de Sexo Anal - De cero a placer extremo' ||
    productName === 
      'L - ¡GRACIAS! Presioná el boton "Descargar ahora" para recibir la guía por mail y empezar a disfrutar.'
  ) {
    const listId = 73; // lista Perfit guía Sexo Anal
    const contactData = {
      email: email,
    };

    post_perfit(account, listId, contactData, axiosConfig);

  } else if (
    productName === 'MasterSex class - Técnicas para relajarte y sentir más en el sexo' ||
    productName ===
      '¡GRACIAS! Presioná el botón "Descargar ahora" para obtener la masterclass' ||
    productName === 'B - MasterSex class - Técnicas para relajarte y sentir más en el sexo' ||
    productName === 
      'B - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la información sobre la masterclass.' 
  ) {
    const listId = 74; // lista Perfit master barbi
    const contactData = {
      email: email,
    };

    post_perfit(account, listId, contactData, axiosConfig);
  

}else if (
  productName === 'Guía de Sexo Anal + Tantra' ||
  productName ===
    '¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'F - Guía de Sexo Anal + Tantra' ||
  productName === 
    'F - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMA - Guía de Sexo Anal + Tantra' ||
  productName === 
    'EMA - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMB - Guía de Sexo Anal + Tantra' ||
  productName === 
    'EMB - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMC - Guía de Sexo Anal + Tantra' ||
  productName === 
    'EMC - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de sexo anal + tantra por mail y empezar a disfrutar.'
) {
  const listId = 75; // lista Perfit guía Tantra + Anal
  const contactData = {
    email: email,
  };

  post_perfit(account, listId, contactData, axiosConfig);


} else if (
  productName === 'Guía de Zonas Erógenas + Sexo Anal + Tantra' ||
  productName ===
    '¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de zonas erógenas + sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'B - Guía de Zonas Erógenas + Sexo Anal + Tantra' ||
  productName === 
    'B - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de zonas erógenas + sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMA - Guía de Zonas Erógenas + Sexo Anal + Tantra' ||
  productName === 
    'EMA - ¡GRACIAS! PresionA el botón "Descargar ahora" para recibir la guía de zonas erógenas + sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMB - Guía de Zonas Erógenas + Sexo Anal + Tantra' ||
  productName === 
    'EMB - ¡GRACIAS! PresionA el botón "Descargar ahora" para recibir la guía de zonas erógenas + sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMC - Guía de Zonas Erógenas + Sexo Anal + Tantra' ||
  productName === 
    'EMC - ¡GRACIAS! PresionA el botón "Descargar ahora" para recibir la guía de zonas erógenas + sexo anal + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMD - Guía de Zonas Erógenas + Sexo Anal + Tantra' ||
  productName === 
    'EMD - ¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía de zonas erógenas + sexo anal + tantra por mail y empezar a disfrutar.'
) {
  const listId = 76; // lista Perfit pack 2x3 zonas erógenas + tantra + anal
  const contactData = {
    email: email,
  };

  post_perfit(account, listId, contactData, axiosConfig);


} else if (
  productName === 'Guía de Zonas Erógenas + Tantra' ||
  productName ===
    '¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de zonas erógenas + tantra por mail y empezar a disfrutar.' ||
  productName === 'B - Guía de Zonas Erógenas + Tantra' ||
  productName === 
    'B - ¡GRACIAS! Presioná el botón "Descargar ahora" para recibir la guía de zonas erógenas + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMA - Guía de Zonas Erógenas + Tantra' ||
  productName === 
    'EMA - ¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía de zonas erógenas + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMB - Guía de Zonas Erógenas + Tantra' ||
  productName === 
    'EMB - ¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía de zonas erógenas + tantra por mail y empezar a disfrutar.' ||
  productName === 'EMC - Guía de Zonas Erógenas + Tantra' ||
  productName === 
    'EMC - ¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía de zonas erógenas + tantra por mail y empezar a disfrutar.'
) {
  const listId = 77; // lista Perfit pack 2 zonas erógenas + tantra
  const contactData = {
    email: email,
  };

  post_perfit(account, listId, contactData, axiosConfig);


} else if (
  productName === 'Guía Zonas Erógenas + Masterclass Barbi' ||
  productName ===
    '¡GRACIAS! Presioná el botón "Descargar ahora" para obtener la guia de zonas erógenas + la masterclass de Barbi' ||
  productName === 'B - Guía Zonas Erógenas + Masterclass Barbi' ||
  productName === 
    'B - ¡GRACIAS! Presioná el botón "Descargar ahora" para obtener la guia de zonas erógenas + la masterclass de Barbi'
) {
  const listId = 78; // lista Perfit pack 3 masterclass + guía zonas erógenas
  const contactData = {
    email: email,
  };

  post_perfit(account, listId, contactData, axiosConfig);


} else if (
  productName === 'Guía para salir de la rutina - Reavivar la llama' ||
  productName ===
    '¡GRACIAS! Presiona el botón "Descargar ahora" para recibir la guía para salir de la rutina por mail y empezar a disfrutar.'
) {
  const listId = 79; // lista Perfit guía para salir de la rutina con tu pareja
  const contactData = {
    email: email,
  };

  post_perfit(account, listId, contactData, axiosConfig);


} else if (
  productName === 'Guía salir de la rutina + Sexo Anal + Tantra' ||
  productName ===
    '¡GRACIAS! PresionA el botón "Descargar ahora" para recibir la guía salir de la rutina + Tantra + Anal por mail y empezar a disfrutar.'
) {
  const listId = 80; // lista Perfit guía para salir de la rutina + Sexo Anal + Tantra
  const contactData = {
    email: email,
  };

  post_perfit(account, listId, contactData, axiosConfig);


} else if (
  productName === 'Guía para salir de la rutina + Zonas Erógenas' ||
  productName ===
    '¡GRACIAS! PresionA el botón "Descargar ahora" para recibir la guía salir de la rutina + zonas erógenas por mail y empezar a disfrutar.'
) {
  const listId = 81; // lista Perfit guía para salir de la rutina + Zonas Erógenas
  const contactData = {
    email: email,
  };

  post_perfit(account, listId, contactData, axiosConfig);


} else if (
  productName === 'Guía salir de la rutina + Zonas Erógenas + Sexo Anal + Tantra' ||
  productName ===
    '¡GRACIAS! PresionA el botón "Descargar ahora" para recibir la guía salir de la rutina con tu pareja + zonas erógenas + sexo anal + tantra por mail y empezar a disfrutar.'
) {
  const listId = 82; // lista Perfit guía para salir de la rutina + Zonas Erógenas + Sexo Anal + Tantra
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
