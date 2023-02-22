import axios from "axios";
import React, { useState } from "react";


function TodoForm() {
  const [title, setTitle] = useState("");

  // Function to add title
  const submitData = async () => {
    const data = {
      title: title,
    };
    const res = await axios.post("/createTodo", data);
    console.log(res);
  };
  // To handle the Default
  const handleSubmit = (event) => {
    event.preventDefault();
    // To submit the Data
    submitData();
    setTitle("");
  };

  return (
    <div>
      <div className="bg-mybg text-center ">
        <form onSubmit={handleSubmit}>
          <div className=" flex  justify-center pt-5">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Add New Todo"
              className="pl-2 rounded input input-bordered w-full max-w-xs "
            />
            {/* flex-auto flex-grow  */}

            <div className="">
              <button
                type="submit"
                className="text-textColor text-center  ml-1 px-2 bg-slate-50 rounded-full text-4xl"
              >
                {" "}
                +
              </button>
            </div>
          </div>
        </form>
       
      </div>
    </div>
  );
}

export default TodoForm;
