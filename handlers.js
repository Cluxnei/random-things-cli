import {read_question} from "./input.js";
import {random_number_seeded} from "./features/number.js";

export const handle_random_number_seeded = async () => {
    const { min } = await read_question('min', 'Enter min number: ');
    const { max } = await read_question('max', 'Enter max number: ');
    const { seeds } = await read_question('seeds', 'Enter number of seeds: ');
    return random_number_seeded(min, max, seeds);
};