import Sprite from "../Interfaces/Sprite";
import Infos from "../Infos";

class Ball implements Sprite {
    public readonly context;
    private x!:number;
    private y!:number;
    private xMoveSpeed!: number;
    private yMoveSpeed!:number;
    private ballSize!: number;

    constructor(context:any){
        this.context = context;
        this.x = Infos.CANVAS_WIDTH / 2;
        this.y = Infos.CANVAS_HEIGHT / 2;
        this.xMoveSpeed = Infos.MOVEMENT_SPEED;
        this.yMoveSpeed = -Infos.MOVEMENT_SPEED;
        this.ballSize = Infos.BALL_SIZE;
    }

    public draw(){
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.ballSize, 0, Math.PI * 2);
        this.context.fillStyle = Infos.MAIN_COLOR;
        this.context.fill();
        this.context.closePath();
    }

    public update(){
        this.context.clearRect(0, 0, Infos.CANVAS_WIDTH, Infos.CANVAS_HEIGHT);
        this.x += this.xMoveSpeed;
        this.y -= this.yMoveSpeed;

        if(this.y - this.ballSize / 2 < 0 || this.y + this.ballSize / 2  > Infos.CANVAS_HEIGHT) {
            this.yMoveSpeed = -this.yMoveSpeed;
        }

        if(this.x - this.ballSize / 2  < 0 || this.x + this.ballSize / 2  > Infos.CANVAS_WIDTH){
            this.xMoveSpeed = -this.xMoveSpeed;
        }
    }
}

export default Ball;