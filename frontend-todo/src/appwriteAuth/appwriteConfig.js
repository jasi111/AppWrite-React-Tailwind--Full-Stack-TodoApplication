import {Client, Account, Databases} from 'appwrite'

const client = new Client();


// client.setEndpoint("http://localhost/v1").setProject("63de178d2725f2c2c9d2")// appwrite projectid
client.setEndpoint("http://localhost/v1").setProject("63de178d2725f2c2c9d2")// appwrite projectid


export const account = new Account(client)


//Database

export const databases = new Databases(client, "63d2260ec050426cde61") //appwrite database id