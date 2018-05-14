var mkdirsp = require('../index');

var should = require('should');

var path = require('path');
var fs = require('fs');

describe('mkdirsp',function(){


	

	it('create folder with string',function( done ){
		var x1 = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
		var x2 = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
		var x3 = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
		var tmpPath = [x1,x2,x3].join('/');
		mkdirsp(tmpPath).then(function(){
			fs.exists(tmpPath,function( ok ){
				should(ok).be.exactly(true);
				done();
			})
		}).catch(function(e){
			throw e;
		});
	});

	it('create folder with function',function( done ){
		var x1 = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
		var x2 = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
		var x3 = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
		var tmpPath = [x1,x2,x3].join('/');
		mkdirsp(function(){
			return tmpPath
		}).then(function(){
			fs.exists(tmpPath,function(ok){
				should(ok).be.exactly(true);
				done();
			})
		}).catch(function(e){
			throw e;
		})
	})

});
