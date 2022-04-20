const express = require('express');

const router = express.Router();
const app = express();

// Dev
const PORT = 8080;

const data = [
  { lang: 'af', language: 'Afrikaans', hello: 'hallo' },
  { lang: 'am', language: 'Amharic', hello: 'ሰላም' },
  { lang: 'ar', language: 'Arabic', hello: 'مرحبا' },
  { lang: 'az', language: 'Azerbaijani', hello: 'Salam' },
  { lang: 'be', language: 'Belarusian', hello: 'добры дзень' },
  { lang: 'bg', language: 'Bulgarian', hello: 'Здравейте' },
  { lang: 'bn', language: 'Bengali', hello: 'হ্যালো' },
  { lang: 'bs', language: 'Bosnian', hello: 'zdravo' },
  { lang: 'ca', language: 'Catalan', hello: 'Hola' },
  { lang: 'co', language: 'Corsican', hello: 'Bonghjornu' },
  { lang: 'cs', language: 'Czech', hello: 'Ahoj' },
  { lang: 'da', language: 'Danish', hello: 'Hej' },
  { lang: 'cy', language: 'Welsh', hello: 'Helo' },
  { lang: 'de', language: 'German', hello: 'Hallo' },
  { lang: 'el', language: 'Greek', hello: 'Γεια σας' },
  { lang: 'en', language: 'English', hello: 'Hello' },
  { lang: 'eo', language: 'Esperanto', hello: 'Saluton' },
  { lang: 'es', language: 'Spanish', hello: 'Hola' },
  { lang: 'et', language: 'Estonian', hello: 'Tere' },
  { lang: 'eu', language: 'Basque', hello: 'Kaixo' },
  { lang: 'fa', language: 'Persian', hello: 'سلام' },
  { lang: 'fi', language: 'Finnish', hello: 'Hei' },
  { lang: 'fr', language: 'French', hello: 'Bonjour' },
  { lang: 'ga', language: 'Irish', hello: 'Dia duit' },
  { lang: 'gl', language: 'Galician', hello: 'Ola' },
  { lang: 'gu', language: 'Gujarati', hello: 'હેલો' },
  { lang: 'ha', language: 'Hausa', hello: 'Sannu' },
  { lang: 'he', language: 'Hebrew', hello: 'שלום' },
  { lang: 'hi', language: 'Hindi', hello: 'नमस्ते' },
  { lang: 'hr', language: 'Croatian', hello: 'zdravo' },
  { lang: 'hu', language: 'Hungarian', hello: 'Helló' },
  { lang: 'hy', language: 'Armenian', hello: 'Բարեւ' },
  { lang: 'id', language: 'Indonesian', hello: 'Halo' },
  { lang: 'ig', language: 'Igbo', hello: 'Ndewo' },
  { lang: 'is', language: 'Icelandic', hello: 'Halló' },
  { lang: 'it', language: 'Italian', hello: 'Ciao' },
  { lang: 'ja', language: 'Japanese', hello: 'こんにちは' },
  { lang: 'jv', language: 'Javanese', hello: 'Hello' },
  { lang: 'ka', language: 'Georgian', hello: 'გამარჯობა' },
  { lang: 'kk', language: 'Kazakh', hello: 'Сәлем' },
  { lang: 'kn', language: 'Kannada', hello: 'ಹಲೋ' },
  { lang: 'ko', language: 'Korean', hello: '안녕하세요.' },
  { lang: 'ky', language: 'Kyrgyz', hello: 'салам' },
  { lang: 'la', language: 'Latin', hello: 'salve' },
  { lang: 'lb', language: 'Luxembourgish', hello: 'Moien' },
  { lang: 'lt', language: 'Lithuanian', hello: 'Sveiki' },
  { lang: 'lv', language: 'Latvian', hello: 'Labdien!' },
  { lang: 'mg', language: 'Malagasy', hello: 'Hello' },
  { lang: 'mi', language: 'Maori', hello: 'Hiha' },
  { lang: 'mk', language: 'Macedonian', hello: 'Здраво' },
  { lang: 'ml', language: 'Malayalam', hello: 'ഹലോ' },
  { lang: 'mn', language: 'Mongolian', hello: 'Сайн байна уу' },
  { lang: 'mr', language: 'Marathi', hello: 'हॅलो' },
  { lang: 'ms', language: 'Malay', hello: 'Hello' },
  { lang: 'mt', language: 'Maltese', hello: 'Hello' },
  { lang: 'ne', language: 'Nepali', hello: 'नमस्ते' },
  { lang: 'nl', language: 'Dutch', hello: 'Hallo' },
  { lang: 'no', language: 'Norwegian', hello: 'Hallo' },
  { lang: 'ny', language: 'Chichewa', hello: 'Moni' },
  { lang: 'pl', language: 'Polish', hello: 'Cześć' },
  { lang: 'ps', language: 'Pashto', hello: 'سلام' },
  { lang: 'pt', language: 'Portuguese', hello: 'Olá' },
  { lang: 'ro', language: 'Romanian', hello: 'Alo' },
  { lang: 'ru', language: 'Russian', hello: 'привет' },
  { lang: 'sd', language: 'Sindhi', hello: 'هيلو' },
  { lang: 'sk', language: 'Slovak', hello: 'ahoj' },
  { lang: 'sl', language: 'Slovenian', hello: 'Pozdravljeni' },
  { lang: 'sm', language: 'Samoan', hello: 'Talofa' },
  { lang: 'sn', language: 'Shona', hello: 'Hello' },
  { lang: 'sq', language: 'Albanian', hello: 'Përshëndetje' },
  { lang: 'sr', language: 'Serbian', hello: 'Здраво' },
  { lang: 'su', language: 'Sundanese', hello: 'halo' },
  { lang: 'sv', language: 'Swedish', hello: 'Hallå' },
  { lang: 'sw', language: 'Swahili', hello: 'Sawa' },
  { lang: 'ta', language: 'Tamil', hello: 'ஹலோ' },
  { lang: 'te', language: 'Telugu', hello: 'హలో' },
  { lang: 'tg', language: 'Tajik', hello: 'Салом' },
  { lang: 'th', language: 'Thai', hello: 'สวัสดี' },
  { lang: 'tr', language: 'Turkish', hello: 'Merhaba' },
  { lang: 'ur', language: 'Urdu', hello: 'ہیلو' },
  { lang: 'uz', language: 'Uzbek', hello: 'Salom' },
  { lang: 'vi', language: 'Vietnamese', hello: 'Xin chào' },
  { lang: 'xh', language: 'Xhosa', hello: 'Sawubona' },
  { lang: 'yi', language: 'Yiddish', hello: 'העלא' },
  { lang: 'yo', language: 'Yoruba', hello: 'Kaabo' },
  { lang: 'zh', language: 'Chinese', hello: '您好' },
  { lang: 'zu', language: 'Zulu', hello: 'Sawubona' },
];

app.set('port', PORT);
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.get('/about', (req, res) => {
  res.render('about.html');
});

app.use('/api', router);

router.get('/hello', async (req, res) => {
  const language = req.query.lang;

  const result = data.find((obj) => obj.lang === language);

  return res.json(result);
});

router.get('/all', async (req, res) => res.json(data));

app.listen(PORT, () => console.log(`listening on port ${app.get('port')}`));

module.exports = app;
