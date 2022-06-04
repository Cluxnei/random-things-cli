const mount_string_message = (message) => {
    const size = String(message).length + 4 + 8;
    const border = '-'.repeat(size);
    message = `result: ${message}`;
    return `${border}\n| ${message} |\n${border}`;
}

export const output_message = (message) => {
    const type = typeof message;
    const handlers = {
        string: (msg) => console.log(mount_string_message(msg)),
    };
    if (handlers[type]) {
        handlers[type](message);
        return;
    }
    console.log('Log of unknown type: ' + type, message);
};