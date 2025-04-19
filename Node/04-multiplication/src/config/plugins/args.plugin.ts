import yargs, {hide} from 'yargs';
import {hideBin} from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        description: 'Multiplication table base',
        demandOption: true,
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        default: 10,
        description: 'Multiplication table limit',
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        description: 'Show multiplication table',
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        description: 'File name',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        description: 'File destination',
    })
    .check((argv, options) => {

        if (argv.b < 1) throw 'Error: Base must be greater than 0';

        return true;
    })
    .parseSync();