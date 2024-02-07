import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const SpeechRecognitionComponent: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[40%] h-[30%] bg-gray-200 flex flex-col items-center justify-between">
        <div className="font-bold text-[20px]"> {listening ? "on" : "of"}</div>
        <button
          onClick={startListening}
          className="w-[100px] h-[40px] bg-blue-400"
        >
          Start Listening
        </button>
        <button
          onClick={stopListening}
          className="w-[100px] h-[40px] bg-blue-400"
        >
          Stop Listening
        </button>
        <button
          onClick={resetTranscript}
          className="w-[100px] h-[40px] bg-blue-400"
        >
          Reset Transcript
        </button>
        <p className="fonr-bold text-[40px]">Transcript: {transcript}</p>
      </div>
    </div>
  );
};

export default SpeechRecognitionComponent;
