import React, { useState } from "react";
import styled from "styled-components";

export default function SurveyTitle({ title, handleChangeTitle }) {
  const [editing, setEditing] = useState(false);

  function toggleEditing() {
    setEditing(!editing);
  }

  return (
    <Title>
      <Heading>
        {editing ? (
          <input type="text" value={title} onChange={handleChangeTitle} />
        ) : (
          title
        )}
      </Heading>
      <button onClick={toggleEditing}>
        {editing ? (
          <>
            <i className="fas fa-save icon" />
            Save Title
          </>
        ) : (
          <>
            <i className="fas fa-pen icon" />
            Edit Title
          </>
        )}
      </button>
    </Title>
  );
}

const Title = styled.div`
  
`;

const Heading = styled.h1`
  flex: 1 0;
  margin-right: 0.3em;
`;
