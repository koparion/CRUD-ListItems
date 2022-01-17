import React , {useState} from "react";

function Inputs() {
    const[description, setDescription] = useState("");
        const  handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const body= {description};
            const response = await fetch ("http://localhost:5000/create",{
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body) // sends the body to the server
            });
            // console.log(response);
            window.location = "/";
        }catch(err){
            console.error(err.message);
        }
    }

    return (
        <>
        <h1 className="text-center mt-5">Item to Add</h1>
        <form className="d-flex mt-5" onSubmit={handleSubmit}>
            <input type="text" className="form-control" value={description} onChange={event => setDescription(event.target.value)}>
            </input>
            <button className="btn btn-success">Add</button>
        </form>
        </>
        
    )
}
export default Inputs;