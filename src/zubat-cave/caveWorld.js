import { MAPS } from "./mapGenerator";

/* Gridworld environment with random Snapebat appearances and several different maze configurations to select from */
class CaveWorld {
    constructor () {
        this.size = 10; // NxN grid
        this.zubat_chance = 0.1; // Chance of running into a zubat
        this.map = this.generateMap();
        // TODO: Make random starting position?
        // this.x = 0;
        // this.y = 0;
        // Left Right Up Down
        this.actions = [0, 1, 2, 3];
        this.numSteps = 0;
        // Count of zubats and the list of their locations
        this.zubatCount = 0;
        this.zubats = [];
        // TODO: Make a random goal/map?
    }

    reset() {
        this.zubatCount = 0;
        this.zubats = [];
        this.numSteps = 0;
        this.x = 0;
        this.y = 0;
        this.map = this.generateMap();
    }

    generateMap() {
        this.x = 1;
        this.y = 0;
        return MAPS[Math.floor(Math.random() * MAPS.length)];
        //return MAPS[2];
    }

    step(action) {
        //console.log(`action is ${action}, x,y is ${this.x}, ${this.y}`);
        // Handle invalid action/keystroke
        if (!this.actions.includes(action)){
            return false;
        }
        this.numSteps += 1;
        // Handle hitting a wall
        if (!this.map[this.y][this.x][action]) {
            console.log(`Hit a wall at ${this.x}, ${this.y}, action ${action}, map ${this.map[this.x][this.y][action]}`);
            return false;
        }
        // TODO: can remove all the checking now since we have walls.
        switch (action) {
            // Left
            case 0:
                this.x -= 1;
                break;
            // Right
            case 1:
                this.x += 1;
                break;
            // Up
            case 2:
                this.y += 1;
                break;
            // Down
            case 3:
                this.y -= 1;
                break;
            default:
                break;
        }
        //         if (0 <= this.x - 1) {
        //             this.x -= 1;
        //         }
        //         break;
        //     case 1:
        //         if (this.x + 1 < this.size) {
        //             this.x += 1;
        //         }
        //         break;
        //     case 2:
        //         if (this.y + 1 < this.size) {
        //             this.y += 1;
        //             // TODO: Hardcoded
        //             // Let the user get through the top of the goal.
        //         } else if (this.x === 8) {
        //             this.y += 1;
        //         }
        //         break;
        //     case 3:
        //         if (this.y - 1 >= 0){
        //             this.y -= 1;
        //         }
        //         break;
        //     default:
        //         break;
        // }
        let maybe_zubat = Math.random() < this.zubat_chance;
        if (maybe_zubat) {
            this.zubatCount += 1;
            this.zubats.push({x: this.x, y: this.y});
        }
        return maybe_zubat;
    }
}

export default CaveWorld;