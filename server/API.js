// API
// ===

module.exports.api = function(server, fs) {

	// Sample Rest Call

	server.get('/api/getData', function(req, res) {

		fs.readFile(__dirname + '/data.json', function(err, data) {
			if (err) throw err;
      console.log(JSON.parse(data))
			res.send(200, JSON.parse(data));
		});
	});

};
