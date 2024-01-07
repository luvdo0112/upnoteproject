import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Editor from "./Editor";

function App() {
  return (
    <>
      <main className="main">
        <section className="memo-pad">
          <Editor></Editor>
        </section>
      </main>
    </>
  );
}

export default App;
