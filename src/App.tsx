//.ts는 jsx문법 사용불가하고 오직 typescript문법만 사용가능

import { useState } from "react";
import { Profile } from "./component/Profile";
function App() {
  return (
   <div>
      <Profile name='name' job='job' age={25} />
   </div>
  );
}

export default App;
