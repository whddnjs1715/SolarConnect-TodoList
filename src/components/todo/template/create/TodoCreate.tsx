import React, { useState } from "react";
import styled from "styled-components";
import { PlusCircleOutlined } from "@ant-design/icons";
import { Itodo } from "components/todo/TodoService";
import { todoValidation } from "utils/Validation";
import { DatePicker } from 'antd';

const CircleButton = styled.button<{ open: boolean }>`
  background: #33bb77;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  left: 50%;
  transform: translate(50%, 0%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  border-bottom: 1px solid #eeeeee;
`;

const InsertForm = styled.form`
  display: flex;
  background: #eeeeee;
  padding-left: 40px;
  padding-top: 36px;
  padding-right: 60px;
  padding-bottom: 36px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #dddddd;
  width: 70%;
  outline: none;
  font-size: 21px;
  box-sizing: border-box;
  color: #119955;
  &::placeholder {
    color: #dddddd;
    font-size: 16px;
  }
`;

const ErrorMessage = styled.div`
  width: 100%;
  font-size: 13px;
  text-align: left;
  color: red;
  padding-left: 40px;
  background: rgb(255, 255, 255);
`;

interface TodoCreateProps {
  nextId: number;
  createTodo: (todo: Itodo) => void;
  incrementNextId: () => void;
}

const TodoCreate = ({
  nextId,
  createTodo,
  incrementNextId
}: TodoCreateProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleToggle = () => setOpen(!open);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
    
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지

    createTodo({
      id: nextId,
      text: value,
      done: false,
      date: Date(),
    });
    incrementNextId(); // nextId 하나 증가
    setValue(""); // input 초기화
    setOpen(false); // open 닫기
  };

  const initialError = {
    errorMsg: "",
  };

  const [errors, setErrors] = useState(initialError);

  const checkValidation = (e: React.FocusEvent<HTMLInputElement>) => {
    setErrors({
      ...errors,
      errorMsg: todoValidation(value).message,
    });
  }

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={handleSubmit}>
          <Input
            autoFocus
            placeholder="What's need to be done?"
            onChange={handleChange}
            value={value}
            onBlur={checkValidation}
          />
          <DatePicker 
          />

          <CircleButton 
            onClick={handleToggle} 
            open={open}
          >
            <PlusCircleOutlined />
          </CircleButton>
        </InsertForm>
        {errors.errorMsg && <ErrorMessage>{errors.errorMsg}</ErrorMessage>}

      </InsertFormPositioner>
    </>
  );
};

export default React.memo(TodoCreate);