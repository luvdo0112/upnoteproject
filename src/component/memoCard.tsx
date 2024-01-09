import React from "react";

interface UserItem {
  // 여기에 userItems의 각 객체에 들어갈 속성들의 타입을 지정해주세요
}

const MemoCard: React.FC = () => {
  const savedUserItems: UserItem[] = JSON.parse(
    localStorage.getItem("userItems") || "[]"
  );

  return (
    <ul>
      {savedUserItems.map((item: UserItem, index: number) => (
        <li key={index}>
          {/* item 객체의 구조에 따라서 각 요소에 직접 접근하여 작업을 수행 */}
          {item.root.children[0].children[0].text}
        </li>
      ))}
    </ul>
  );
};

export default MemoCard;
