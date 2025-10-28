"use client";

import { useState } from "react";

export default function MenuSample() {
  const [isOpen, setIsOpen] = useState("ボタンを押してみよう！");

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button type="button" onClick={handleOpen}>
        朝の挨拶
      </button>
      <button type="button" onClick={handleClose}>
        夜のお別れ
      </button>
      <p>
        {isOpen === true
          ? "おはようございます！"
          : isOpen === false
          ? "さようなら！"
          : isOpen}
      </p>
    </>
  );
}
