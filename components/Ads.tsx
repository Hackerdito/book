import React, { useState } from 'react';
import { X, Palette, Image as ImageIcon, ArrowRight, Book, PenTool, FileText, Share2, Eye, Download, Code, Mail, Monitor, Smartphone, Tablet, Check, Copy } from 'lucide-react';

const AD_IMAGES = [
  { 
    id: 1, 
    title: "Universidad Uk – Black Friday (50% OFF)", 
    category: "Branding", 
    size: "large", 
    url: "https://fileuk.netlify.app/CV/img_2.webp",
    description: `Esta pieza está diseñada para detener el scroll en menos de 2 segundos.
El uso de neón + contraste alto (rosa/azul/amarillo) activa el sistema de recompensa visual del usuario, generando urgencia inmediata.

💡 Impacto que logra:
• Comunica oferta agresiva sin leer todo
• Refuerza percepción de oportunidad limitada (FOMO)
• Posiciona a la marca como moderna, digital y accesible

🎯 Valor de marca:
Hace que Universidad Uk se perciba como:
👉 Actual
👉 Competitiva
👉 Con beneficios reales (no solo branding)`
  },
  { 
    id: 2, 
    title: "Universidad Uk – Cyber Monday (30% + MSI)", 
    category: "Ads", 
    size: "small", 
    url: "https://fileuk.netlify.app/CV/img_1.webp",
    description: `Aquí el enfoque cambia de urgencia → a decisión inteligente.

💡 Impacto que logra:
• Conecta emocionalmente con el concepto: "invertir en tu futuro"
• Reduce objeción de precio con MSI (facilidad de pago)
• Humaniza la experiencia con un estudiante real

🎯 Valor de marca:
👉 Educación alcanzable
👉 Aspiracional pero realista
👉 Marca que entiende al estudiante moderno

⚠️ Este tipo de pieza convierte más en remarketing.`
  },
  { 
    id: 3, 
    title: "Taquería La Chilaca", 
    category: "Logo Design", 
    size: "small", 
    url: "https://fileuk.netlify.app/CV/img_3.webp",
    description: `Este diseño juega directo a dopamina + antojo inmediato.

💡 Impacto que logra:
• Uso de comida + rostro humano feliz = trigger emocional fuerte
• QR = acción directa sin fricción
• Apps (Uber, Rappi) = validación social + facilidad

🎯 Valor de marca:
👉 Cercanía
👉 Experiencia auténtica
👉 Consumo inmediato

🔥 Este tipo de diseño es perfecto para ventas impulsivas.`
  },
  { 
    id: 4, 
    title: "Party Land – Cupón $1,000", 
    category: "Estrategia", 
    size: "medium", 
    url: "https://fileuk.netlify.app/CV/img_4-1.webp",
    description: `Esto es puro performance marketing visual.

💡 Impacto que logra:
• El número grande ($1,000) domina la atención (ancla mental)
• Colores vibrantes = energía + celebración
• QR = conversión directa

🎯 Valor de marca:
👉 Diversión
👉 Accesibilidad
👉 Beneficio claro y tangible

💥 Este tipo de creativo es ideal para campañas de tráfico frío.`
  },
  { 
    id: 5, 
    title: "Party Land – San Valentín", 
    category: "Social Media", 
    size: "medium", 
    url: "https://fileuk.netlify.app/CV/img_5.webp",
    description: `Aquí entramos en marketing emocional profundo.

💡 Impacto que logra:
• Uso de corazones + tonos rojos = conexión emocional inmediata
• Precio visible = claridad en oferta
• Escena real = credibilidad

🎯 Valor de marca:
👉 Experiencias memorables
👉 Personalización
👉 Momentos especiales

🔥 Perfecto para campañas estacionales de alta conversión.`
  },
  { 
    id: 6, 
    title: "REDOT – Catálogo", 
    category: "Promociones", 
    size: "medium", 
    url: "https://fileuk.netlify.app/CV/img_6.webp",
    description: `Este es branding puro: autoridad + posicionamiento premium.

💡 Impacto que logra:
• Diseño minimalista oscuro = exclusividad
• Tipografía sólida = confianza
• Poco texto = percepción de alto valor

🎯 Valor de marca:
👉 Profesional
👉 Especializado
👉 De alto nivel técnico

💥 No busca clics inmediatos, busca respeto de marca.`
  },
];

