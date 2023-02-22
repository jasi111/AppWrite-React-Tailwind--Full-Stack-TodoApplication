import axios from "axios";
import { useState, useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
function DisplayTask() {
  const [taskData, setTaskData] = useState(null);

  const fetchTasksData = async () => {
    const resp = await axios.get("/getTodos");
    console.log(resp);

    if (resp.data.todos.length > 0) {
      setTaskData(resp.data.todos);
      //   console.log("datat=result", taskData);
    }
  };

  // EDIT
  const handleEdit = async (todo) => {
    const todoName = prompt("Enter Todo");

    if (!todoName) {
      alert("Please Enter Todo");
    } else {
      const resp = await axios.put(`/editTodo/${todo._id}`, {
        title: todoName,
      });
      console.log(resp);
    }
  };

  // DELETE
  const handleDelete = async (todoId) => {
    const resp = await axios.delete(`/deleteTodo/${todoId}`);
    console.log(resp);
  };

  useEffect(() => {
    fetchTasksData();
  }, [taskData]);

  return (
    <div className="text-gray-600 mx-auto body-font h-screen bg-mybg">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-textColor">
            Your Todos
          </h1>
        </div>
        <div className="lg:w-2/3 w- mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap border-white">
            <thead className="center">
              <tr className=" mr-5 ">
                <th className="text-gray-500 title-font pl-5 tracking-wider font-medium text-sm  bg-gray-900 rounded-tl">
                  Todos
                </th>
                {/* text-gray-900 */}

                <th className=" bg-gray-900 title-font tracking-wider font-medium text-textColor text-sm">
                  Edit
                </th>
                <th className="  bg-gray-900  title-font tracking-wider font-medium text-textColor text-sm  rounded-tr">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody className="border-secondBg tracking-wider">
              {taskData &&
                taskData.map((todo) => (
                  <tr className=" border-white">
                    <td className="pl-5 text-mainText pt-3">{todo.title}</td>

                    <td className="pt-3 ">
                      <AiFillEdit
                        onClick={() => handleEdit(todo)}
                        className="hover:text-textColor text-gray-500 text-center cursor-pointer text-2xl"
                      />
                    </td>

                    <td className=" pt-3 text-lg">
                      <MdDeleteForever
                        onClick={() => handleDelete(todo._id)}
                        className="hover:text-textColor text-gray-500 text-center cursor-pointer text-2xl"
                      />
                    </td>
                    <td>
                      <form action="post">
                        <input type="checkbox" name="Completed" id="" />
                      </form>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DisplayTask;
