import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
           <Link to='/'>Home</Link> {/* You use the <Link /> component with the 'to' attribute instead of anchor tags. JSX */}
           {/* You need Link in addition to the BrowserRouter for this to work */}
          {/* <a href="">Home</a> */}
        </div>
        <div>
          <Link to='/About'>About</Link>
          {/* <a href="">About</a> */}
        </div>
        <div>
        <Link to='/Contact'>Contact</Link>
          {/* <a href="">Contact</a> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
