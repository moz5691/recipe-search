Simple food recipe search app.

npm install
npm run dev --> this is to run both React Client and Express Server (refer package.json).

Note:
config/dev.js is not in the repo. "dev.js" is to store MongDB URL.

"dev.js" format shoudl look like following:  
module.exports = {
mongoURI: 'mongodb://your_username:Your_password@your_own_url_here'
};

"seeds.js" is to seed initial DB data into MongoDB. To run it. Save a lot of time!!!
node seeds.js

Screenshot
![alt text](misc/screenshot.png 'screenshot')
