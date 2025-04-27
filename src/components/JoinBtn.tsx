import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../SocketContext"; // import your custom hook

const GetStartedBtn = ({ sessionId }: { sessionId: string }) => {
  const { socket } = useSocket();
  const navigate = useNavigate();

  const handleJoinQuiz = () => {
    if (socket) {
      socket.emit("join-quiz", sessionId);

      // Listen for server response
      socket.once("join-quiz-response", ({ status, quizData, uuid }) => {
        console.log("Join quiz response:", { status, quizData, uuid });

        if (status === "accepted") {
          // Optionally save quizData somewhere (context, redux, etc.)
          // Then navigate to Quiz page
          navigate("/quiz", { state: { quizData, uuid } });
        }
      });
    }
  };

  return (
    <Button
      className="rounded-[20px] px-12 py-6 w-40 flex items-center justify-center bg-peach text-black mt-[-100px]"
      style={{
        boxShadow: "0px 2px 0 grey",
      }}
      onClick={handleJoinQuiz} // wired here
    >
      JOIN
    </Button>
  );
};

export default GetStartedBtn;
