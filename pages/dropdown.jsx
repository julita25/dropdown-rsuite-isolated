import React from "react";
import { Dropdown } from "rsuite";

const dropdown = () => {
  const renderLogo = (props, ref) => {
    console.log("img")
    return (
      <button {...props} ref={ref} type="button">
        hello
      </button>
    );
  };

  console.log("user menu");
  return (
    <Dropdown renderToggle={renderLogo} placement="rightEnd">
      <Dropdown.Item eventKey={1} className="flex justify-center w-full">
        Logout
      </Dropdown.Item>
    </Dropdown>
  );
};

export default dropdown;
