import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 24px;
  border-bottom: 3px solid #33bb77;
`;

const DayText = styled.div`
  font-size: 22px;
  color: #119955;
  padding-top: 5px;
`;

const DayString = styled.h1`
`;

const DateString = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoHead = () => {
  //@TODO 현재 시간을 표시해야합니다.
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const dayname = today.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <TodoHeadBlock>
      <DayText>
        <DayString>{dateString}</DayString>
        <DateString>{dayname}</DateString>
      </DayText>
    </TodoHeadBlock>
  );
};

export default React.memo(TodoHead);
