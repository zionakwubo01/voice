import { useState } from "react";
import { Createquestion } from "../../api/api";
import Swal from "sweetalert2";
import { questionHook } from "../hooks/Questionhook";

const CreateQuestion = () => {
  const [question, setquestion] = useState<string>("");
  const [answer, setanswer] = useState<string>("");
  const [A, setA] = useState<string>("");
  const [B, setB] = useState<string>("");
  const [C, setC] = useState<string>("");
  const [D, setD] = useState<string>("");

  const handleclick = () => {
    let val = {
      question: question,
      answer: answer,
      A: A,
      B: B,
      C: C,
      D: D,
    };
    Createquestion(val).then((res) => {
      console.log("this is date", res.data);
    });
  };

  const { data } = questionHook();

  console.log("this is squestion data", data);

  return (
    <div
      className="w-full min-h-[] flex items-center justify-center
    p-3 flex-wrap "
    >
      <div
        className="w-[90%] min-h-[500px] p-3 
      flex-col  justify-center gap-4 items-center
      bg-green-400 flex  md:w-[50%]"
      >
        <input
          className="h-[50px] w-[90%] p-3 md:w-[80%] bg-slate-200 border
           rounded-lg  border-solid border-black"
          placeholder="enter question"
          value={question}
          onChange={(e) => {
            setquestion(e.target.value);
          }}
        />
        <input
          className="h-[50px] w-[90%] p-3 md:w-[80%] bg-slate-200 border
           rounded-lg  border-solid border-black"
          placeholder="enter answer"
          value={answer}
          onChange={(e) => {
            setanswer(e.target.value);
          }}
        />
        <input
          className="h-[50px] w-[90%] p-3 md:w-[80%] bg-slate-200 border
           rounded-lg  border-solid border-black"
          placeholder="enter option A"
          value={A}
          onChange={(e) => {
            setA(e.target.value);
          }}
        />
        <input
          className="h-[50px] w-[90%] p-3 md:w-[80%] bg-slate-200 border
           rounded-lg  border-solid border-black"
          placeholder="enter option B"
          value={B}
          onChange={(e) => {
            setB(e.target.value);
          }}
        />
        <input
          className="h-[50px] w-[90%] p-3 md:w-[80%] bg-slate-200 border
           rounded-lg  border-solid border-black "
          placeholder="enter option C"
          value={C}
          onChange={(e) => {
            setC(e.target.value);
          }}
        />
        <input
          className="h-[50px] w-[90%] p-3 md:w-[80%] bg-slate-200 border
           rounded-lg  border-solid border-black"
          placeholder="enter option D"
          value={D}
          onChange={(e) => {
            setD(e.target.value);
          }}
        />
        <button
          className="btn bg-purple-500 mt-20 text-white rounded-md ml-2 "
          onClick={() => {
            handleclick();

            Swal.fire(`question created create another ons if you wanna`);
          }}
        >
          submit
        </button>
        ;
      </div>
    </div>
  );
};

export default CreateQuestion;
