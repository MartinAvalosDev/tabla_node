const yargs = require('yargs')

const argv = require('yargs')
    .options({
        'l': {
            alias: 'listar',
            demandOption: false,
            default: false,
            describe: 'l = true, shows the table log',
            type: 'boolean',
        },
        'b': {
            alias: 'base',
            demandOption: true,
            default: 5,
            describe: 'Base of the table',
            type: 'number'
        },
        'h': {
            alias: 'limite',
            demandOption: true,
            default: 10,
            describe: 'Limit of the table',
            type: 'number'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw new Error('Invalid base argument')
        }
        return true
    })
    .argv;

module.exports = {
    argv
}