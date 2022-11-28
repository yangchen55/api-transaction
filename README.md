# Transaction API
 this api is for our react transaction app which  ` ... link to react app repo ..`

 ... what this api ....

 ## how to us
 1. cl0ne this project by running  ` https://github.com/yangchen55/api-transaction.git`
 2. Run `cd api-transaction`
 3. RUn `npm i `
 4. Run `npm run dev`. you must have `nodemon` install in your system , otherwise run `npm i  nodemon -g   ` to install globally..

Now the project will be servers at ``;


## api
 this api server will be have 2 api endpoints
 1. user API
 2. transaction API


 alll the endpoint will follow the following path  `{rooturl}/api/v1`


## user API
 user api will use the following path `{rooturl}/ api/v1/user`. this api will allow client to create user, login and more.


|#| PATH | METHOD| IS PRIVATE | DESCRIPTION |
|-|------|-------|------------|-------------|
|1| `/` | POST   | FALSE      | CREATE NEW USER |


## Transaction API
 user api will use the following path `{rooturl}/ api/v1/transaction`. this api will allow client to do CRUD on transaction table.


 |#| PATH | METHOD| IS PRIVATE | DESCRIPTION |
 |-|------|-------|------------|--------------|
 |1| `/` | GET| TRUE | ALLOW USER TO FETCH THEIR TRANSSACTION ONLY |
|2| `/` | POST| TRUE | ALLOW USER TO POST NEW TRASACTION |DATA SHOULD BE SEND AS `{}` |
|3| `/` | PATCH| TRUE | ALLOW USER TO FETCH THEIR TRANSSACTION ONLY |{}
|4| `/` | DELETE| TRUE | ALLOW USER TO DELETE SINGLE OR MULTIPLE OF THEIR TRANSSACTION ONLY.clent should send the data as `[id1, id2]` |