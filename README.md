# mkdirsp
create folders on async with promise

# usage

install with npm
```
$ npm install mkdirsp
```

call method like :
```
var mkdirsp = require('mkdirsp');

mkdirsp('/home/web/upload').then(function(){
	console.log('create success');
}).catch(function(e){
	console.log(e);
});

```

