//.ts는 jsx문법 사용불가하고 오직 typescript문법만 사용가능

import { useState } from "react";
import LoginForm from "./LoginForm";
import { Uncontorolled } from "./Uncontrolled";
function App() {
  return (
   <div>
      <LoginForm/>
      <Uncontorolled/>
   </div>
  );
}

export default App;
