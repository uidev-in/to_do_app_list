import React from "react";
import CreateToDo from "../components/CreateToDo/CreateToDo";
import ToDoList from "../components/ToDoList/ToDoList";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="shadow p-4">
              <p className="font-weight-bold">
                Add your <span style={{ color: "#1fb6ff" }}>ToDoList</span>
              </p>

              <ToDoList />
              <CreateToDo />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
