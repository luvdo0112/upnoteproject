import React, { useState } from "react";
import "./memoCard.css";

const MemoCard: React.FC = () => {
  const [savedUserItems, setSavedUserItems] = useState<UserItem[]>(
    JSON.parse(localStorage.getItem("userItems") || "[]")
  );

  const handleSpanClick = (item: UserItem) => {
    const texts: string[] = item.root.children.map(
      (child: any) => child.children[0].text
    );
    alert(texts.join(" "));
  };

  const handleMemoDelete = (index: number) => {
    const updatedItems = savedUserItems.filter((_, i) => i !== index);
    localStorage.setItem("userItems", JSON.stringify(updatedItems));
    setSavedUserItems(updatedItems);
  };

  return (
    <ul className="memoCard">
      {savedUserItems.map((item: UserItem, index: number) => (
        <li className="memoCardLi" key={index}>
          <span className="memoCardTitle" onClick={() => handleSpanClick(item)}>
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
