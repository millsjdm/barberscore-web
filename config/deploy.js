/* jshint node: true */

module.exports = function(deployTarget) {

  ENV['bugsnag'] = {
    apiKey: process.env.BUGSNAG_API_KEY,
    publicUrl: "https://www.barberscore.com"
  };


  return ENV;
};
