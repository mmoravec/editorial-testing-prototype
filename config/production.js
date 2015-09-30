module.exports = {
  "port": 3000,
  "domains": {
    "www": "http://playground.optimizely.com"
  },
  "services": {
    "mailgun":{
      "MAILGUN_DOMAIN":"sandbox1b7b48380d114953965e5079ae11c744.mailgun.org",
      "MAILGUN_API_KEY":"key-5126df1da6124ca69c5a9c407d4a802b",
      "MAILGUN_FROM_ADDRESS":"support@optimizely.com",
      "MAILGUN_TEST_MODE":true
    },
    "s3":{
      "assets":"https://s3.amazonaws.com/optimizely-playground/assets"
    },
    "facebook":{
      "FACEBOOK_APP_ID":"",
      "FACEBOOK_APP_SECRET":""
    },
    "twitter":{
      "TWITTER_CONSUMER_KEY":"",
      "TWITTER_CONSUMER_SECRET":""
    },
    "mongo":{
      "DB":"playground",
      "USER":"playground",
      "PASSWORD":"CarrotSt1ck$",
      "PORT":"27017",
      "DOMAIN":"localhost"
    }
  }
}