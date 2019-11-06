
importScripts('https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js')


// Initialize Firebase
firebase.initializeApp({
  projectId: "labqt-a31fa",
  messagingSenderId: "312384232440",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  let optionesNotificatios
  switch (payload.data.type) {
    case 'POST': {
      const titleNotification = `${payload.data.author} ha publicado un nuevo post: ${payload.data.title}`;
      optionesNotificatios = {
        body: `acerca de: ${payload.data.description}`,
        icon: "./css/notification.png",
        click_action: 'labqt-a31fa.firebaseapp.com',
      }
      return self.registration.showNotification(titleNotification, optionesNotificatios)

    }
    case 'MESSAGE': {
      const titleNotification = `${payload.data.author} ha escrito un nuevo Mensaje: ${payload.data.title}`;
      optionesNotificatios = {
        body: `acerca de: ${payload.data.description}`,
        icon: "./css/message.png",
        click_action: 'labqt-a31fa.firebaseapp.com',
      }
      return self.registration.showNotification(titleNotification, optionesNotificatios)
    }
    default: {
      const titleNotification = `Agregaron nuevo contenido no defino al Topico, porfavor maneja el caso`;
      return self.registration.showNotification(titleNotification, optionesNotificatios)
    }
  }
})
