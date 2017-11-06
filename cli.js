#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hacktoberfestStats = require('HacktoberfestStats');

const cli = meow(`
	Usage
	  $ hacktoberfest <string>

	Examples
	  $ hacktoberfest ziyaddin
	  asdfg asdfg asdfg asdfg asdfg
`);

const input = cli.input;

if(input.length > 0){
	console.log(hacktoberfestStats(input[0]));
}
