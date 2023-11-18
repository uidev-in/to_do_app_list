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
    console.log(todoValue)

  return (
    <>
      <section className="pt-5">
        <Container>
          <Row>
            <Col md={12}>
              <p>Add your todolist</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="todo"
                  placeholder="write to do"
                  value={todoValue}
                  onChange={(e)=>{setToDoValue(e.target.value)}}
                  required
                />
                <button type="submit" className="mt-2">Add</button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
