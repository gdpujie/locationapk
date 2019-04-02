cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-sms-receive.SMSReceive",
    "file": "plugins/cordova-plugin-sms-receive/www/SMSReceive.js",
    "pluginId": "cordova-plugin-sms-receive",
    "clobbers": [
      "window.SMSReceive"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-sms-receive": "1.0.1"
};
// BOTTOM OF METADATA
});