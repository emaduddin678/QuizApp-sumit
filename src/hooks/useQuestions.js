import React, { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

function useQuestions(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");
      const quizQuery = query(quizRef, orderByKey());
      // console.log(quizQuery)
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);
        // console.log(snapshot)
        setLoading(false);
        // console.log(typeof (snapshot.val()))
        // console.log(typeof snapshot.val().map((a) => console.log(a)));
        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
            // return [...prevQuestions, ...(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    setTimeout(() => {
      fetchQuestions();
    }, 500);
  }, [videoId]);
  // {console.log("videos", videos)}
  return {
    loading,
    error,
    questions,
  };
}

export default useQuestions;
