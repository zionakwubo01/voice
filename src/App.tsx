import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Voice = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  }: any = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[500px] min-h-[600px] flex items-center flex-col border rounded-[30px] justify-center gap-[30px]">
        <p className="font-bold text-[20px] ">
          Microphone: {listening ? "on" : "off"}
        </p>
        <div className="flex flex-row gap-4">
          <button
            className="p-3 bg-blue-900 font-bold text-[15px] w-[100px] text-white"
            onClick={SpeechRecognition.startListening}
          >
            Start
          </button>
          <button
            className="p-3 bg-blue-900  font-bold text-[15px] w-[100px] text-white"
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
        </div>
        <button
          className="p-3 bg-blue-900 font-bold text-[15px] w-[100px] text-white"
          onClick={resetTranscript}
        >
          Reset
        </button>

        <p className="font-bold text-[40px] text-black">{transcript} </p>
      </div>
    </div>
  );
};
export default Voice;