const CATALOGS = [
  {
    id: 'redot',
    title: "REDOT",
    year: "2024",
    description: "REDOT es una empresa especializada en el diseño, fabricación y comercialización de equipos tácticos de seguridad.",
    image: "https://fileuk.netlify.app/CV/img_6.webp",
    imageFull: "https://fileuk.netlify.app/CV/img_6.webp",
    pdfUrl: "https://drive.google.com/file/d/1kExFpUUkVY4JCKFYVrH5dCoLbnb2lv77/preview",
    color: "from-red-900/40 to-red-950/60"
  },
  {
    id: 'escualo',
    title: "Escualo",
    year: "2024",
    description: "En Escualo, empresa de seguridad, diseñé una identidad visual limpia y minimalista. Implementé fuentes finas y seleccioné fotografías representativas para reforzar la imagen de la marca. El diseño final capturó la esencia de la empresa, destacando su profesionalismo y modernidad.",
    image: "https://fileuk.netlify.app/CV/escualo.webp",
    imageFull: "https://fileuk.netlify.app/CV/escualo.webp",
    pdfUrl: "https://drive.google.com/file/d/1spMLaw-SAG-ekgMgTFo_bc-y4dJjM4v_/preview",
    color: "from-blue-900/40 to-blue-950/60"
  },
  {
    id: 'evum',
    title: "EVUM",
    year: "2024",
    description: "Este diseño fue creado para una tienda online, destacando un enfoque minimalista que resalta la frescura de la marca. Los colores elegidos no solo aportan vitalidad, sino que también reflejan fielmente la identidad y los valores de la empresa.",
    image: "https://fileuk.netlify.app/evum-preview.png",
    imageFull: "https://fileuk.netlify.app/CV/Evum.jpg",
    pdfUrl: "https://drive.google.com/file/d/1fhN03klOen-1EhKVxJitqpWOfEaiR8-R/preview",
    color: "from-emerald-900/40 to-emerald-950/60"
  },
  {
    id: 'uk-edu',
    title: "Universidad Uk",
    year: "2023",
    description: "Catálogo interactivo diseñado para la captación de leads universitarios. Estructura modular que facilita la lectura de planes de estudio y beneficios institucionales.",
    image: "https://fileuk.netlify.app/CV/uk.png",
    imageFull: "https://fileuk.netlify.app/CV/uk.png",
    pdfUrl: "https://drive.google.com/file/d/1iG0tkbNQbrDFN-t8y4iBiAj4iddaghVD/preview",
    color: "from-indigo-900/40 to-indigo-950/60"
  }
];

