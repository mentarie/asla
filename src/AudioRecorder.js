// MyAudioRecorder.js
import React, { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';

const MyAudioRecorder = () => {
  const [audioData, setAudioData] = useState(null);

  const onStop = (data) => {
    console.log('Recording stopped', data);
    setAudioData(data);
  };

  const handlePlayback = () => {
    if (audioData) {
      console.log('Playing audio')
      const audio = new Audio(audioData.url);
      audio.play();
    }
  };

  return (
    <div>
      <AudioRecorder onStop={onStop} />
      {audioData && (
        <div>
          <button onClick={handlePlayback}>Play Recorded Audio</button>
          <audio controls>
            <source src={audioData.url} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default MyAudioRecorder;
