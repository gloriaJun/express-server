import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8080;

// CORS 설정
app.use(cors());

// set cors
// app.all('/*', function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use('/public', express.static('public'));

app.listen(PORT, function () {
    console.log(`web server listening on port ${PORT}`);
});