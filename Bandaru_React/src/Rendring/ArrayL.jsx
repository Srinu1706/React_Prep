import React from "react";

const ArrayL = () => {
  // const names=['pushpa','Raka','Aaraya','Bunny']

  const menuList = [
    { id: 1, name: "Vegetables", items: ["onion", "carrot", "Raw Banana"] },
    { id: 2, name: "fruits", items: ["Banana", "Orange", "Apple"] },
  ];
  return (
    <div>
      {menuList.map((menu) => {
        return (
          <>
            <h1>{menu.name}</h1>

            {menu.items.map((item) => {

              return <h2>{item}</h2>;
            })}
          </>
        );
      })}
    </div>
  );
};

export default ArrayL;
