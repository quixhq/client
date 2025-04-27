import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { quizData, uuid } = location.state || {};

  useEffect(() => {
    if (!quizData) {
      // If someone tries to open /quiz directly without joining
      navigate("/");
    }
  }, [quizData, navigate]);

  if (!quizData) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">
        Quiz Session: {quizData.sessionId}
      </h1>

      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">Participants</h2>
        <ul className="list-disc list-inside mb-8">
          {quizData.clients.map((client: any) => (
            <li
              key={client.uuid}
              className={client.uuid === uuid ? "font-bold text-blue-600" : ""}
            >
              {client.displayName} {client.uuid === uuid && "(You)"}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Questions Preview</h2>
        <ul className="list-decimal list-inside space-y-2">
          {quizData.questions.map((q: any, index: number) => (
            <li key={index}>{q.questionText || `Question ${index + 1}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
