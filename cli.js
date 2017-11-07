#!/usr/bin/env node
'use strict';
const meow = require('meow');
const hacktoberfestStats = require('hacktoberfeststats');

const cli = meow(`
	Usage
	  $ hacktoberfest <username> <year>

	Examples
	  $ hacktoberfest ziyaddin 2017
	  $ hacktoberfest sindresorhus 2015

`);

const input = cli.input;

if(input.length > 1){
	hacktoberfestStats(input[0], input[1], function(hacktoberfestStats, callback, error) {
		console.log("Name:", hacktoberfestStats.mainStats.Name);
		console.log("Completed:", hacktoberfestStats.mainStats.Completed);
		console.log("Progress:", hacktoberfestStats.mainStats.Progress);
		console.log("Contributions:", hacktoberfestStats.mainStats.Contributions);
	});
}else{
	console.log(cli.help);
}