// console.log(process.env);

const {SHELL, HOMEBREW_PREFIX, npm_lifecycle_script} = process.env;

// console.log({SHELL, HOMEBREW_PREFIX, npm_lifecycle_script});

export const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [_, __, ___, batman] = characters;

// console.log(batman);