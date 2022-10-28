import { db } from "../firebase/config";
import { ref, watchEffect } from "vue";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const getCollection = (col) => {
  const error = ref(null);
  const documents = ref(null);
  const isPending = ref(true);

  const colRef = collection(db, col);

  const q = query(colRef, orderBy("createdAt"));

  const unsub = onSnapshot(
    q,
    (snapshot) => {
      let results = [];
      snapshot.docs.forEach((doc) => {
        doc.data().createdAt && results.push({ ...doc.data(), id: doc.id });
      });

      documents.value = results;
      isPending.value = false;
      error.value = null;
    },
    (err) => {
      console.log(err.message);
      isPending.value = false;
      documents.value = null;
      error.value = "Could not fetch data";
    }
  );

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsub());
  });

  return { error, documents, isPending };
};

export default getCollection;
