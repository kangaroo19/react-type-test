//.ts는 jsx문법 사용불가하고 오직 typescript문법만 사용가능

import { useState } from "react";
import { Profile } from "./component/Profile";
import { Counter } from "./component/Counter";
function App() {
  return (
   <div>
      <Profile name='재현' job='무직백수' age={25} />
      <Counter/>
   </div>
  );
}

export default App;
