require('@instana/collector')({
  agentPort: 443
});

const express = require("express");
const app = express();

let port = Number.parseInt(process.env.PORT);

app.get("/*", function(req, res) {
  
  let date_ob = new Date();

  // current date
  // adjust 0 before single digit date
  let date = ("0" + date_ob.getDate()).slice(-2);

  // current month
  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  // current year
  let year = date_ob.getFullYear();

  // current hours
  let hours = date_ob.getHours();

  // current minutes
  let minutes = date_ob.getMinutes();

  // current seconds
  let seconds = date_ob.getSeconds();

  // prints date & time in YYYY-MM-DD HH:MM:SS format
  console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

  // if ( seconds == 2 ) {
  //   res.status(500).send("<head><script>(function(s,t,a,n){s[t]||(s[t]=a,n=s[a]=function(){n.q.push(arguments)},n.q=[],n.v=2,n.l=1*new Date)})(window,\"InstanaEumObject\",\"ineum\");ineum('reportingUrl', 'https://eum-orange-saas.instana.io');ineum('key', 'F08GfvNoScaM23NU7awNeg');ineum('trackSessions');</script><script defer crossorigin=\"anonymous\" src=\"https://eum.instana.io/eum.min.js\"></script></head><body>🚀 There is an error. 🚀</body>");
  // }
  // else {
  //   res.send("<head><script>(function(s,t,a,n){s[t]||(s[t]=a,n=s[a]=function(){n.q.push(arguments)},n.q=[],n.v=2,n.l=1*new Date)})(window,\"InstanaEumObject\",\"ineum\");ineum('reportingUrl', 'https://eum-orange-saas.instana.io');ineum('key', 'F08GfvNoScaM23NU7awNeg');ineum('trackSessions');</script><script defer crossorigin=\"anonymous\" src=\"https://eum.instana.io/eum.min.js\"></script></head><body>🚀 Tony is alive!! repeat... Tony is Alive!! 🚀</body>");
  // }

  res.send("<head><script>(function(s,t,a,n){s[t]||(s[t]=a,n=s[a]=function(){n.q.push(arguments)},n.q=[],n.v=2,n.l=1*new Date)})(window,\"InstanaEumObject\",\"ineum\");ineum('reportingUrl', 'https://eum-orange-saas.instana.io');ineum('key', 'F08GfvNoScaM23NU7awNeg');ineum('trackSessions');</script><script defer crossorigin=\"anonymous\" src=\"https://eum.instana.io/eum.min.js\"></script></head><body>🚀 Tony is alive!! repeat... Tony is Alive!! 🚀</body>");

});

app.listen(port, function() {
  console.log(`🚀 Example NodeJS app listening on port ${port}`);
});
