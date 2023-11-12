export const config = {
  to: `info@infinitelabs.com.ar`,
  cc: `jwildemer@infinitelabs.com.ar`,
  subject: "Meeting",
  body: `¿Que tal? Vi el anuncio y me gustaría saber más sobre ustedes.\n
  Tengo interés en conocer sus propuestas y organizar una reunión esta semana para llevar a cabo un proyecto juntos.
  \n\n¡Saludos!`,
}

/* Crear un objeto que represente un envío de mail para adjuntar en un link */
const mailTo = `mailto:${config.to}?cc=${config.cc}&subject=${encodeURIComponent(config.subject)}&body=${encodeURIComponent(config.body)}`

export default mailTo