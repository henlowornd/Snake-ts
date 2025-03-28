import Game from "../components/Game";
import Item from "./Item";
import FoodPosition from "./FoodPosition";

/**
 * When the snake eat it, the snake will be able to ignore the bomb for 10 seconds.
 * 
 * @todo
 */
export default class Snickers extends Item {
    public constructor(position: FoodPosition, game: Game<{}>) {
        super(position, game, "snickers");
    }

    public eat(): void {
        super.eat();

        // ignore bomb
        this.game.doIgnoreBomb = true;
        // set it to the normal value after 10 seconds (10000ms)
        setTimeout(() => {
            this.game.doIgnoreBomb = false;
        }, 10 * 1000);
    }
}
