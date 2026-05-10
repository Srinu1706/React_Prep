import React from "react";

const ArrayL = () => {
  // const names=['pushpa','Raka','Aaraya','Bunny']

  const menuItems = [
    { id: 1, name: "Vegetables", items: ["onion", "carrot", "Raw Banana"] },
    { id: 2, name: "fruits", items: ["Banana", "Orange", "Apple"] },
  ];
  return (
    <div>
      {
       menuItems.map((item)=>{
        return(
          <>
          <h1>{item.name}</h1>

          <>
          {
            item.items.map((item)=>{
              return <><p>{item}</p></>
            })
          }
          </>
          </>
        )
       })
      }
    </div>
  );
};

export default ArrayL;
