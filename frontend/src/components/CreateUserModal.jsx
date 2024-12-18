import React from "react";
import { Input, Fieldset, Textarea, Flex } from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";
import { Button } from "./ui/button";
import { Field } from "./ui/field";
import { Radio, RadioGroup } from "./ui/radio";
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

function CreateUserModal() {
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

          <DialogBody pd={6}>
            <Flex alignItems="center" gap={4}>
              <Field label="Full Name" flex={1}>
                <Input placeholder="John Doe" />
              </Field>
              <Field label="Role" flex={1}>
                <Input placeholder="Software Engineer" />
              </Field>
            </Flex>
            <Fieldset.Root mt={4}>
              <Fieldset.Legend>Description</Fieldset.Legend>
              <Textarea
                resize="none"
                overflowY="hidden"
                placeholder="He's a software engineer who loves to code and build things."
              />
            </Fieldset.Root>

            <RadioGroup mt={4}>
              <Flex gap={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Flex>
            </RadioGroup>
          </DialogBody>

          <DialogFooter>
            <Button colorPalette="blue" mr={3}>
              Add
            </Button>

            <DialogActionTrigger asChild>
              <Button variant="outline">Cancel</Button>
            </DialogActionTrigger>
          </DialogFooter>

          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
}

export default CreateUserModal;
