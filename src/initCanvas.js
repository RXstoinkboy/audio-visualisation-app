// CANVAS SETUP
const initCanvas = canvas => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  return ctx;
};

export default initCanvas;
