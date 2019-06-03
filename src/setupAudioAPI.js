// AUDIO API CONTEXT
// AUDIO DATA FLOW: audio input --> analyser --> output (headphones)
const setupAudioAPI = (analyser, audio) => {
  const context = new (window.AudioContext || window.webkitAudioContext)(); // create context
  let src = context.createMediaElementSource(audio); // assing source into context
  analyser = context.createAnalyser(); // create analyser to work on audio data
  src.connect(analyser); // connect source to analyser
  analyser.connect(context.destination); // connect analyser to speakers/headphones

  // assing fft
  analyser.fftSize = 16384;

  return analyser;
};

export default setupAudioAPI;
