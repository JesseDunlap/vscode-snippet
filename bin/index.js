#!/usr/bin/env node

const program = require('yargs');
const package = require('./package.json');
const fs = require('fs');

program
  .version(package.version)
  .command(
    'generate <input>',
    'Generate a component',
    (yargs) => {
      yargs
        .positional('input', { describe: 'The file to generate a snippet from.' })
        .option('name', { alias: 'n', describe: 'The name of the snippet.', default: 'Snippet Name' })
        .option('description', { alias: 'd', describe: 'The description for the snippet.', default: '' })
        .option('prefix', { alias: 'p', describe: 'The snippet\'s prefix.', default: 'snippet' })
        .option('output', { alias: 'o', describe: 'The output file.' })
    },
    (argv) => {
      if (!fs.existsSync(argv.input)) {
        throw new Error(`Snippet file "${argv.input}" does not exist.`);
      }

      const inputFileContents = fs.readFileSync(argv.input, 'utf-8');
      const inputFileLines = inputFileContents.split('\n');

      const snippetStructure = {
        [argv.name]: {
          'prefix': argv.prefix,
          'body': inputFileLines,
          'description': argv.description
        }
      };

      const outputFileName = argv.output || argv.input + '.out';
      fs.writeFileSync(outputFileName, JSON.stringify(snippetStructure, null, 2));
    })
    .argv;