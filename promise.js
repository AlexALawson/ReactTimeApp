function addPromise(a,b){
	return new Promise(function (resolve, reject){
		if(typeof a === 'number' && typeof b === 'number'){
			resolve(a + b)
		} else {
			reject('Not a number')
		}
	});
}

addPromise(6, 7).then(function(result){
	console.log("Promise Succes", result);
	}, function(err){
		console.log("Promise Error", err)
});