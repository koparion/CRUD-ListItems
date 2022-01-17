import React, { useState } from "react";
import axios from 'axios'

function Edits({add}) {
  //   console.log(props);
//   const { add } = props;
  // console.log(add);
  const [editDesciption, setEditDescription] = useState([add.description]);

  //editing the contents of table
  const handleUpdate = async (event) => {
    try {
        const data = {editDesciption};
    await axios.put(`http://localhost:5000/create/${add.table_id}`,{description: editDesciption})
    
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
//  const handleUpdate = async (event) => {
//     event.preventDefault();
//     const id = add.table_id;
//     try {
//         const body = { editDesciption};
//         const response = await fetch (`http://localhost:5000/create/${add.table_id}`,{
//             method: "PUT",
//             headers: {"Content-Type": "application/json"},
//             body: JSON.stringify(body) // sends the body to the server
//         });
//         // console.log(response);
//         window.location = "/";
//     }catch(err){
//         console.error(err.message);
//     }
// };

  const handleChange = (event) => {
      event.preventDefault();
      setEditDescription(event.target.value);
  }
  return (
    <>
      <div>
        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-warning btn-block"
          style={{ backgroundColor: "darkorange" }}
          data-bs-toggle="modal"
          data-bs-target={`#idT${add.table_id}`} //changing target to add.table_id allows to see exact item display
        >
          Edit
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id={`idT${add.table_id}`} //allows to see exact item by changing to add.table_id (add is the array and table_id is the column name)
          onClick={() => setEditDescription(add.description) } // resets back to original form
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "darkgray", textAlign: "center" }}
              >
                <h5
                  className="modal-title"
                  style={{ color: "yellow" }}
                  id="staticBackdropLabel"
                >
                  Edit Item
                </h5>
                {/* closing x button on top */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => setEditDescription(add.description) } // resets back to original form
                ></button>
              </div>
              {/* body */}
              <div className="modal-body">
                {/* input values */}
                <input
                  type="text"
                  className="form-control"
                  value={editDesciption}
                  onChange={handleChange} //ability to change the input
                />
              </div>
              {/* buttons footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={event => handleUpdate(event)} // function to confirm and update the list
                >
                  Confirm
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => setEditDescription(add.description) } // resets back to original form
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edits;
