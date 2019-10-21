const { firebaseConfig } = require("../Configuration");

class Authentication {
  authEmailPass(email, password) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        if (result.user.emailVerified) {
          alert(`Bienvenido ${result.user.displayName}`);
        } else {
          firebase.auth().signOut();
          alert(`Por favor realiza la verificación de la cuenta`);
        }
      });
  }

  createAcountEmailPass(email, password, names) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        result.user.updateProfile({
          displayName: names
        });
        const configuration = {
          url: firebaseConfig.url
        };
        result.user.sendEmailVerification(configuration).catch(error => {
          console.log(error);
        });

        firebase.auth.sigOut();

        alert(
          `Bienvenido, pero aún debes realizar el proceso de verificación desde tu Correo Electronico. `
        );
      })
      .catch(error => {
        console.log(error);
        alert(err);
      });
  }
}

export default Authentication;
