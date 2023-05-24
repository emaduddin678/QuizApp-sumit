import React, { useState } from "react";

const YourComponent = () => {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(registerFormData)
    setRegisterFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
      <div>
        {/* {console.log(registerFormData)} */}
      <input
        type="text"
        name="name"
        value={registerFormData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={registerFormData.email}
        onChange={handleChange}
      />
      {/* Other input fields */}
    </div>
  );
};

export default YourComponent;
