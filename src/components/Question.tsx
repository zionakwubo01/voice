// import { useState } from "react";

// document.title = "Home screen";

// const Question = () => {
//   const newData = [
//     {
//       question: "what do you want",
//       answer: "apple",

//       A: "apple",
//       B: "orange",
//       C: "beans",
//       D: "banana",
//     },
//     {
//       question: "what do you want",
//       answer: "orange",

//       A: "apple",
//       B: "beans",
//       C: "orange",
//       D: "banana",
//     },
//     {
//       question: "what do you want",
//       answer: "beans",

//       A: "apple",
//       B: "orange",
//       C: "orange",
//       D: "banana",
//     },
//     {
//       question: "what do you want",
//       answer: "banana",

//       A: "apple",
//       B: "orange",
//       C: "orange",
//       D: "banana",
//     },
//   ];

//   const [state, setState]: any = useState();
//   const Handle = (e: any) => {
//     setState({
//       ...state,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const Handlesubmit = () => {
//     let score: number = 0;

//     const correctAnswers: Array<string> = [];
//     for (let i = 0; i < newData.length; i++) {
//       correctAnswers.push(newData[i].answer);

//       if (correctAnswers[i] === Object.values(state)[i]) {
//         score++;
//       }

//       let percentage = (score / newData.length) * 100;

//       console.log(percentage, "percent");

//     console.log("answers", correctAnswers);
//     console.log("state", Object.values(state));
//     console.log("score", score);
//   };

//   return (
//     <div
//       className="flex justify-center items-center
//   w-full min-h-[100vh] text-black p-2"
//     >
//       <div className="w-[500px] min-h-[500px] rounded-md border shadow-md p-2">
//         <p className="mt-10 w-full text-center font-bold text-[20px] marker:">
//           Quesion
//         </p>
//         {newData.map((el: any, i: number) => (
//           <div className="">
//             <p className="font-bold">
//               <span className="mr-4 w-[100px]"> {i + 1}</span>
//               {el.question}
//             </p>

//             <p className="ml-10 mt-4">
//               <div className="my-4 " key={i}>
//                 <p className="flex items-center">
//                   <input
//                     type="radio"
//                     className="mr-3 radio-sm checked:bg-green-500"
//                     id={`${el.A}`}
//                     name={`${i + 1}`}
//                     value={el.A}
//                     onChange={(e: any) => {
//                       Handle(e);
//                     }}
//                   />
//                   <label>{el.A}</label>
//                 </p>
//                 <p className="flex items-center">
//                   <input
//                     type="radio"
//                     className="mr-3  radio-sm checked:bg-green-500"
//                     id={`${el.B}`}
//                     name={`${i}`}
//                     value={el.B}
//                     onChange={(e: any) => {
//                       Handle(e);
//                     }}
//                   />
//                   <label>{el.B}</label>
//                 </p>
//                 <p className="flex items-center">
//                   <input
//                     type="radio"
//                     className="mr-3  radio-sm checked:bg-green-500"
//                     id={`${el.C}`}
//                     name={`${i}`}
//                     value={el.C}
//                     onChange={(e: any) => {
//                       Handle(e);
//                     }}
//                   />
//                   <label>{el.C}</label>
//                 </p>
//                 <p className="flex items-center ">
//                   <input
//                     type="radio"
//                     className="mr-3  radio-sm checked:bg-green-500"
//                     id={`${el.D}`}
//                     name={`${i}`}
//                     value={el.D}
//                     onChange={(e: any) => {
//                       Handle(e);
//                     }}
//                   />
//                   <label>{el.D}</label>
//                 </p>
//               </div>
//             </p>
//           </div>
//         ))}

//         <div className="mt-2">
//           <div>
//             <button
//               className="btn btn-neutral rounded-md"
//               onClick={Handlesubmit}
//             >
//               Submit answers
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Question;

const Question = () => {
  return <div>Question</div>;
};

export default Question;
