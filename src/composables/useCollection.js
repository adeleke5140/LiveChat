import { ref } from "vue";
import { db } from "../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import getUser from "./getUser";

//col is the name of the collection
const { user } = getUser();
const useCollection = (col) => {
  const error = ref(null);

  const addDocument = async (data) => {
    error.value = null;
    const colRef = collection(db, col);
    try {
      await addDoc(colRef, { ...data, userUid: user.value.uid });
    } catch (err) {
      console.log(err.message);
      error.value = "Could not send the message!";
    }
  };

  return { error, addDocument };
};

export default useCollection;
