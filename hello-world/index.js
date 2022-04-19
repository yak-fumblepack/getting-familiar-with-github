const express = require('express');

const router = express.Router();
const app = express();

// Dev
const PORT = 8080;

const data = [
  {
    lang: 'en',
    text: 'hello',
  },
  {
    lang: 'zh',
    text: '你好',
  },
  {
    lang: 'my',
    text: 'မင်္ဂလာပါ',
  },
  {
    lang: 'ms',
    text: 'hello',
  },
  {
    lang: 'lv',
    text: 'sveiki',
  },
  {
    lang: 'de',
    text: 'hallo',
  },
];

app.set('port', PORT);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.use('/api', router);

router.get('/hello', async (req, res) => {
  const language = req.get('lang');
    
  let result = data.find(obj => obj.lang === language);


});

router.get('/all', async (req, res) => res.json(data));

app.listen(PORT, () => console.log(`listening on port ${app.get('port')}`));
