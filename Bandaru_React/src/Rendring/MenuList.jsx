import React from "react";

const MenuList = () => {
  const menuList = [
    {
      id: 1,
      category: "Starters",
      items: [
        { id: 1, name: "Spring Roll" },
        { id: 2, name: "Paneer Tikka" },
        { id: 3, name: "Manchuria" },
      ],
    },
    {
      id: 2,
      category: "Main Course",
      items: [
        { id: 1, name: "Biryani" },
        { id: 2, name: "Fried Rice" },
        { id: 3, name: "Noodles" },
      ],
    },
    {
      id: 3,
      category: "Desserts",
      items: [
        { id: 1, name: "Ice Cream" },
        { id: 2, name: "Cake" },
        { id: 3, name: "Gulab Jamun" },
      ],
    },
  ];

  const handlebuttonClick = (item) => {
    console.log(item, item.id);
  };
  return (
    <div>
      {menuList.map((menu) => {
        return (
          <>
            <h1>{menu.category}</h1>

            {menu.items.map((item) => {
              return (
                <div>
                  <h2>{item.name}</h2>

                  <button onClick={() => handlebuttonClick(item)}>
                    Add to Cart
                  </button>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};

export default MenuList;
