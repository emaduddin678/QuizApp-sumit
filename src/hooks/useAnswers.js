import React, { useEffect, useState } from "react";
import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

function useAnswers(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const answerRef = ref(db, "answers/" + videoId + "/questions");
      const answerQuery = query(answerRef, orderByKey());
      // console.log(answerQuery)
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerQuery);
        // console.log(snapshot)
        setLoading(false);
        // console.log(typeof (snapshot.val()))
        // console.log(typeof snapshot.val().map((a) => console.log(a)));
        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
            // return [...prevQuestions, ...(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswers();
    // setTimeout(() => {
    // }, 500);
  }, [videoId]);
  // {console.log("videos", videos)}
  return {
    loading,
    error,
    answers,
  };
}

export default useAnswers;
