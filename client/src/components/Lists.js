import React, { useEffect, useState } from "react";
import Edits from "./Edits";

export default function Lists() {
  const [add, setAdd] = useState([]); // empty array of data that will have json data

  //retriving list from server
  const getList = async () => {
    try {
      const response = await fetch("http://localhost:5000/create");
      const jsonDataFetch = await response.json(); // getting json data back
      // console.log(jsonDataFetch);
      setAdd(jsonDataFetch);
    } catch (err) {
      console.log(err.message);
    }
  };
  //when the component is rendered, useEffect is used
  useEffect(() => {
    try {
      getList();
    } catch (err) {
      console.error(err.message);
    }
  }, []); //adding [] will come back with one request only

  //delete item fropm list
  const deleteItem = async (id) => {
    try {
      const fetchDeleteItem = await fetch(
        `http://localhost:5000/create/${id}`,
        {
          method: "DELETE",
        }
      );
      // console.log(id);
      // console.log(fetchDeleteItem);
      setAdd(add.filter((add) => add.table_id !== id)); // enables user to see directly on reduced list without refresh
    } catch (err) {
      console.error(err.message);
    }
  };

  //   console.log(Lists);
  return (
    <>
      <div className="container">
        <table className="table table-white table-hover text-center mt-2">
          <thead>
            <tr>
              <th scope="col" className="">
                Description
              </th>
              <th scope="col" className="px-0 mx-0">
                Update
              </th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {add.map((list) => (
              <tr key={list.table_id} className="">
                {/* <th scope="row">1</th> */}
                <td className="text-start px-3">{list.description}</td>
                <td>
                  <Edits add={list} />
                  {/* passing values to Edits.js */}
                </td>
                <td>
                  {/* to delete, it needs an argument of the id you are clicking onClick={() => deleteItem(list.table_id) */}
                  <button
                    onClick={() => deleteItem(list.table_id)}
                    className="btn btn-warning btn-block text-white"
                    style={{ backgroundColor: "darkred" }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td col="2">Larry the Bird</td>
      <td col="2">Larry</td>
    </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}
