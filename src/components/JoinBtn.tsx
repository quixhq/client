import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const GetStartedBtn = () => {
  return (
    <Link to={"/loading"} className="font-bold rounded-lg mt-4">
      <Button
        className="rounded-[20px] px-12 py-6 w-40 flex items-center justify-center bg-peach text-black mt-[-100px]"
        style={{
          boxShadow: "0px 2px 0 grey",
        }}
      >
        JOIN
      </Button>
    </Link>
  );
};

export default GetStartedBtn;
