import React from "react";
import { Button } from "../../components/Button";
import TextField from "../../components/TextField";
import { useState } from "react";

export const AddUser = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
     setValues({ name:"", email:"",});
     console.log(values);

  }
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        value={values.name}
        onChange={(e) => setValues({...values, name: e.target.value})}
        inputProps={{ type: "text", placeholder: "Enter the name" }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({...values, email: e.target.value})}
        inputProps={{ type: "email", placeholder: "example@gmail.com" }}
      />
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
};
