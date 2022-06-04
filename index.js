import {read_from_list, wait_for_any_key} from './input.js';
import {output_message} from "./output.js";
import {handle_random_number_seeded} from "./handlers.js";

const EXIT_CHOICE = 'exit';

(async () => {
    const choices = {
        'random-number-seeded': handle_random_number_seeded,
    };
    const choices_list = [...Object.keys(choices), EXIT_CHOICE];
    while (true) {
        console.clear();
        const {menu} = await read_from_list('menu', 'What do you need to generate?', choices_list);
        if (menu === EXIT_CHOICE) {
            break;
        }
        console.clear();
        const result = await choices[menu]();
        output_message(result);
        await wait_for_any_key();
    }

})();