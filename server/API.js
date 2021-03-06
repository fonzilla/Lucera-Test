// API
// ===

module.exports.api = function(server, fs) {

	// Sample Rest Call

	server.get('/api/getData', function(req, res) {

		fs.readFile(__dirname + '/data.json', "utf8", function(err, data) {
			if (err) throw err;

      let result = JSON.parse(data);

      result.map(function(item){
        item.uuid = item.LiquidityProvider + "_" + item.Client
      })

			res.send(200, result);
		});
	});

};
