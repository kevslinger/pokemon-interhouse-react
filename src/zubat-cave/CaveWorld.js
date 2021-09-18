/* Gridworld environment with random Snapebat appearances and several different maze configurations to select from */
class CaveWorld {
    constructor () {
        this.size = 10; // NxN grid
        this.zubat_chance = 0.1; // Chance of running into a zubat
        this.map = this.generateMap();
        // TODO: Make random starting position?
        this.x = 1;
        this.y = 1;
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
        this.x = 1;
        this.y = 1;
        this.generateMap();
    }

    generateMap() {
        return null;
    }

    step(action) {
        if (!this.actions.includes(action)){
            return false;
        }
        this.numSteps += 1;
        switch (action) {
            case 0:
                if (0 < this.x - 1) {
                    this.x -= 1;
                }
                break;
            case 1:
                if (this.x + 1 <= this.size) {
                    this.x += 1;
                }
                break;
            case 2:
                if (this.y + 1 <= this.size) {
                    this.y += 1;
                    // TODO: Hardcoded
                    // Let the user get through the top of the goal.
                } else if (this.x === 9) {
                    this.y += 1;
                }
                break;
            case 3:
                if (this.y - 1 > 0){
                    this.y -= 1;
                }
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