import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "APP_USR-3400648491412129-070613-9a4023c198fc82d82745a51f64db1cec-250071994",
});

//vercel domain we-sex-web udpated to main

export default async function handler(req, res) {
  const { title_mp, unit_price_mp, quantity_mp, 
    currency_id_mp, redirection_succesful_mp,
    redirection_failed_mp} = req.body;

  const preference = {
    items: [
      {
        title: title_mp,
        unit_price: unit_price_mp,
        quantity: quantity_mp,
        currency_id: currency_id_mp,
        // title: "Guía sexo Anal - WeSex",
        // unit_price: 1000,
        // quantity: 1,
        // currency_id: "ARS",
      },
    ],
    back_urls: {
      success: redirection_succesful_mp,
      failure: redirection_failed_mp,
      pending: redirection_failed_mp,
    },
    auto_return: "approved",
  };

  const settings = {
    customization: [
        {
            action: "pay",
            valueProp: "security_details"
        }
    ]
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    // Agregar el init_point a la respuesta
    res.status(200).json({ preferenceId: response.body.id, initPoint: response.body.init_point });
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: "Error creando la preferencia" });
  }
}