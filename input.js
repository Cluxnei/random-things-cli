import inquirer from 'inquirer';

export const read_from_list = async (name, message, choices) => (
    inquirer.prompt([{ type: 'list', name, message, choices }])
);

export const wait_for_any_key = async () => (
    inquirer.prompt([{ type: 'confirm', name: 'any_key', message: 'Press any key to continue...' }])
);

export const read_question = async (name, message) => (
    inquirer.prompt([{ type: 'input', name, message }])
);
