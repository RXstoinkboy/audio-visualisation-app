const createAudioElement = audio => {
  audio.src = "../bensound-sunny.mp3"; // assign source
  audio.autoplay = true;
  audio.controls = true; // turn on controls
  audio.crossOrigin = "anonymous"; // prevent error due to CORS
  document.body.appendChild(audio);
};

export default createAudioElement;
