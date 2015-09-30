module.exports = {
  "port": 3000,
  "domains": {
    "www": "http://local.dashboard.optimizely.com:3000"
  },
  "services": {
    "mailgun":{
      "MAILGUN_DOMAIN":"sandbox1b7b48380d114953965e5079ae11c744.mailgun.org",
      "MAILGUN_API_KEY":"key-5126df1da6124ca69c5a9c407d4a802b",
      "MAILGUN_FROM_ADDRESS":"support@optimizely.com",
      "MAILGUN_TEST_MODE":true
    },
    "s3":{
      "assets":""
    },
    "optimizely":{
      "token":"004ed303e8ac994444cc1570f801ee05:fd251e5e"
    },
    "mongo":{
      "DB":"dashboard",
      "USER":"dashboardAdmin",
      "PASSWORD":"CarrotSt1ck$",
      "PORT":"27017",
      "DOMAIN":"localhost"
    }
  }
}