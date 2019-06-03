// prepare an array to store audio data
const prepareAudioDataArray = (bufferLength, analyser) => {
  bufferLength = analyser.frequencyBinCount;
  let dataArray = new Uint8Array(bufferLength);

  return dataArray;
};

export default prepareAudioDataArray;
