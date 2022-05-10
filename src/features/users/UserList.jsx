import React from "react";

export const UserList = () => {
  const users = [
    { id: "1", name: "Gökalp", email: "avcu219@gmail.com" },
    { id: "2", name: "Nuri", email: "nuri1966@gmail.com" },
  ];

  const renderCard = () =>
    users.map((user) => (
      <div className="bg-gray-300 p-5 flex items-center justify-between">
        <div>
        <h3 className="font-bold text-lg text-gray-700">{user.name}</h3> 
        <span>{user.email}</span>
        </div>
        <div>

        </div>
      </div>
    ));
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {users.length ? ( // kullanıcıların bir değere sahip olup olmadığını kontrol ediyorum
        renderCard()
      ) : (
        <p className="text-center col-span-2 text-gray-700 font-semibold">
          No User
        </p>
      )}
    </div>
  );
};
