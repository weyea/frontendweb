export default {
    get: function(url, params, callback){
        if(typeof params == "function"){
            callback = params;
            params = {}
        }
        if(debug){
            callback&&callback()
        }
        else{
            $.get(url, params, callback)
        }


    },
    post: function(url, params, callback){
        if(typeof params == "function"){
            callback = params;
            params = {}
        }
        if(debug){
            callback&&callback()
        }
        else{
            $.get(url, params, callback)
        }
    }
}

