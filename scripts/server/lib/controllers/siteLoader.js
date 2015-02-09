var url = require('url');
var path = require('path');
var fs = require('fs');
var AWS = require('aws-sdk');

exports.sendEmail = function (request, response, next)
{
	console.log("Parameters", request.params);
			var email = {
				Source: "mikemillspdx@gmail.com",
				Destination: {
					ToAddresses: request.params.email
				},
				Message: {
					Subject: {
						Data: request.params.subject
					},
					Body: {
						Data: request.params.body
					}
				}
			};
		
			var ses = new AWS.SES();
			AWS.config.update({
						"accessKeyId": "",  
						"secretAccessKey": "",
						"region": "us-west-2"
					});

			/*ses.sendEmail(email, 
			function (err, data) {
				if(err){
					console.log("An Error Occured");
				}
				else
				{
					console.log("Success");
				}
			});
			*/
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write("email sent" + "\n");
			response.end();
			return;
}

exports.loadsite = function (request, response, next)
{
	console.log('Called Load Site');

  	var uri = url.parse(request.url).pathname
    , filename = path.join(process.cwd(), uri);

    console.log(request);
    console.log(response);

  if(request.url.toLowerCase().indexOf("/controllers/") > -1)
	filename = "";
  if(request.url.toLowerCase().indexOf("/appServer/") > -1)
	filename = "";
  if(request.url.toLowerCase().indexOf("/utilities/") > -1)
	filename = "";

  path.exists(filename, function(exists) {
    if(!exists) {
      response.writeHead(404, {"Content-Type": "text/plain"});
      response.write("404 Not Found\n" + filename );
      response.end();
      return;
    }

    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

	console.log(filename);
	fs.readFile(filename, "binary", function(err, file) {
		if(err) {        
			response.writeHead(500, {"Content-Type": "text/plain"});
			response.write(err + "\n");
			response.end();
			return;
		}
		var responseType = "";	  
		//fix specifically for contenttype in css, if not included IE9 it doesn't render for security purposes 
		switch(path.extname(filename))
		{
		case ".html":
			responseType = "text/html";
			break;
		case ".js":
			responseType = "text/javascript";
			break;
		case ".css":
			responseType = "text/css";
			break;	
		default:
			//nada
			break;
		}
		console.log(responseType);
		responseType !== "" ? response.writeHead(200, {"Content-Type": responseType}) : false;
		response.write(file, "binary");
		response.end();
	});
  }); 

} 
