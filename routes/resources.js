var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
// router.get('/', function (req, res, next) {
// 	res.render('index', { title: 'Resources' });
// });

let images = [
	"white_bish", "black_bish", "white_knight", "black_knight",
	"white_rook", "black_rook", "white_queen", "black_queen", "white_king",
	"black_king", "white_pawn", "black_pawn"
]

images.forEach(ele=>{
	router.get('/image/piece/'+ele, function (req, res, next) {
		res.sendFile(path.join(__dirname,"../public/piece images",ele + ".svg"));
	});
})

module.exports = router;
