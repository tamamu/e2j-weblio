#!/usr/bin/env node

const client = require('cheerio-httpcli');

if(process.argv.length < 3){
	console.log('missing keyword.');
	return;
}else{

client.fetch('http://ejje.weblio.jp/content/'+process.argv[2],
		(err, $, res, doc) => {
			console.log($('title').text());
			let x = $('div.summaryM.descriptionWrp > table > tbody > tr > td');
			if(x.length == 0){
				console.log("一致する見出し語は見つかりませんでした");
				return;
			}
			console.log(x[1].children[0].data);
		});

}
