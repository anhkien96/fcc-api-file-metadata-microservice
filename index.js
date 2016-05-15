var express = require('express');
var app = express();

app.use(express.static('public'));

app.post('/fileanalyse', require('multer')().any(), function(req, res) {
	var files = req.files;
	for(var i in files) if (files[i].fieldname == 'file') {
		var file = files[i];
		res.json({
			name: file.originalname,
			size: file.size,
			type: file.minetype
		});
		return;
	}
	res.json({error: 404});
});

app.listen(process.env.PORT);