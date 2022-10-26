import { db } from "../firebase/config";
import { ref } from "vue";

import { collection, getDocs } from "firebase/firestore";

const getCollection = async (col) => {
  const error = ref(null);
  const colRef = collection(db, col);

  try {
    const results = await getDocs(colRef);
    results.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
    });
  } catch (err) {
    console.log(err);
    error.value = err;
  }
};

export default getCollection;
