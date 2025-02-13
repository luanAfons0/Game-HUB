import Sprite from "../Interfaces/Sprite";
import CONSTANTS from "../Constants";

class Ball implements Sprite {
  public readonly context: CanvasRenderingContext2D;
  public x: number;
  public y: number;
  private xMoveSpeed: number;
  private yMoveSpeed: number;
  private ballSize: number;

  constructor(context: any) {
    this.context = context;
    this.x = CONSTANTS.CANVAS_WIDTH / 2;
    this.y = CONSTANTS.CANVAS_HEIGHT / 2;
    this.xMoveSpeed = CONSTANTS.MOVEMENT_SPEED;
    this.yMoveSpeed = -CONSTANTS.MOVEMENT_SPEED;
    this.ballSize = CONSTANTS.BALL_SIZE;
  }

  public draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.ballSize, 0, Math.PI * 2);
    this.context.fillStyle = CONSTANTS.MAIN_COLOR;
    this.context.fill();
    this.context.closePath();
  }

  public update() {
    this.context.clearRect(
      0,
      0,
      CONSTANTS.CANVAS_WIDTH,
      CONSTANTS.CANVAS_HEIGHT
    );
    this.x += this.xMoveSpeed;
    this.y -= this.yMoveSpeed;

    if (
      this.y - this.ballSize / 2 < 0 ||
      this.y + this.ballSize / 2 > CONSTANTS.CANVAS_HEIGHT
    ) {
      this.yMoveSpeed = -this.yMoveSpeed;
    }

    if (
      this.x - this.ballSize / 2 < 0 ||
      this.x + this.ballSize / 2 > CONSTANTS.CANVAS_WIDTH
    ) {
      this.xMoveSpeed = -this.xMoveSpeed;
    }
  }
}

export default Ball;
