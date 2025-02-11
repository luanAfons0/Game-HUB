class Game {
  private start: boolean = false;
  private readonly context: any;
  private readonly canvas: HTMLCanvasElement;
  private x!: number;
  private y!: number;
  private readonly moveSpeed: number = 2;

  constructor() {
    const $canvas: HTMLCanvasElement = document.getElementById(
      "game"
    ) as HTMLCanvasElement;
    const context = $canvas.getContext("2d");

    this.canvas = $canvas;
    this.context = context;
  }

  public gameStart = () => {
    this.start = true;

    this.gameLoop();
  };

  public gameLoop() {
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;

    if (this.start) {
      setInterval(this.draw, 10);
    }
  }

  public drawBall = () => {
    this.context.beginPath();
    this.context.arc(this.x, this.y, 10, 0, Math.PI * 2);
    this.context.fillStyle = "#0095DD";
    this.context.fill();
    this.context.closePath();
  };

  public draw = () => {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawBall();
      this.x += this.moveSpeed;
      this.y -= this.moveSpeed;
    }
  };
}

export default Game;
