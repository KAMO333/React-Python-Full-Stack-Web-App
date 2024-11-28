import React from "react";
import { Button } from "./ui/button";
import { BiAddToQueue } from "react-icons/bi";

function CreateUserModal() {
  return (
    <>
      <Button>
        <BiAddToQueue size={20} />
      </Button>
    </>
  );
}

export default CreateUserModal;
