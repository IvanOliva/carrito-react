import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDXpQjyeS6q7WI1P3IBcEqzUPosrwlVrB8",
    authDomain: "crown-db-3519e.firebaseapp.com",
    projectId: "crown-db-3519e",
    storageBucket: "crown-db-3519e.appspot.com",
    messagingSenderId: "300314595285",
    appId: "1:300314595285:web:038df28a8f7fcb546bf75c",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('Error creating user', error);
        }
    }
    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const sigInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;