import React from "react";
import { Card, Text, Box, Heading, IconButton, Flex } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";

const UserCard = ({ user }) => {
  return (
    <Card.Root>
      <Card.Header>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Avatar src="https://avatar.iran.liara.run/public" />
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal />
            <IconButton
              variant="ghost"
              colorPalette="red"
              size={"sm"}
              aria-label="See menu"
            >
              {<BiTrash size={20} />}
            </IconButton>
          </Flex>
        </Flex>
      </Card.Header>

      <Card.Body>{user.description}</Card.Body>
    </Card.Root>
  );
};

export default UserCard;
