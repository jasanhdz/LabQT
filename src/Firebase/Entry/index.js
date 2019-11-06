
// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyAS2N0RgylWYBRXjyFw-KaqFnI380TfXF8",
  authDomain: "labqt-a31fa.firebaseapp.com",
  databaseURL: "https://labqt-a31fa.firebaseio.com",
  projectId: "labqt-a31fa",
  storageBucket: "labqt-a31fa.appspot.com",
  messagingSenderId: "312384232440",
  appId: "1:312384232440:web:f5756be8e3abdcbd64140d",
  measurementId: "G-ZHV6FFGD9X"
});
// firebase.analytics();

// ADICIONAR EL SERVICES WORKER
navigator.serviceWorker
  .register("notifications-sw.js")
  .then(registro => {
    console.log("service worker registrado");
    firebase.messaging().useServiceWorker(registro);
  })
  .catch(err => {
    console.error(`Error al registrar el service worker ${err}`);
  });

// Registrar credecniales web
const messaging = firebase.messaging()

messaging.usePublicVapidKey( 
  `BB7c3q3V57j_Vedo0Co5zVqYj9_j3BJEPVeXggOiFRG_Xn5-9vWlfjR6h2RGMcT83kPY-XpcwiYO5OurxlSTe2M`
);

// Solicitar permisos para las notificaciones
messaging
  .requestPermission()
  .then(() => {
    console.log("Permiso Otorgado");
    return messaging.getToken();
  })
  .then(token => {
    console.log("token");
    console.log(token)
    const db = firebase.firestore();
    db.settings({});
    db.collection("tokens")
      .doc(token)
      .set({
        token: token
      })
      .catch(error => {
        console.error(`Error al insertar el token en la BD => ${error}`);
      });
  });


// Obtener el token cuando se refresca
messaging.onTokenRefresh(() => {
  messaging.getToken().then(token => {
    console.log("Token se ha renovado");
    const db = firebase.firestore();
    db.settings({});
    db.collection("tokens")
      .doc(token)
      .set({
        token: token
      })
      .catch(error => {
        console.error(`Error al insertar el token en la BD => ${error}`);
      });
  });
});

// Recibir las notificaciones cuando el usuario esta en foreground
messaging.onMessage(payload => {
  switch (payload.data.type) {
    case 'POST': {
      alert(`Ya tenemos un nuevo post. Revisalo, se llama ${payload.data.title}`);
      console.log(`${payload.data.author} ha publicado un nuevo post: ${payload.data.title}`)
      console.log(payload);
      break;
    }
    case 'MESSAGE': {
      alert(`${payload.data.title}: ${payload.data.author} ha escrito un ${payload.data.description} `);
      console.log(`${payload.data.title}: ${payload.data.author} ha escrito ${payload.data.description} `);
      console.log(payload);
      break;
    }
    default: {
      alert(`Agregaron nuevo contenido no defino al Topico, porfavor maneja el caso`);
      console.log(`Agregaron nuevo contenido no defino al Topico, porfavor maneja el caso`);
      console.log(payload);
      break;
    }
  }
  
})

