import React from "react";
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

const EditModal = () => {
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
          </DialogBody>

          <DialogFooter>
            <Button colorPalette="blue" mr={3}>
              Update
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
};

export default EditModal;
