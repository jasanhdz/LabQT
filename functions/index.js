const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.registrarTopico = functions.firestore
  .document('/tokens/{id}')
  .onCreate(dataSnapshot => {
    const token = dataSnapshot.data().token

    const registrationTokens = [token]

    return admin
      .messaging()
      .subscribeToTopic(registrationTokens, 'NuevosPosts')
      .then(() => {
        return console.log(`Adiciona correctamente al topico`)
      })
      .catch(error => {
        console.error(`Error registrando al topico el token => ${error}`)
      })
  })

exports.NotificacionPosts = functions.firestore
  .document('/posts/{idPost}')
  .onCreate(dataSnapshot => {
    const title = dataSnapshot.data().title === null ? 'Si Titulo' : dataSnapshot.data().title
    const description = dataSnapshot.data().description
    const author = dataSnapshot.data().author

    const mensaje = {
      data: {
        author: author,
        title: title,
        description: description
      },
      topic: 'NuevosPosts'
    }

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(`Mensaje enviado correctamente`)
      })
      .catch(error => {
        console.error(`Error enviando mensaje => ${error}`)
      })
  })


  exports.registrarTopicoMessage = functions.firestore
  .document('/tokens/{id}')
  .onCreate(dataSnapshot => {
    const token = dataSnapshot.data().token

    const registrationTokens = [token]

    return admin
      .messaging()
      .subscribeToTopic(registrationTokens, 'NuevosMessages')
      .then(() => {
        return console.log(`Adiciona correctamente al topico`)
      })
      .catch(error => {
        console.error(`Error registrando al topico el token => ${error}`)
      })
  })

  exports.sendNotificacionMessages = functions.firestore
  .document('/messages/{idMessage}')
  .onCreate(dataSnapshot => {
    const author = dataSnapshot.data().author
    const title = dataSnapshot.data().message
    const date = dataSnapshot.data().date

    const mensaje = {
      data: {
        author: author,
        title: title,
        date: date
      },
      topic: 'NuevoMessage'
    }

    return admin
      .messaging()
      .send(mensaje)
      .then(() => {
        return console.log(`Mensaje enviado correctamente`)
      })
      .catch(error => {
        console.error(`Error enviando mensaje => ${error}`)
      })
  })