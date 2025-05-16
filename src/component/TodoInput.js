import React from "react";

function TodoInput({ inputRef, onAdd }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="투두리스트를 입력하세요."
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <button onClick={onAdd}>등록</button>
    </div>
  );
}

export default TodoInput;
