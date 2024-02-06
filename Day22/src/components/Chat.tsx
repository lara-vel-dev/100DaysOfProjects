import { useState, useEffect, useRef } from "react";

const style = {
  main: `flex flex-col p-[10px] relative`,
};

const Chat = () => {
  const scroll = useRef();

  return (
    <>
      <main className={style.main}>
        <h1>Chat</h1>
      </main>
      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
