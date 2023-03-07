import React from "react";
import Modal from "./components/modal";
import {css} from '@stitches/core'


const Body = css({
  height: "100vh",
  width: "100%",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap:20
})

const App = () => {
  return (
    <div className={Body()}>
      <Modal Title="Estudo de design system (Storybook, Stitches, Radix)"/>
    </div>
  );
};


export default App;
