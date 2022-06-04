const random_number_between = (min, max) => {
    const _min = Math.min(min, max);
    const _max = Math.max(min, max);
    return (
        Math.floor(Math.random() * (_max - _min + 1)) + _min
    );
};

export const random_number_seeded = (min, max, seeds = 1) => {
    min = parseFloat(min);
    max = parseFloat(max);
    seeds = parseInt(seeds);
    return Array.from({ length: seeds }, () => 0)
        .map(() => random_number_between(min, max));
};