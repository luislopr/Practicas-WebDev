/*lookup("google.co.ve", (err, address, family) => {
    if(err) throw err;
    printResult(address);
  });
  
  function printResult(address){
     console.log(address);
  }*/



// 1. Call helloCatAsync passing a callback function,
//    which will be called receiving the result from the async operation

console.log("1. function called...")
helloCatAsync(function(result) {
    // 5. Received the result from the async function,
    //    now do whatever you want with it:
    console.log("5. result is: ", result);
});
console.log('y este donde va ?');
// 2. The "callback" parameter is a reference to the function which
//    was passed as argument from the helloCatAsync call
async function helloCatAsync(callback) {
   console.log("2. callback here is the function passed as argument above...")
   // 3. Start async operation:
   setTimeout(function () {
      console.log("3. start async operation...");
      console.log("4. finished async operation, calling the callback, passing the result...");
      // 4. Finished async operation,
      //    call the callback passing the result as argument
      await callback('Nya');
   }, Math.random() * 2000);
}


    /*
    EDIT:
    
    You can also use:
    
    const dns = require('dns');
    dnsPromises = dns.promises;
    
    async function test() {
      let data = await dnsPromises.lookup(("www.aWebSiteName.am");
    }
    
    
      /* ATTEMP # 3 se va a error aunque resuelve
        const lookupPromise = new Promise((resolve, reject) => {
          dns.lookup(domain, (err, address) => {
            if (err) reject(err);
            resolve(address);
          });
        });
      
        lookupPromise
          .then(res => {
            console.log('res: ', res)
            if (regex.test(req.body.url) && address)
              next('/api/shorturl/new');
            else
              next('Invalid URL');
          })
          .catch(err => {
            console.error('ERROR en DNS');
          });
      
        */

    /* ATTEMP # 2
      dns.lookup(domain, (err, address) => {
        if (err) return console.log('ERROR en dns');
        validate(address);
      });
    
      function validate(address) {
        console.log(address);
        if(regex.test(req.body.url) && address)
          next();
        else
          next('Invalid URL');
      }
      /*
        const validate = (domain) =>  {
          dns.lookup(domain, (err, address, family)=>{
          if(err) console.log('ERROR en dns');
          console.log('address reached');
          return  address;
        })
        };
      
        const address = validate(domain);
      
        console.log(address);
        console.log('salto ?');
      
         if(regex.test(req.body.url) && address)
            next();
        else 
          next('Invalid URL');  
          */


/*
  const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

  function failureCallback() {
    console.log("This is failure callback");
  }

  wait(4 * 1000).then(() => {
    console.log("waited for 4 seconds");
    throw new Error("error occurred");
  }).catch(() => {
    failureCallback();
  });

  wait(2 * 1000).then(() => console.log("waited for 2 seconds"));


  /*
    let aux;
  
    const agregarURL = (callback) => {
      console.log('1', aux);
      aux = createAndsaveURL(req.body);
      console.log('2', aux);
      callback(aux);
    }
  
    const second = async () => {
      await agregarURL(function(callback){
        console.log('meh', callback);
      })
    }
    
    second();
  
    /*
    
    let aux;
    const agregarURL = async () => {
      console.log('1', aux);
      aux = await createAndsaveURL(req.body);
      console.log('2', aux);
    }
    agreagarURL();
  
    console.log('FINAL ! ! ! ! !');
    res.json({ original_url: aux.url, short_url: aux._id });
    
    */

      /*
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}


/*
  let finds;
  ShortURL.find().toArray(function (err, data) {
   if (!err) result = data;
  });

  ShortURL.find((err, url)=>{
  if(err) return console.log('erro en la fkinbd');
    
    res.json(url);
  });
  console.log(finds);
*/
