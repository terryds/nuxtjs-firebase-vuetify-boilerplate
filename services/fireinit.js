import firebase from 'firebase'

const config = {
  apiKey: 'YOUR-API-KEY',
  authDomain: 'YOUR-AUTH-DOMAIN',
  databaseURL: 'YOUR-DATABASE-URL',
  projectId: 'YOUR-PROJECT-ID',
  storageBucket: 'YOUR-STORAGE-BUCKET',
  messagingSenderId: 'YOUR-MESSAGING-SENDER-ID'
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const DB = firebase.database();
export default firebase