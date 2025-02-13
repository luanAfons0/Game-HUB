import CONSTANTS from "../Constants";
import Sprite from "../Interfaces/Sprite";

class Paddle implements Sprite {
  public context: CanvasRenderingContext2D;
  public x: number;
  public y: number;
  private readonly paddleHeight: number;
  private readonly paddleWidth: number;
  private readonly xMoveSpeed: number;
  private isRightPressed!: boolean;
  private isLeftPressed!: boolean;

  constructor(contenxt: CanvasRenderingContext2D) {
    this.context = contenxt;
    this.xMoveSpeed = CONSTANTS.MOVEMENT_SPEED;
    this.paddleHeight = CONSTANTS.PADDLE_HEIGHT;
    this.paddleWidth = CONSTANTS.PADDLE_WIDTH;
    this.x = CONSTANTS.CANVAS_WIDTH / 2 - this.paddleWidth / 2;
    this.y = CONSTANTS.CANVAS_HEIGHT - this.paddleHeight - 10;

    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
  }

  public keyDownHandler = (event: KeyboardEvent) => {
    if (event.key == "ArrowRight") this.isRightPressed = true;

    if (event.key == "ArrowLeft") this.isLeftPressed = true;
  };

  public keyUpHandler = (event: KeyboardEvent) => {
    if (event.key == "ArrowRight") this.isRightPressed = false;
    if (event.key == "ArrowLeft") this.isLeftPressed = false;
  };

  public update() {
    if (this.isRightPressed) {
      this.x = Math.min(
        this.x + this.xMoveSpeed,
        CONSTANTS.CANVAS_WIDTH - CONSTANTS.PADDLE_WIDTH
      );
    }

    if (this.isLeftPressed) {
      this.x = Math.max(this.x - this.xMoveSpeed, 0);
    }
  }

  public draw() {
    this.context.beginPath();
    this.context.rect(this.x, this.y, this.paddleWidth, this.paddleHeight);
    this.context.fillStyle = CONSTANTS.MAIN_COLOR;
    this.context.fill();
    this.context.closePath();
  }
}

export default Paddle;
