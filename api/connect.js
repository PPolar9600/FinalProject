import mysql from "mysql2"

export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Pob_9600",
    database: "social",
    port:3308
})