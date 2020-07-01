import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateBtn from "./components/CreateBtn";
import Main from "./components/Main";
import CreatePage from "./components/CreatePage";

function App() {
  const [words, setWords] = useState("Hello React!");
  const [page, setPage] = useState(0);
  return (
    <>
      {page === 0 ? (
        <div>
          <Header setPage={setPage} />
          <Main />
          {words}
          <CreateBtn setPage={setPage} />
        </div>
      ) : (
        <div>
          <Header setPage={setPage} />
          <CreatePage words={words} setWords={setWords} />
        </div>
      )}
    </>
  );
}

export default App;
