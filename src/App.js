import React, { useState } from "react";
import Catagory from "./catagory";
import Menu from "./menu";
import item from './data'



function App() {
const [menuitem,setMenuitem]=useState(item);
const[catagory,setCatagory]=useState([])

const filteritem=(catagory)=>{
  if(catagory==='all'){
    setMenuitem(item);
    return;
  }
  const newitem=item.filter((ite)=>ite.category===catagory);
  setMenuitem(newitem);
}

  return (
    <main>
      <section className="menu section">
<div className="title">
  <h2>our menu</h2>
  <div className="underline"></div>
</div>
<Catagory filteritem={filteritem} />
<Menu item={menuitem} />
      </section>
    </main>

  );
}

export default App;
