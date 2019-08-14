# comments
### MongoDB (installation & run)
1. download mongodb local server from [https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community) in zip format

2. extract the zip file

3. change the name of the folder to mongodb and move it to `C:\Users\{your name}`

4. creat new folder with the name mongodb-data in `C:\Users\{your name}`

5. to start the server for the first time, in the terminal write (swich to C local disk first) :

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`./Users/{your name}/mongodb/bin/mongod.exe --dbpath=/Users/{your name}/mongodb-data`

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OR (if not working)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`\./Users/{your name}/mongodb/bin/mongod.exe --dbpath=/Users/{your name}/mongodb-data`

### Server
1. go to the server directory

2. npm install

3. npm run dev

### Client
1. in the terminal write : npm install -g create-react-app

2. go to the client directory

3. npm install

4. npm run start
