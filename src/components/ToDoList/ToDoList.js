import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { FiX } from "react-icons/fi";
import { removeToDo } from "../../store/slice/todoSlice";

export default function ToDoList() {
const dispatch = useDispatch();
  const { to_do_list } = useSelector((state) => state.app);

  console.log(to_do_list);

  return (
    <>
      <div className="p-5">
        {Array.isArray(to_do_list) &&
          to_do_list.map((todo) => (
          <div key={todo?.id} className="d-flex gap-3">
            {/* todo list */}
            <div className="d-flex align-items-center gap-2">
              <input type="checkbox" checked={todo?.completed} />
              <p
                className="mb-0"
                style={
                  todo?.completed === true
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {todo?.todo}
              </p>
            </div>
            {/* action icon */}
            <div className="d-flex">
              <span onClick={()=>dispatch(removeToDo(todo?.id))}>
                <FiX />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
