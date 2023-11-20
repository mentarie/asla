// AudioRecorder.js
import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioData, setAudioData] = useState('');

  const startRecording = () => {
    setIsRecording(true);
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedData) => {
    setAudioData(recordedData);
  };

  const onStop = (recordedBlob) => {
    console.log('recordedBlob is:', recordedBlob);
    // You can do something with the recorded audio blob, like sending it to a server.
  };

  return (
    <div>
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button onClick={startRecording} type="button">
        Start Recording
      </button>
      <button onClick={stopRecording} type="button">
        Stop Recording
      </button>
    </div>
  );
};

export default AudioRecorder;
