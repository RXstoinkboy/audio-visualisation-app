import createAudioElement from "./createAudioElement";
import initCanvas from "./initCanvas";
import setupAudioAPI from "./setupAudioAPI";
import prepareAudioDataArray from "./prepareAudioDataArray";

(() => {
  // GRAB CANVAS AND CREATE AUDIO ELEMENT
  const canvas = document.getElementById("canvas");
  const audio = new Audio(); // create audio element
  let analyser; // declare variable

  // setup audio element
  createAudioElement(audio);

  // setup cavnas context
  let ctx = initCanvas(canvas);

  // create analyser and properly connect input --> analyser --> output
  analyser = setupAudioAPI(analyser, audio);

  // define length of array storing audio data
  let bufferLength = analyser.frequencyBinCount;

  // assign data to array
  let dataArray = prepareAudioDataArray(bufferLength, analyser);

  // paint data as a graph
  const W = canvas.width;
  const H = canvas.height;
  const barWidth = (W / bufferLength) * 80;
  let barHeight; // declare bar height variable
  let x; // declare starting point of each bar

  // DRAW VISUALISATION
  function renderFrame() {
    requestAnimationFrame(renderFrame);

    x = 0; // assing 0 as starting point to draw first bar
    analyser.getByteFrequencyData(dataArray); // copy audio data into array

    ctx.fillStyle = "rgba(0,0,0,0.8)"; // leave a little fade effect
    ctx.fillRect(0, 0, W, H);

    let bars = 60; // declare FPS

    for (let i = 0; i < bars; i++) {
      barHeight = dataArray[i] * 2; // calculate height of each bar;

      ctx.fillStyle = `hsl(${barHeight}deg, 20%, 40%)`; // assing different color based on bar's height
      ctx.fillRect(x, H - barHeight, barWidth, barHeight);
      x += barWidth + 10; // keep some extra space between bars
    }
  }

  renderFrame();
})();
