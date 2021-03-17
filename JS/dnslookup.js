const dns = require('dns');

dns.lookup('goo3123gle.co.ve',(err, data)=>{
   console.log ( err ? console.log('cuenta como error ?!')+ err:  console.log('y esto que ?') + data);
});
