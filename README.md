# account-dashboard
MEAN web app that is used to generate account level reports

## Running Locally ##
NOTE: If you do not have xcode command tools installed please do so by running the following command in the terminal xcode-select --install

1. Download and install MEAN stack from Bitnami https://bitnami.com/stack/mean
2. When installing choose RockMongo and MongoDB if asked, Remember the password you set as you will need this later! 
3. Once installed open your terminal
4. Go to /Applications/<your-mean-stack-version>/apps
5. Type mkdir dashboard
6. Checkout the latest code from GitHub in the dashboard folder
7. Start the mean shelll by typing use_meanstack
8. Enter the mongo console by typing mongo admin --username root --pasword YOURPASSWORD
9. Create a new database called dashboard by typing use dashboard
10. Run the following code to create a user for the dashboard DB
```
db.createUser({ user: "dashboardAdmin",
  pwd: "CarrotSt1ck$",
   "roles": [
     {
       "role": "readWrite",
       "db": "dashboard" 
    } 
  ]
});
```
11. Exit mongo by typing exit
12. open the file located at /Applications/<your-mean-stack>/scripts/setenv.sh
13. ADd the following to the bottom of the file export NODE_ENV=local
14. Download dependencies by typing npm install from your dashboard folder
15. Update dependencies by typing npm update
16. Start the server by typing npm start
17. open a browser and go to http://localhost:3000/ in your browser
