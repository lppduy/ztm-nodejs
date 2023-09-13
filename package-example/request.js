const axios = require('axios');

axios
  .get('https://www.googlee.com')
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log("loi cmnr, err dai' lam nen k log 🤡"))
  .then(() => console.log('all done 🚀'));
// ctrl shift R -> convert function || refactor code
