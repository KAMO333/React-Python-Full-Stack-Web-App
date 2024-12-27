import React, { useState } from "react";
import { Input, Fieldset, Textarea, Flex, IconButton } from "@chakra-ui/react";
import { Button } from "./ui/button";
import { Field } from "./ui/field";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { BiEditAlt } from "react-icons/bi";
import { BASE_URL } from "../App";
import { toaster } from "./ui/toaster";

const EditModal = ({ setUsers, user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: user.name,
    role: user.role,
    description: user.description,
  });
  const handleEditUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/friends/" + user.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) =>
        prevUsers.map((u) => (u.id === user.id ? data : u))
      );
      toaster.success({
        type: "success",
        title: "Yayy! 🎉",
        description: "Friend updated successfully.",
        duration: 2000,
      });
    } catch (error) {
      toaster.create({
        type: "error",
        title: "An error occurred.",
        description: error.message,
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <DialogRoot placement="top" motionPreset="slide-in-top">
        <DialogTrigger asChild>
          <IconButton
            variant="ghost"
            colorScheme="blue"
            aria-label="See menu"
            size={"sm"}
          >
            {<BiEditAlt size={20} />}
          </IconButton>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle textAlign={"center"}>My New BFF 😍 </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditUser}>
            <DialogBody pd={6}>
              <Flex alignItems="center" gap={4}>
                <Field label="Full Name" flex={1}>
                  <Input
                    placeholder="John Doe"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </Field>
                <Field label="Role" flex={1}>
                  <Input
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs((prev) => ({ ...prev, role: e.target.value }))
                    }
                  />
                </Field>
              </Flex>
              <Fieldset.Root mt={4}>
                <Fieldset.Legend>Description</Fieldset.Legend>
                <Textarea
                  resize="none"
                  overflowY="hidden"
                  placeholder="He's a software engineer who loves to code and build things."
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                />
              </Fieldset.Root>
            </DialogBody>

            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button
                  colorPalette="blue"
                  mr={3}
                  type="submit"
                  isLoading={isLoading}
                >
                  Update
                </Button>
              </DialogActionTrigger>

              <DialogActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogActionTrigger>
            </DialogFooter>
          </form>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default EditModal;
