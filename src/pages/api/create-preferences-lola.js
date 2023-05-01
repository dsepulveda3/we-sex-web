

import mercadopago from "mercadopago";

mercadopago.configure({
  access_token: "APP_USR-3747621044357775-041222-835e45a75ffa66abc6841d32e44bcf1a-76482650",
});


export default async function handler(req, res) {
  const preference = {
    items: [
      {
        title: "B - Guía sexo Anal - WeSex (R: Lola)",
        unit_price: 800,
        quantity: 1,
        currency_id: "ARS",
      },
    ],
    back_urls: {
      success: "https://payhip.com/b/PpF2K",
      failure: "https://we-sex-landing-guia-sexo-anal-git-main-lucasadlerstein.vercel.app/lola",
      pending: "https://we-sex-landing-guia-sexo-anal-git-main-lucasadlerstein.vercel.app/lola",
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
    console.log(error);
    res.status(500).json({ message: "Error creando la preferencia" });
  }
}