const EMAIL_DESIGNS = [
  {
    id: 'email-1',
    title: 'Newsletter GYM',
    category: 'Email Design',
    url: 'http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/9b00f226-5778-43d7-b7de-9187ca1b9c5a/529x799.png',
    description: 'Diseño de newsletter para gimnasio promocionando clases en casa, rutinas de equilibrio, fuerza total y entrenamiento funcional.',
    code: `<!DOCTYPE html>
<html>
<head>
<style>

@media only screen and (max-width:600px){

  .container{width:100%!important;max-width:100%!important;}

  .mobile-padding{padding-left:22px!important;padding-right:22px!important;}

  .nav-link{display:inline-block!important;margin:6px 8px!important;}

  .hero-img{width:100%!important;max-width:100%!important;height:auto!important;}

  .intro-title{font-size:17px!important;letter-spacing:4px!important;}

  .card-td{display:block!important;width:100%!important;height:auto!important;padding:0!important;}

  .card-text{display:block!important;width:100%!important;height:auto!important;padding:25px!important;text-align:center!important;box-sizing:border-box!important;}

  .card-img{width:100%!important;height:auto!important;max-width:100%!important;}

  .promo-text{font-size:14px!important;line-height:22px!important;letter-spacing:2px!important;}

}

</style>

</head>

<body style="margin:0; padding:0; background:#ffffff;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; margin:0; padding:0;">
  <tr>
    <td align="center">

      <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:#ffffff;">

        <!-- NAV -->
        <tr>
          <td align="center" style="padding:25px 10px 20px;">
            <a href="#" style="font-size:10px; color:#777; text-decoration:none; margin:0 18px;">INICIO</a>
            <a href="#" style="font-size:10px; color:#777; text-decoration:none; margin:0 18px;">CLASES</a>
            <a href="#" style="font-size:10px; color:#777; text-decoration:none; margin:0 18px;">PROGRAMAS</a>
            <a href="#" style="font-size:10px; color:#777; text-decoration:none; margin:0 18px;">CONTACTO</a>
          </td>
        </tr>

        <!-- HERO -->
        <tr>
          <td align="center" class="mobile-padding" style="padding:0 35px;">
            <img class="hero-img" src="http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/a37ca53d-897b-4f93-b3ff-b05d4f04fb44/1024x559.jpeg" width="530" alt="Entrenamiento" style="display:block; width:100%; max-width:530px; height:auto; border:0;">
          </td>
        </tr>

        <!-- INTRO -->
        <tr>
          <td align="center" class="mobile-padding" style="padding:35px 55px 25px;">
            <h2 class="intro-title" style="margin:0 0 15px; font-size:18px; letter-spacing:6px; color:#111; font-family:Arial, Helvetica, sans-serif;">
              EN CASA
            </h2>
            <p style="margin:0; font-size:11px; line-height:18px; color:#999; font-family:Arial, Helvetica, sans-serif;">
              Entrena desde la comodidad de tu hogar con nuestras rutinas diseñadas para mejorar tu condición física, equilibrio y bienestar general.
            </p>
          </td>
        </tr>

        <!-- CARD 1 -->

        <tr>

          <td class="mobile-padding" style="padding:0 35px 20px;">

            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f3f3; width:100%;">

              <tr>

                <!-- IMAGEN -->

                <td class="card-td" width="50%" height="210" valign="middle" align="center" style="padding:0; vertical-align:middle;">

                  <img class="card-img" src="http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/fa7c00be-e5cd-4492-ba04-a66d34e6ffdb/1024x559.jpeg" width="265" height="145" alt="Equilibrio Corporal" style="display:block; width:265px; height:145px; object-fit:cover; border:0;">

                </td>

                <!-- TEXTO -->

                <td class="card-text" width="50%" height="210" valign="middle" align="left" style="padding:0 35px; vertical-align:middle; font-family:Arial, Helvetica, sans-serif;">

                  <h3 style="margin:0 0 12px; font-size:22px; line-height:25px; letter-spacing:3px; color:#111;">

                    EQUILIBRIO<br>CORPORAL

                  </h3>

                  <p style="margin:0 0 18px; font-size:12px; line-height:18px; color:#888;">

                    Mejora tu equilibrio, flexibilidad y concentración con ejercicios guiados.

                  </p>

                  <a href="#" style="background:#000; color:#fff; text-decoration:none; font-size:10px; padding:11px 23px; display:inline-block;">

                    VER MÁS

                  </a>

                </td>

              </tr>

            </table>

          </td>

        </tr>

        <!-- CARD 2 -->
        <tr>
  <td class="mobile-padding" style="padding:0 35px 20px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f3f3; width:100%;">
      <tr>

        <!-- TEXTO -->
        <td class="card-text" width="50%" height="210" valign="middle" align="left" style="padding:0 35px; vertical-align:middle; font-family:Arial, Helvetica, sans-serif;">
          <h3 style="margin:0 0 12px; font-size:22px; line-height:25px; letter-spacing:3px; color:#111;">
            FUERZA TOTAL
          </h3>

          <p style="margin:0 0 18px; font-size:12px; line-height:18px; color:#888;">
            Rutinas enfocadas en fortalecer todo tu cuerpo y mejorar tu resistencia.
          </p>

          <a href="#" style="background:#000; color:#fff; text-decoration:none; font-size:10px; padding:11px 23px; display:inline-block;">
            VER MÁS
          </a>
        </td>

        <!-- IMAGEN -->
        <td class="card-td" width="50%" height="210" valign="middle" align="center" style="padding:0; vertical-align:middle;">
          <img class="card-img" src="http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/304303bb-cde4-44b1-9259-9af68a5c40a7/1024x559.jpeg" width="265" height="145" alt="Fuerza Total" style="display:block; width:265px; height:145px; object-fit:cover; border:0;">
        </td>

      </tr>
    </table>
  </td>
</tr>

        <!-- CARD 3 -->
        <tr>
  <td class="mobile-padding" style="padding:0 35px 25px;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f3f3f3; width:100%;">
      <tr>

        <!-- IMAGEN -->
        <td class="card-td" width="50%" height="210" valign="middle" align="center" style="padding:0; vertical-align:middle;">
          <img class="card-img" src="http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/26701b5a-4a85-4532-aeb8-e26a2a30ee9e/1024x559.jpeg" width="265" height="145" alt="Entrenamiento Funcional" style="display:block; width:265px; height:145px; object-fit:cover; border:0;">
        </td>

        <!-- TEXTO -->
        <td class="card-text" width="50%" height="210" valign="middle" align="left" style="padding:0 35px; vertical-align:middle; font-family:Arial, Helvetica, sans-serif;">
          <h3 style="margin:0 0 12px; font-size:22px; line-height:25px; letter-spacing:3px; color:#111;">
            ENTRENAMIENTO<br>FUNCIONAL
          </h3>

          <p style="margin:0 0 18px; font-size:12px; line-height:18px; color:#888;">
            Mejora tu condición física con ejercicios dinámicos y de alta intensidad.
          </p>

          <a href="#" style="background:#000; color:#fff; text-decoration:none; font-size:10px; padding:11px 23px; display:inline-block;">
            VER MÁS
          </a>
        </td>

      </tr>
    </table>
  </td>
</tr>

        <!-- PROMO -->
        <tr>
          <td align="center" class="mobile-padding" style="padding:0 35px 30px;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f5a400;">
              <tr>
                <td align="center" style="padding:18px;">
                  <p class="promo-text" style="margin:0; color:#ffffff; font-size:16px; letter-spacing:7px; font-weight:bold; font-family:Arial, Helvetica, sans-serif;">
                    50% DE DESCUENTO HASTA NOVIEMBRE
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- SOCIAL -->
        <tr>
          <td align="center" style="padding:0 0 35px;">
            <a href="#" style="font-size:13px; color:#111; text-decoration:none; margin:0 8px;">f</a>
            <a href="#" style="font-size:13px; color:#111; text-decoration:none; margin:0 8px;">x</a>
            <a href="#" style="font-size:13px; color:#111; text-decoration:none; margin:0 8px;">◎</a>
          </td>
        </tr>

      </table>

    </td>
  </tr>
</table>
</body>
</html>`
  },
  {
    id: 'email-2',
    title: 'Newsletter Bar',
    category: 'Email Design',
    url: 'http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/b637a925-0787-4fd5-9841-a1850e551b1b/502x848.png',
    description: 'Diseño para bar promocionando música en vivo, mixología y reservas de mesas VIP con una estructura oscura y acentos cálidos.',
    code: `<!DOCTYPE html>
<html>
<head>
<style>

@media only screen and (max-width:600px){

  .container{width:100%!important;max-width:100%!important;}

  .mobile-padding{padding-left:20px!important;padding-right:20px!important;}

  .hero-col{display:block!important;width:100%!important;text-align:center!important;padding:30px 20px!important;}

  .hero-hide{display:none!important;}

  .experience-col{display:block!important;width:100%!important;padding:20px!important;box-sizing:border-box!important;text-align:center!important;}

  .experience-img{width:100%!important;height:auto!important;max-width:100%!important;}

  .packages-col{display:block!important;width:100%!important;margin-bottom:20px!important;}

}

</style>

</head>

<body style="margin:0; padding:0; background:#ffffff; font-family:Arial, Helvetica, sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" border="0">

<tr>

<td align="center">

<table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:#ffffff;">

<!-- HERO -->

<tr>

<td background="http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/78c72a3a-a63d-431d-9070-ceef0221d33d/1024x559.jpeg" bgcolor="#111111" height="320" valign="middle" style="background-size:cover; background-position:center;">

<table width="100%">

<tr>

<td class="hero-hide" width="48%"></td>

<td class="hero-col" width="52%" style="padding:40px 35px 40px 10px;">

<h1 style="margin:0 0 12px; color:#ffffff; font-size:28px; line-height:32px;">

TU NOCHE<br>EMPIEZA AQUÍ

</h1>

<p style="margin:0 0 22px; color:#eeeeee; font-size:13px; line-height:20px;">

Disfruta cocteles exclusivos, música en vivo y un ambiente perfecto para compartir.

</p>

<a href="#" style="background:#c79a3b; color:#ffffff; text-decoration:none; font-size:12px; padding:12px 24px; display:inline-block;">

RESERVAR MESA

</a>

</td>

</tr>

</table>

</td>

</tr>

<!-- BENEFICIOS -->

<tr>

<td style="background:#c79a3b; padding:28px 20px;" class="mobile-padding">

<table width="100%">

<tr>

<td align="center" class="packages-col" style="color:#fff;">

🍸<br><strong>Coctelería</strong>

</td>

<td align="center" class="packages-col" style="color:#fff;">

🎶<br><strong>Música</strong>

</td>

<td align="center" class="packages-col" style="color:#fff;">

🍔<br><strong>Snacks</strong>

</td>

</tr>

</table>

</td>

</tr>

<!-- EXPERIENCIA -->

<tr>

<td align="center" class="mobile-padding" style="padding:35px 35px;">

<table width="100%">

<tr>

<td class="experience-col" width="50%" align="left">

<h2 style="margin:0 0 12px;">Vive la experiencia</h2>

<p style="font-size:12px; color:#777;">

Ambiente premium, música y bebidas diseñadas para una noche inolvidable.

</p>

</td>

<td class="experience-col" width="50%" align="center">

<img class="experience-img" src="http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/e3f764ed-0778-4b19-b21e-73882a482aa3/1024x559.jpeg" width="260">

</td>

</tr>

</table>

</td>

</tr>

<!-- PAQUETES -->

<tr>

<td style="background:#f2f2f2; padding:30px 20px;" class="mobile-padding">

<table width="100%">

<tr>

<td class="packages-col" width="33%" align="center" style="background:#fff; padding:15px;">

<h3>CLÁSICO</h3>

<p>$199</p>

</td>

<td class="packages-col" width="33%" align="center" style="background:#fff; padding:15px; border:2px solid #c79a3b;">

<h3>PREMIUM</h3>

<p>$499</p>

</td>

<td class="packages-col" width="33%" align="center" style="background:#fff; padding:15px;">

<h3>VIP</h3>

<p>$999</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</td>

</tr>

</table>
</body>
</html>`
  },
  {
    id: 'email-3',
    title: 'Newsletter Sport Store',
    category: 'Email Design',
    url: 'http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/62831414-ad89-4ed5-886e-54dee5029cbd/593x769.png',
    description: 'Diseño para e-commerce deportivo destacando productos y ofertas con estilo urbano, fondo oscuro y detalles de alto contraste.',
    code: `<!DOCTYPE html>
<html>
<head>
<style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; max-width: 100% !important; }
      .mobile-padding { padding-left: 22px !important; padding-right: 22px !important; }
      .hero-title { font-size: 28px !important; line-height: 34px !important; }
      .nav-button { display: inline-block !important; margin: 5px 3px !important; padding: 8px 14px !important; font-size: 10px !important; }
      .product-box { width: 100% !important; max-width: 100% !important; }
      .product-img { width: 100% !important; max-width: 300px !important; height: auto !important; }
      .offer-text { font-size: 15px !important; line-height: 22px !important; letter-spacing: 1px !important; }
    }
</style>
</head>
<body style="margin:0; padding:0; background:#ffffff; font-family:Arial, Helvetica, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ffffff; margin:0; padding:0;">
    <tr>
      <td align="center">
        <table class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px; max-width:600px; background:#101820;">
          <!-- HEADER -->
          <tr>
            <td align="center" style="padding:28px 20px 15px;">
              <h1 style="margin:0; color:#ffffff; font-size:18px; letter-spacing:3px;">
                SPORT STORE
              </h1>
            </td>
          </tr>
          <!-- NAV -->
          <tr>
            <td align="center" class="mobile-padding" style="padding:0 20px 25px;">
              <a href="#" class="nav-button" style="background:#b6ff00; color:#101820; text-decoration:none; font-size:11px; font-weight:bold; padding:8px 18px; border-radius:20px; margin:0 5px; display:inline-block;">PLAYERAS</a>
              <a href="#" class="nav-button" style="background:#b6ff00; color:#101820; text-decoration:none; font-size:11px; font-weight:bold; padding:8px 18px; border-radius:20px; margin:0 5px; display:inline-block;">TENIS</a>
              <a href="#" class="nav-button" style="background:#b6ff00; color:#101820; text-decoration:none; font-size:11px; font-weight:bold; padding:8px 18px; border-radius:20px; margin:0 5px; display:inline-block;">GYM</a>
              <a href="#" class="nav-button" style="background:#b6ff00; color:#101820; text-decoration:none; font-size:11px; font-weight:bold; padding:8px 18px; border-radius:20px; margin:0 5px; display:inline-block;">OFERTAS</a>
            </td>
          </tr>
          <!-- HERO TITLE -->
          <tr>
            <td align="center" class="mobile-padding" style="padding:0 45px 20px;">
              <h2 class="hero-title" style="margin:0; color:#ffffff; font-size:34px; line-height:40px; font-weight:bold;">
                Tu outfit favorito<br>ya está en stock
              </h2>
              <p style="margin:15px 0 0; color:#b8c0c8; font-size:13px; line-height:20px;">
                Playeras deportivas, sneakers y accesorios para entrenar con estilo.
              </p>
            </td>
          </tr>
          <!-- PRODUCT -->
          <tr>
            <td align="center" class="mobile-padding" style="padding:10px 20px 25px;">
              <table class="product-box" width="440" cellpadding="0" cellspacing="0" border="0" style="width:440px; max-width:440px; background:#17222c; border:1px solid #25313d;">
                <tr>
                  <td align="center" style="padding:35px 20px;">
                    <img class="product-img" src="http://cdn.mcauto-images-production.sendgrid.net/6ad2217a53ba4b09/6396aa71-fce7-45e2-8156-724c4de913e2/1024x559.jpeg" width="300" alt="Playera deportiva" style="display:block; width:100%; max-width:300px; height:auto; border:0;">
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- PRODUCT INFO -->
          <tr>
            <td align="center" class="mobile-padding" style="padding:0 45px 35px;">
              <p style="margin:0 0 8px; color:#b6ff00; font-size:16px; font-weight:bold;">
                Playera Performance Pro
              </p>
              <p style="margin:0 0 22px; color:#ffffff; font-size:13px; line-height:20px;">
                Tela ligera, corte cómodo y diseño urbano para llevar tu entrenamiento al siguiente nivel.
              </p>
              <a href="#" style="background:#b6ff00; color:#101820; text-decoration:none; font-size:13px; font-weight:bold; padding:13px 32px; border-radius:25px; display:inline-block;">
                Comprar ahora
              </a>
            </td>
          </tr>
          <!-- OFFER -->
          <tr>
            <td align="center" class="mobile-padding" style="padding:0 35px 35px;">
              <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#ff671b; border-radius:25px;!important;">
                <tr>
                  <td align="center" style="padding:10px ;">
                    <p class="offer-text" style="margin:0; color:#ffffff; font-size:18px; font-weight:bold; letter-spacing:2px;">
                      25% OFF EN NUEVA COLECCIÓN
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
  }
];

const EmailLivePreview = ({ email, isDark }: { email: any, isDark: boolean }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getWidth = () => {
    switch (device) {
      case 'mobile': return 'w-[320px] max-w-[90%]';
      case 'tablet': return 'w-[500px] max-w-[95%]';
      default: return 'w-full';
    }
  };

  return (
    <div className={`lg:col-span-3 flex flex-col relative h-[500px] lg:h-auto overflow-hidden ${isDark ? 'bg-[#0a0a0a] border-white/10' : 'bg-slate-100 border-slate-200'} items-center justify-start pt-6 border-r lg:order-none`} style={{ order: 0 }}>
      {/* Device toggles */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 p-1 rounded-full bg-slate-900/10 dark:bg-white/10 backdrop-blur-md border border-slate-900/10 dark:border-white/20 z-10 transition-all">
        <button 
          onClick={() => setDevice('desktop')}
          className={`p-2 rounded-full transition-all ${device === 'desktop' ? 'bg-white text-indigo-600 shadow-sm dark:bg-indigo-600 dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'}`}
          title="Vista Escritorio"
        ><Monitor size={16} /></button>
        <button 
          onClick={() => setDevice('tablet')}
          className={`p-2 rounded-full transition-all ${device === 'tablet' ? 'bg-white text-indigo-600 shadow-sm dark:bg-indigo-600 dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'}`}
          title="Vista Tablet"
        ><Tablet size={16} /></button>
        <button 
          onClick={() => setDevice('mobile')}
          className={`p-2 rounded-full transition-all ${device === 'mobile' ? 'bg-white text-indigo-600 shadow-sm dark:bg-indigo-600 dark:text-white' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white'}`}
          title="Vista Móvil"
        ><Smartphone size={16} /></button>
      </div>

      <div className={`mt-12 h-[calc(100%-3rem)] transition-all duration-500 ease-in-out border-t-8 border-x-8 border-slate-800 dark:border-slate-700 rounded-t-3xl shadow-2xl bg-white overflow-hidden flex flex-col ${getWidth()}`}>
        <div className="w-full flex-1 overflow-auto bg-white" style={{ isolation: 'isolate' }}>
           <iframe srcDoc={email.code} className="w-full h-full border-0" title={email.title} />
        </div>
      </div>
    </div>
  );
};

const EmailCodeBlock = ({ email, isDark }: { email: any, isDark: boolean }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`p-6 md:p-10 flex flex-col justify-center relative overflow-hidden lg:col-span-2 ${isDark ? 'bg-[#0F111A]' : 'bg-slate-50'}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Code size={18} className={isDark ? 'text-indigo-400' : 'text-indigo-600'} />
          <span className={`text-xs font-mono font-bold uppercase tracking-widest ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Template Source</span>
        </div>
        <div className="flex items-center gap-4">
            <button 
              onClick={handleCopy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider hover:scale-105 transition-all ${isDark ? (copied ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white hover:bg-white/20') : (copied ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-200 text-slate-700 hover:bg-slate-300')}`}
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'COPIADO' : 'COPIAR CÓDIGO'}
            </button>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></div>
          </div>
        </div>
      </div>

      <div className={`rounded-xl p-4 md:p-6 overflow-y-auto max-h-[350px] text-xs font-mono leading-relaxed border no-scrollbar ${isDark ? 'bg-black/50 border-white/5 text-slate-300' : 'bg-white border-slate-200 text-slate-600 shadow-inner'}`}>
        <pre className="whitespace-pre">
          <code>{email.code}</code>
        </pre>
      </div>
      
      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {['HTML5', 'CSS Inline', 'Responsive'].map(tag => (
            <span key={tag} className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-white/5 text-slate-400' : 'bg-slate-200 text-slate-600'}`}>
              {tag}
            </span>
          ))}
        </div>

        <div className={`mt-2 pt-4 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <p className={`text-[10px] font-bold uppercase tracking-wider mb-3 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Compatible con:</p>
          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            <div className={`flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'} w-full`}>
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2 text-blue-500" />
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">SendGrid</span>
            </div>
            <div className={`flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'} w-full`}>
              <img src={`https://cdn.simpleicons.org/mailchimp/${isDark ? 'ffffff' : '475569'}`} className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2" alt="Mailchimp" />
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">Mailchimp</span>
            </div>
            <div className={`flex flex-col items-center justify-center p-2 sm:p-4 rounded-xl border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'} w-full`}>
              <img src={`https://cdn.simpleicons.org/hubspot/${isDark ? 'ffffff' : '475569'}`} className="w-5 h-5 sm:w-6 sm:h-6 mb-1.5 sm:mb-2" alt="HubSpot" />
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">HubSpot</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const Ads: React.FC<{isDark: boolean, onGoHome: () => void}> = ({ isDark }) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);

  // Función para obtener link de descarga directa de Google Drive
  const getDownloadLink = (previewUrl: string) => {
    try {
      const idMatch = previewUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        return `https://drive.google.com/uc?export=download&id=${idMatch[1]}`;
      }
      return previewUrl;
    } catch (e) {
      return previewUrl;
    }
  };

  return (
    <div className="w-full flex flex-col gap-32 animate-in fade-in slide-in-from-bottom-10 duration-1000 pb-32">
      
      {/* HEADER: ARTES DIGITALES */}
      <section className="text-center flex flex-col items-center max-w-4xl mx-auto px-4">
        {/* Icon style matching Videos.tsx */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center border mb-12 ${isDark ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'}`}>
          <Palette size={28} />
        </div>

        <div className="space-y-6">
          <h2 className={`text-5xl md:text-7xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Artes Digitales
          </h2>
          <p className={`text-lg md:text-xl font-light leading-relaxed px-4 mb-12 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            He tenido el privilegio de elaborar piezas de alto impacto como posts, banners y flyers para diversas marcas internacionales, implementando estrategias visuales efectivas que impulsan la visibilidad y el compromiso del público objetivo.
          </p>
        </div>

        {/* TOOL ICONS REPRESENTATIVE STYLE */}
        <div className="grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-4 mt-8 max-w-2xl mx-auto place-items-center">
          {[
            { label: 'Id', name: 'INDESIGN', icon: <Book size={22} />, color: "text-pink-500" },
            { label: 'Ai', name: 'ILLUSTRATOR', icon: <PenTool size={22} />, color: "text-orange-500" },
            { label: 'Ps', name: 'PHOTOSHOP', icon: <ImageIcon size={22} />, color: "text-blue-500" },
          ].map((tech) => (
            <div key={tech.name} className={`w-16 h-16 sm:w-24 sm:h-24 rounded-xl sm:rounded-[1.5rem] flex flex-col items-center justify-center gap-2 sm:gap-3 backdrop-blur-xl border transition-all hover:scale-110 hover:-translate-y-1 ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-md'}`}>
              <div className={`${tech.color} scale-75 sm:scale-100 transition-transform`}>{tech.icon}</div>
              <span className={`text-[7px] sm:text-[9px] uppercase font-bold tracking-widest text-center px-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BENTO GRID GALLERY */}
      <section className="w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {AD_IMAGES.map((img) => (
            <div 
              key={img.id}
              onClick={() => setSelectedItem({ ...img, type: 'image' })}
              className={`group relative rounded-[2rem] overflow-hidden border cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 ${
                img.size === 'large' ? 'col-span-2 row-span-2' : 
                img.size === 'medium' ? 'col-span-2 row-span-1' : 'col-span-1 row-span-1'
              } ${isDark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white'}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-400 mb-2 block">{img.category}</span>
                <h4 className="text-xl font-bold text-white">{img.title}</h4>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye size={18} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL DESIGN SECTION */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 ${isDark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'}`}>
              <Mail size={12} />
              <span>Email Marketing</span>
            </div>
          </div>
          <h3 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Email Design
          </h3>
          <p className={`text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Creación de campañas persuasivas con código optimizado (HTML/CSS) para máxima entregabilidad y visualización en cualquier cliente de correo (SendGrid, Mailchimp).
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {EMAIL_DESIGNS.map((email, i) => (
            <div key={email.id} className={`grid grid-cols-1 lg:grid-cols-5 rounded-[2rem] md:rounded-[3rem] overflow-hidden border ${isDark ? 'bg-black/40 border-white/10' : 'bg-white border-slate-200 shadow-2xl shadow-indigo-500/5'}`}>
              
              <EmailLivePreview email={email} isDark={isDark} />

              <EmailCodeBlock email={email} isDark={isDark} />
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL SECTION - PREMIUM DESIGN */}
      <section className="space-y-20">
        <div className="text-center space-y-4">
          <h3 className={`text-4xl md:text-6xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Publicaciones Digitales & Catálogos
          </h3>
          <p className={`text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Fusión de estética editorial y funcionalidad digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CATALOGS.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => setSelectedItem({ ...cat, type: 'catalog' })}
              className={`group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer transition-all duration-700 hover:scale-[1.02] border bg-slate-950 ${isDark ? 'border-white/10' : 'border-slate-200 shadow-2xl'}`}
            >
              {/* Image Layer - Color maintained (opacity 100) */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={cat.imageFull} 
                  alt={cat.title} 
                  className="w-full h-full object-cover opacity-100 transition-all duration-1000 group-hover:scale-110"
                />
                {/* Degradado oscuro para legibilidad que no blanquea la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              </div>

              {/* Content Overlay - Fixed White for Premium look */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end gap-6 z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-indigo-600 text-[10px] font-bold text-white tracking-widest uppercase">
                      {cat.pdfUrl ? 'PDF Editorial' : 'Catálogo Visual'}
                    </span>
                    <span className="text-sm font-mono text-white/60">© {cat.year}</span>
                  </div>
                  <h4 className="text-5xl font-black tracking-tighter text-white drop-shadow-lg">{cat.title}</h4>
                </div>
                
                <p className="text-base md:text-lg font-light leading-relaxed line-clamp-3 max-w-md text-slate-200 drop-shadow-md">
                  {cat.description}
                </p>

                <div className="pt-4">
                  <div className="inline-flex items-center gap-3 font-bold text-sm tracking-widest uppercase transition-all group-hover:gap-5 text-white">
                    <span>{cat.pdfUrl ? 'Ver PDF' : 'Ver Proyecto'}</span>
                    <ArrowRight size={20} className="text-indigo-400" />
                  </div>
                </div>
              </div>

              {/* Decorative side accent */}
              <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${cat.color} opacity-60`} />
            </div>
          ))}
        </div>
      </section>

      {/* MODAL VIEW */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in zoom-in-95">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setSelectedItem(null)}></div>
          
          <button 
            onClick={() => setSelectedItem(null)}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all z-[110] border border-white/10"
          >
            <X size={24} />
          </button>

          <div className="relative z-10 w-full max-w-6xl h-full flex flex-col md:flex-row items-center gap-4 md:gap-16 overflow-y-auto no-scrollbar pb-10 md:pb-0">
            
            {/* Visualizer (Image or PDF Iframe) */}
            <div className={`w-full md:w-2/3 ${selectedItem.type === 'catalog' ? 'h-[80vh]' : 'h-[60vh]'} md:h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-black/20 flex-shrink-0`}>
              {selectedItem.type === 'catalog' && selectedItem.pdfUrl ? (
                <iframe 
                  src={selectedItem.pdfUrl} 
                  className="w-full h-full border-0"
                  allow="autoplay"
                ></iframe>
              ) : (
                <img 
                  src={selectedItem.imageFull || selectedItem.url || selectedItem.image} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            
            {/* Details Panel */}
            <div className="w-full md:w-1/3 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">
                  {selectedItem.type === 'catalog' ? 'Publicación Digital' : (selectedItem.category || 'Diseño')}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">{selectedItem.title}</h3>
                {selectedItem.year && <p className="text-white/40 font-mono">Año: {selectedItem.year}</p>}
              </div>
              
              <p className="text-slate-400 text-lg leading-relaxed font-light whitespace-pre-line overflow-y-auto max-h-[80%] pr-4 no-scrollbar">
                {selectedItem.description || "Visualización de arte publicitario optimizado para plataformas digitales. Esta pieza fue desarrollada bajo estándares de alta calidad visual para maximizar el retorno de inversión y engagement."}
              </p>

              {/* Only show buttons for Catalogs with PDF */}
              {selectedItem.type === 'catalog' && selectedItem.pdfUrl && (
                <div className="pt-8 flex flex-wrap gap-4">
                  <a 
                    href={getDownloadLink(selectedItem.pdfUrl)} 
                    download
                    className="px-8 py-4 bg-white text-slate-950 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-all shadow-xl"
                  >
                    <Download size={18} />
                    <span>Descargar PDF</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Ads;