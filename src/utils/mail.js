export const config = {
  to: `jonathanhacklife@gmail.com`,
  subject: "Meeting",
  body: `¿Que tal? Vi tu portfolio y me gustaría saber más sobre vos.\n
  Tengo interés en conocerte y organizar una reunión esta semana para llevar a cabo un proyecto juntos.
  \n\n¡Saludos!`,
}

/* Crear un objeto que represente un envío de mail para adjuntar en un link */
const mailTo = `mailto:${config.to}?cc=${config.cc}&subject=${encodeURIComponent(config.subject)}&body=${encodeURIComponent(config.body)}`

export default mailTo