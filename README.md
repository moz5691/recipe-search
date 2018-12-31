## Simple food recipe search app.

### React, Semantic UI, Express, MongoDB

**npm install**

**npm run dev** --> this is to run both React Client and Express Server (refer package.json).

### Note:

**config/dev.js** is not in the repo. "dev.js" is to store MongDB URL.

**"dev.js"** format should look like following:

```javascript
module.exports = {
  mongoURI: 'mongodb://your_username:Your_password@your_own_url_here'
};
```

**"seeds.js"** is to seed initial DB data into MongoDB. To run it. Save a lot of time!!!

**node seeds.js**

### For Heroku Deployment

In **package.json**

```javascript
  "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"
```

In **index.js** , this tells Express server the location of client's build packages(HTML,CSS,JS). "app.get" is 2nd layer of protect in case for any fails from "app.use(...)".

```javascript
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
```

### For Development : Proxy between Server and Client

In development, React server uses Port 3000 and Express uses Port 5000. We need a proxy setting in Client side. When client sends out API to server, need the following to allow the client to use proxy to reach out the server at PORT 5000. "proxy setting" in "package.json" isn't workign any loner with CRA2.0 (CreateReactAPP). The following middleware setup tells CRA to use the given proxy configuration. No other action needed but drop the following code in the given path and filename as below:

In **client/src/setupProxy.js**

```javascript
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
  /* you may have more lines of app.use for additional proxy setting */
};
```

**Screenshot**
![alt text](misc/screenshot.png 'screenshot')

By C. Ahn
