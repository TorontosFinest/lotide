const takeUntil = function (array, callback){
    let result = [];
    for (key of array){
        if(callback(key) === true){
            return result;
        }else{
            result.push(key)
        }
    }
    return result;
}