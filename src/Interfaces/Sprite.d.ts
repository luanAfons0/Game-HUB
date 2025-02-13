interface Sprite {
  context: CanvasRenderingContext2D;
  draw: Function;
  update: Function;
  x: number;
  y: number;
}

export default Sprite;
