var EchoPlugin = { 
    callNativeFunction: function (success, fail, resultType) { 
       cordova.exec( success, fail, 
                           "Echo", 
                           "Echo", [resultType]); 
    } 
};
module.exports = EchoPlugin;
