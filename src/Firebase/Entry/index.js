import { firebaseConfig } from "../Configuration";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

// ADICIONAR EL SERVICES WORKER
navigator.serviceWorker
  .register("notifications-sw.js")
  .then(resgistry => {
    console.log("service worker registrado");
    firebase.messaging().useServiceWorker(resgistry);
  })
  .catch(err => {
    console.error(`Error al registrar el service worker ${err}`);
  });

// Registrar credecniales web
const messaging = firebase.messaging()

messaging.usePublicVapidKey( 
  `BNihLr4hdIX4EZZxLNVaTd-3PCY-VhWkNjRboMriB1CYbmKQTA8lFhb7cWYuBVqO4IBEhhHyX3jXY6uV_qkMff8`
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
  alert(`Ya tenemos un nuevo post. Revisalo, se llama ${payload.data.title}`);
  console.log(`${payload.data.author} ha publicado un nuevo post: ${payload.data.title}`)
  console.log(payload);
})
