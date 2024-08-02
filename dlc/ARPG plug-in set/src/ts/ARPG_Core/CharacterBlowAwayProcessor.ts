import { Degree } from "../CommonLibrary/Degree";
import { Processor } from "../CommonLibrary/Processor";

export class CharacterBlowAwayProcessor extends Processor<Game_Character> {
    private _deg: Degree;
    private _initialVelocity: number;
    private _duration: number;

    constructor(deg: Degree, initialVelocity: number, duration: number) {
        super();
        this._deg = deg;
        this._initialVelocity = initialVelocity;
        this._duration = duration;
    }

    protected start() {
        super.start();
        const character = this.user();
        if (character instanceof Game_Event) {
            character.interpreter()?.lock("knockback");
            character.stopSelfMovement("knockback");
        } else if (character instanceof Game_Player) {
            character.stopMoveByInput("knockback");
        }
        character.cancelAcceleration();
        character.cancelMove();
        if ((character as any)._moveRoute) {
            character.processRouteEnd();
        }
    }

    protected *process() {
        const character = this.user();
        const tmpMoveSpeed = character.moveSpeed();
        const tmpDpf = character._dpf;
        const tmpMaxAcceleration = (character as any)._maxAcceleration;
        const tmpAccelerationPlus = (character as any)._accelerationPlus;
        const tmpIntertia = (character as any)._inertia;
        const tmpDirFixed = character.isDirectionFixed();

        character.setDirectionFix(true);
        // ここで移動処理
        character.setDpf(0.1);
        character.setAcc(0, 0);

        for (let i = 0; i < this._duration; i++) {
            const dpf = this._initialVelocity - (i * (this._initialVelocity / this._duration));
            character.setDpf(dpf);
            character.dotMoveByDeg(this._deg.value);
            yield;
        }

        character.setDirectionFix(tmpDirFixed);
        character.setMoveSpeed(tmpMoveSpeed);
        character.setDpf(tmpDpf);
        character.setAcc(tmpMaxAcceleration, tmpAccelerationPlus);
        character.setInertia(tmpIntertia);
    }

    protected terminate(): void {
        super.terminate();
        const character = this.user();
        if (character instanceof Game_Event) {
            character.interpreter()?.unlock("knockback");
            character.resumeSelfMovement("knockback");
        } else if (character instanceof Game_Player) {
            character.resumeMoveByInput("knockback");
        }
    }
}
