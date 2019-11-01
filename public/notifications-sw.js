
importScripts('https://www.gstatic.com/firebasejs/6.4.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/6.2.0/firebase-messaging.js')


// Initialize Firebase
firebase.initializeApp({
  projectId: "labqt-a31fa",
  messagingSenderId: "312384232440",
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
  const titleNotification = `${payload.data.author} ha publicado un nuevo post: ${payload.data.title}`;
  const optionesNotificatios = {
    body: `acerca de: ${payload.data.description}`,
    icon: '../src/assets/notification.png',
    click_action: 'https://jasanhdz.github.io/LabQT/public',
    // click_action: 'labqt-a31fa.firebaseapp.com',
  }

  return self.registration.showNotification(titleNotification, optionesNotificatios)
})
