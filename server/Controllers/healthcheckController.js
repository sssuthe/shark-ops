

var HealthService = require('../Services/healthService');
var firebase = require("firebase/app");
const admin = require('firebase-admin');
var serviceAccount = require('../sharkops-239501-87f204fd5ea0.json');
require("firebase/firestore");

var HealthcheckController = {};

var firebaseConfig = {
   apiKey: "AIzaSyBZljo8HfVm3xFrWoGB4P9GT48atweTSMk",
   authDomain: "sharkops-239501.firebaseapp.com",
   databaseURL: "https://sharkops-239501.firebaseio.com",
   projectId: "sharkops-239501",
   storageBucket: "sharkops-239501.appspot.com",
   messagingSenderId: "35366247525",
   appId: "1:35366247525:web:b3893d0485cb994d"
};

//Below block initializes firebase on local/non-GCP env.
firebase.initializeApp(firebaseConfig);
admin.initializeApp({
   credential: admin.credential.cert(serviceAccount)
});
var db = admin.firestore();

/* Below block initializes firebase when running on GCP
admin.initializeApp({
   credential: admin.credential.applicationDefault()
});
const db = admin.firestore();
*/

HealthcheckController.getHealthcheck = function(req, res) {
   res.send(HealthService.getHealth());
};

HealthcheckController.getAccounts = function(req, res) {
   var accountsCollection = db.collection("account");
   accountsCollection.get()
      .then((accountsCollection) => {
         if(accountsCollection.size >= 0) {
            var documents = [];
            accountsCollection.docs.forEach( (doc) => {
               documents.push(doc.data());
            });
            res.send(documents);
         }
      })
      .catch( (err) => {
         res.send(err);
      });
};

module.exports = HealthcheckController;