import axios from "axios";

const baseUrl = "http://localhost:4000";

const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(baseUrl);
    console.log(response.data);
    setToDo(response.data);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};

const addToDo = async (text, setText, setToDo) => {
  try {
    const response = await axios.post(`${baseUrl}/save`, { text });
    console.log(response.data);
    setText("");
    await getAllToDo(setToDo);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

const updateToDo = async (toDoId, text, setToDo, setText, setIsUpdating) => {
  try {
    const response = await axios.put(`${baseUrl}/update`, {
      _id: toDoId,
      text,
    });
    console.log(response.data);
    setText("");
    setIsUpdating(false);
    await getAllToDo(setToDo);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

const deleteToDo = async (_id, setToDo) => {
  try {
    const response = await axios.delete(`${baseUrl}/delete`, {
      _id,
    });
    console.log(response.data);
    await getAllToDo(setToDo);
  } catch (error) {
    console.error("Error adding todo:", error);
  }
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
