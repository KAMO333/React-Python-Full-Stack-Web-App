import React, { useState } from "react";
import { Input, Fieldset, Textarea, Flex } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { Radio, RadioGroup } from "./ui/radio";
import { BASE_URL } from "../App";
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
import { toaster } from "./ui/toaster";

function CreateUserModal({ setUsers }) {
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });

  const handleCreateUser = async (e) => {
    e.preventDefault(); // prevent page refresh
    setIsLoading(true);
    try {
      const res = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }

      toaster.success({
        title: "Yayy! 🎉",
        description: "Friend created successfully.",
        duration: 2000,
      });
      setUsers((prevUsers) => [...prevUsers, data]);

      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      }); // clear inputs
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
          <Button>
            <BiAddToQueue size={20} />
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle textAlign={"center"}>My New BFF 😍 </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleCreateUser}>
            <DialogBody pd={6}>
              <Flex alignItems="center" gap={4}>
                <Field label="Full Name" flex={1}>
                  <Input
                    placeholder="John Doe"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                </Field>
                <Field label="Role" flex={1}>
                  <Input
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
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
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
              </Fieldset.Root>

              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio
                    value="male"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    Male
                  </Radio>
                  <Radio
                    value="female"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    Female
                  </Radio>
                </Flex>
              </RadioGroup>
            </DialogBody>

            <DialogFooter>
              <DialogActionTrigger asChild>
                <Button
                  colorPalette="blue"
                  mr={3}
                  type="submit"
                  isLoading={isLoading}
                >
                  Add
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
}

export default CreateUserModal;
