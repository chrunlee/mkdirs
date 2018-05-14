var fs = require('fs');
var path = require('path');

module.exports = function mkdirsp( dirpath,mode ){
	mode = mode || parseInt('0777',8);

	if(typeof dirpath === 'function'){
		dirpath = dirpath();
	}
	dirpath = path.resolve(dirpath);
	return new Promise(function( resolve, reject ){
		try{
	        if (!fs.existsSync(dirpath)) {
	            var pathtmp;
	            dirpath.split(/[/\\]/).forEach(function (dirname) {
	                pathtmp ? pathtmp = path.join(pathtmp, dirname) : pathtmp = dirname;
	                if (!fs.existsSync(pathtmp)) {
	                	fs.mkdirSync(pathtmp, mode)
	                }
	            });
	        }
	        resolve();
	    }catch(e){
	        reject(e);
	    }
	});
}
