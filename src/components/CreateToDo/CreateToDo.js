import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import { addToDo } from "../../store/slice/todoSlice";


export default function CreateToDo() {
    const dispatch = useDispatch();
    const [todoValue,setToDoValue]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        let todoObj={
            id: nanoid(),
            todo:todoValue,
            completed:false
        }
        setToDoValue('')
        dispatch(addToDo(todoObj));
    }

  return (
    <>
      <section className="">
              <form className="d-flex gap-3 align-items-center" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="todo"
                  placeholder="New Todo"
                  value={todoValue}
                  onChange={(e)=>{setToDoValue(e.target.value)}}
                  required
                />
                <button type="submit" className="rounded">Add</button>
              </form>
      </section>
    </>
  );
}
