import * as admin from 'firebase-admin';


var serviceAccount = require("./dec-self-firebase-adminsdk-xldrb-e15305343c.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dec-self.firebaseio.com"
  });

  
  export default admin