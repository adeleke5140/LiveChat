import { db } from "../firebase/config";
import { ref, watchEffect } from "vue";

import { collection, onSnapshot } from "firebase/firestore";

const getCollection = (col) => {
  const error = ref(null);
  const documents = ref(null);

  const colRef = collection(db, col);

  const unsub = onSnapshot(
    colRef,
    (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents };
};

export default getCollection;
