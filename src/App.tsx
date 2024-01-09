import { useState } from "react";
import "./App.css";
import Editor from "./component/Editor";
import MemoCard from "./component/memoCard/memoCard";

function App() {
  return (
    <>
      <main className="main">
        <section className="memo-list">
          <MemoCard></MemoCard>
        </section>
        <section className="memo-pad">
          <Editor></Editor>
        </section>
      </main>
    </>
  );
}

export default App;
