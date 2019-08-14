# comments
### MongoDB (installation & run)
1. Download mongodb local server from [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community) in zip format.

2. Extract the zip file.

3. Change the name of the folder to mongodb and move it to `C:\Users\{your name}`

4. Creat new folder with the name mongodb-data in `C:\Users\{your name}`

5. To start the server for the first time, in the terminal write (swich to C local disk first) :

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`./Users/{your name}/mongodb/bin/mongod.exe --dbpath=/Users/{your name}/mongodb-data`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR (if not working)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`\./Users/{your name}/mongodb/bin/mongod.exe --dbpath=/Users/{your name}/mongodb-data`

6. (optional) Download & use Robo 3T from [https://robomongo.org](https://robomongo.org) to display your DB content.

### Server
1. Go to the server directory and write in the terminal :

2. npm install

3. npm run dev

### Client
1. Go to the client directory and write in the terminal : 

2. npm install

3. npm run start
