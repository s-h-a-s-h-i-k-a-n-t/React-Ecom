import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyB8YEJIdmy8AMIA6UkIlK6J5uibmz4giH4",
    authDomain: "dazzling-docers.firebaseapp.com",
    databaseURL: "https://dazzling-docers.firebaseio.com",
    projectId: "dazzling-docers",
    storageBucket: "dazzling-docers.appspot.com",
    messagingSenderId: "998222124094",
    appId: "1:998222124094:web:0c3a346bace701971a2d6f"
  };


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


export const convertCollectionsSnapshotToMap = (collections) =>{
  // console.log("collections:-",collections.docs);
  const collectionArray = collections.docs.map(doc=>{
    const {title,items} = doc.data();
    return {
      title,
      items,
      routeName: encodeURI(title)
    }
  });
  // console.log("collectionArray",collectionArray);

 const collectionsArrayToMap = collectionArray.reduce((accumulator,collection)=>{
   accumulator[collection.title.toLowerCase()] = collection
   return accumulator;
   
 } ,{})


//  console.log("each collection title------------------------",collectionsArrayToMap);
 return collectionsArrayToMap;

}

export const createUserProfileDocument = async (userAuth,additionalData) =>{
  if(!userAuth)return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          additionalData
        })
      } catch (error) {
         console.log('error creating user',error.message);
      }
  }

}

// export const 




const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;