

class CaveWorld {
    constructor () {
        this.size = 10; // NxN grid
        this.zubat_chance = 0.1; // Chance of running into a zubat
        this.map = this.generateMap();
        // TODO: Make random starting position?
        this.x = 1;
        this.y = 1;
        // Arrow keys and WASD
        this.actions = [37, 38, 39, 40, 65, 87, 68, 83, ]
        // TODO: Make a random goal/map?
    }

    generateMap() {
        return null;
    }

    step(action) {
        let sprite_path = "";
        if (!this.actions.includes(action)){
            return [sprite_path, false];
        }
        switch (action) {
            case 37:
            case 65:
                if (0 < this.x - 1) {
                    this.x -= 1;
                }
                sprite_path = "trainer_left.png";
                break;
            case 38:
            case 87:
                if (this.y + 1 <= this.size) {
                    this.y += 1;
                // TODO: Hardcoded
                } else if (this.x === 9) {
                    this.y += 1;
            }
                sprite_path = "trainer_up.png";
                break;
            case 39:
            case 68:
                if (this.x + 1 <= this.size) {
                    this.x += 1;
                }
                sprite_path = "trainer_right.png";
                break;
            case 40:
            case 83:
                if (this.y - 1 > 0){
                    this.y -= 1;
                }
                sprite_path = "trainer_down.png";
                break;
            default:
                break;
        }
        return [sprite_path, Math.random() < this.zubat_chance];
    }
}

export default CaveWorld;