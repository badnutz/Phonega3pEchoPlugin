var EchoPlugin = { 
    callNativeFunction: function (success, fail, resultType) { 
      return cordova.exec( success, fail, 
                           "com.cordovaMetaioCloudplugin.scheer.EchoPlugin", 
                           "Echo", [resultType]); 
    } 
};
module.exports = EchoPlugin;