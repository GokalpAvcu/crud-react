import React from "react";

export const UserList = () => {
  const users = [];

  const renderCard = () => <div>Users here</div>;
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
