import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import { removeToDo, handleCheckBox } from "../../store/slice/todoSlice";
import { FiFeather } from "react-icons/fi";

export default function ToDoList() {
  const dispatch = useDispatch();
  const { to_do_list } = useSelector((state) => state.app);

  console.log(to_do_list);

  if (to_do_list === null || to_do_list.length === 0) {
    return <>
      <div className="p-3">
      <p style={{color:"#444857"}}><FiFeather /> There is no To Do...</p>
      </div>
    </>;
  }
  return (
    <>
      <div className="py-3">
        {Array.isArray(to_do_list) &&
          to_do_list.map((todo) => (
            <div key={todo?.id} className="d-flex gap-3">
              {/* todo list */}
              <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo?.completed}
                  onChange={() =>
                    dispatch(
                      handleCheckBox({
                        id: todo?.id,
                        completed: !todo?.completed,
                      })
                    )
                  }
                />
                <p
                  className="mb-0"
                  style={
                    todo?.completed === true
                      ? { textDecoration: "line-through", color: "#b3b3b3" }
                      : { textDecoration: "none" }
                  }
                >
                  {todo?.todo}
                </p>
              </div>
              {/* action icon */}
              <div className="d-flex">
                <span onClick={() => dispatch(removeToDo(todo?.id))}>
                  <FiX />
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
