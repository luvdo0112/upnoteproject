import React, { useState } from "react";
import "./memoCard.css";

interface UserItem {
  // 여기에 userItems의 각 객체에 들어갈 속성들의 타입을 지정해주세요
}

const MemoCard: React.FC = () => {
  const [savedUserItems, setSavedUserItems] = useState<UserItem[]>(
    JSON.parse(localStorage.getItem("userItems") || "[]")
  );

  const handleMemoDelete = (index: number) => {
    const updatedItems = savedUserItems.filter((_, i) => i !== index);
    localStorage.setItem("userItems", JSON.stringify(updatedItems));
    setSavedUserItems(updatedItems);
  };

  return (
    <ul className="memoCard">
      {savedUserItems.map((item: UserItem, index: number) => (
        <li className="memoCardLi" key={index}>
          {/* item 객체의 구조에 따라서 각 요소에 직접 접근하여 작업을 수행 */}
          <span className="memoCardTitle">
            {item.root.children[0].children[0].text}
          </span>
          <button type="button" onClick={() => handleMemoDelete(index)}>
            삭제
          </button>
        </li>
      ))}
    </ul>
  );
};

export default MemoCard;
