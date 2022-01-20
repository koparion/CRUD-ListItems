const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db.js");
const { response } = require("express");

//middleware
app.use(cors());
app.use(express.json()); //requesting body, letting you add

// routes

// creating content to table

app.post("/create", async (request, response) => {
  try {
    // console.log(request.body);
    const { description } = request.body;
    const newTodo = await pool.query(
      // inserting into a table called addtodo and column named description then values-  ($1) is place holder
      "INSERT INTO addtodo (description) VALUES($1) RETURNING *", // return * is returning all the data//don't need to always have *, you can specify specific column you want like "description"
      [description] // value of the $1 creates dynamically
    );
   
    console.log(request.body);
    response.json(newTodo.rows[0]); // returns one row
  } catch (err) {
    console.error(err.message);
  }
});

// get all rows from table
app.get("/create", async (request, response) => {
  try {
    const toGetAll = await pool.query("SELECT * FROM addtodo"); // RETURNS TABLE
    response.json(toGetAll.rows); // returns all the rows
  } catch (err) {
    console.error(err.message);
  }
});
// return(get) one row
app.get("/create/:id", async (request, response) => {
  //:allows the url to be dynamic
  try {
    // console.log(request.params);
    //destructing
    const { id } = request.params;
    const getOne = await pool.query(
      "SELECT * FROM addtodo WHERE table_id = $1",
      [id]
    ); // returns the row the user wants
    // table_id is the name of the table
    // example:
    //  {
    //     "table_id": 4,
    //     "description": null
    // }
    response.json(getOne.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// update table
app.put("/create/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const { description } = request.body;
    const updateTable = await pool.query(
      "UPDATE addtodo SET description = $1 WHERE table_id = $2",
      [description, id]
    ); // $1 and $2 represent variables
    response.json("table was updated");
  } catch (err) {
    console.error(err.message);
  }
});

// delete table
app.delete("/create/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const deleteRow = await pool.query(
      "DELETE FROM addtodo WHERE table_id = $1",
      [id]
    );
    response.json("Row deleted");
  } catch (err) {
    console.log(err.message);
  }
});

// registering user
app.post("/register", async (request, response) => {
  try{
    const username = request.body.username;
    const password = request.body.passwordname;
    const add = await pool.query("INSERT INTO users (username, passwordname) VALUES ($1,$2) RETURNING *",[username,password]);
    
    response.send(add.rows[0])
  }catch(err){
    console.error(err.message);
  }
})

//getting user
app.get("/users", async (request, response) => {
  try{
    const user = await pool.query("SELECT * FROM users");
    response.json(user.rows)
  }catch(err){
    console.error(err.message);
  }
})
//login user
app.post("/login/:username", async (request, response) => {
  try{
    const username = request.body.username;
    const password = request.body.passwordname;
    const login = pool.query("SELECT * FROM users WHERE username=? AND passwordname=? VALUES ($1,$2)", [username, password],
     (result) => {
        if (result) {
          
          return response.send(result); // always needs a return when doing if statements
        }
        else {
         return response.send({ message: "Wrong login information" });
          
        }
        // response.json(`user ${username} logged in`)
      });
   



  }catch(err){
    console.error(err.message);
  }
})

app.listen(5000, () => {
  //setting port to listen on frontend
  console.log("server has started on port 5000");
});
