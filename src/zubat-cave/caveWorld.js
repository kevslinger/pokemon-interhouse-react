import { MAPS } from "./mapGenerator";

/* Gridworld environment with random Snapebat appearances and several different maze configurations to select from */
class CaveWorld {
    constructor () {
        this.zubat_chance = 0.2; // Chance of running into a zubat
        this.map_id = -1; // Placeholder until we generate map.
        this.map = this.generateMap();
        this.size = this.map.length; // NxN grid
        // TODO: Make random starting position?
        this.x = 1;
        this.y = 0;
        // Left Right Up Down
        this.actions = [0, 1, 2, 3];
        this.numSteps = 0;
        this.keyPresses = 0;
        // Count of zubats and the list of their locations
        this.zubatCount = 0;
        this.zubats = [];
        // TODO: Make a random goal/map?
    }

    reset() {
        this.zubatCount = 0;
        this.zubats = [];
        this.numSteps = 0;
        this.x = 1;
        this.y = 0;
        this.map = this.generateMap();
    }

    generateMap() {
        let rand = Math.floor(Math.random() * MAPS.length)
        this.map_id = rand + 1;
        return MAPS[rand];
    }

    step(action) {
        // Handle invalid action/keystroke
        if (!this.actions.includes(action)){
            return false;
        }
        // A keypress includes running into a wall.
        this.keyPresses += 1;
        // Handle hitting a wall
        if (!this.map[this.y][this.x][action]) {
            return false;
        }
        // A step is counted as an action movement
        this.numSteps += 1;
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
        let maybe_zubat = Math.random() < this.zubat_chance;
        if (maybe_zubat) {
            this.zubatCount += 1;
            this.zubats.push({x: this.x, y: this.y});
        }
        return maybe_zubat;
    }
}

export default CaveWorld;