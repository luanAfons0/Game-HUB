import Paddle from "./Entities/Paddle";
import Ball from "./Entities/Ball";

class Game {
  private start: boolean = false;
  private readonly context!: CanvasRenderingContext2D;
  private ball!: Ball;
  private paddle!: Paddle;

  constructor() {
    const $canvas: HTMLCanvasElement = document.getElementById(
      "game"
    ) as HTMLCanvasElement;
    const context = $canvas.getContext("2d");

    if (context) {
      this.context = context;
      this.ball = new Ball(this.context);
      this.paddle = new Paddle(this.context);
    }
  }

  public gameStart = () => {
    this.start = true;

    this.gameLoop();
  };

  public gameLoop() {
    if (this.start) {
      setInterval(this.updateGame, 10);
    }
  }

  public updateGame = () => {
    this.ball.update();
    this.ball.draw();
    this.paddle.update();
    this.paddle.draw();
  };
}

export default Game;
