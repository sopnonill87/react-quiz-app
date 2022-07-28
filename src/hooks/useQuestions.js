import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useVideoList(questionId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  console.log("questions", questions);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, `quiz/${questionId}/questions`);
      const quizQuery = query(quizRef);

      try {
        setLoading(true);
        setError(false);
        const snapshot = await get(quizQuery, orderByKey());
        setLoading(false);

        if (snapshot.exists()) {
          setQuestions((prevQuestions) => {
            // return [...prevQuestions, ...Object.values(snapshot.val())];
            return [...Object.values(snapshot.val())];
          });
        }
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [questionId]);

  return {
    loading,
    error,
    questions,
  };
}
