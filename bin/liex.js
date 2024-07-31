#!/usr/bin/env node
const { performance } = require('perf_hooks');

global.__liex_start_time = performance.now();

// check debug mode first before requiring the CLI.

const findIndexByRegExp = (regExp) => process.argv.findIndex((arg) => regExp.test(arg));

// Uso de la función para buscar índices
const debugIndex = findIndexByRegExp(/^(?:-d|--debug)$/);
const filterIndex = findIndexByRegExp(/^(?:-f|--filter)$/);
const profileIndex = findIndexByRegExp(/^(?:-p|--profile)$/);

// if (debugIndex > 0) {
//   let value = process.argv[debugIndex + 1];
//   if (!value || value.startsWith('-')) {
//     value = 'liex:*';
//   } else {
//     // support debugging multiple flags with comma-separated list
//     value = value
//       .split(',')
//       .map((v) => `liex:${v}`)
//       .join(',');
//   }
//   process.env.DEBUG = `${process.env.DEBUG ? process.env.DEBUG + ',' : ''
//     }${value}`;

//   if (filterIndex > 0) {
//     const filter = process.argv[filterIndex + 1];
//     if (filter && !filter.startsWith('-')) {
//       process.env.LIEX_DEBUG_FILTER = filter;
//     }
//   }
// }

// function start() {
//   return require('../dist/node/cli.js');
// }

// if (profileIndex > 0) {
//   process.argv.splice(profileIndex, 1);
//   const next = process.argv[profileIndex];
//   if (next && !next.startsWith('-')) {
//     process.argv.splice(profileIndex, 1);
//   }
//   const inspector = require('inspector');
//   const session = (global.__liex_profile_session = new inspector.Session());
//   session.connect();
//   session.post('Profiler.enable', () => {
//     session.post('Profiler.start', start);
//   });
// } else {
//   start();
// }
