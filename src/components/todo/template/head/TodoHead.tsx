import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 52px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DateText = styled.div`
  font-size: 26px;
  color: #119955;
  padding-left: 10px;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.

  const weekEng = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  const monthEng = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );

  const currTime = new Date();

  const korCurrTime = new Date(currTime.getTime());

  const FormatDate = (date:any) => {
    return (
      weekEng[date.getDay()] +
      " " +
      monthEng[date.getMonth()] +
      " " +
      date.getDate() +
      ", " +
      date.getFullYear()
    );
  };

  const dayString = "Tuesday";
  const dateString = "July 20, 2021";

  return (
    <TodoHeadBlock>
      <DayText>{FormatDate(korCurrTime)}</DayText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
