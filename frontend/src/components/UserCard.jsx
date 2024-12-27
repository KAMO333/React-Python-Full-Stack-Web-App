import React from "react";
import { Card, Text, Box, Heading, IconButton, Flex } from "@chakra-ui/react";
import { Avatar } from "./ui/avatar";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal";
import { toaster } from "./ui/toaster";
import { BASE_URL } from "../App";

const UserCard = ({ user, setUsers }) => {
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(BASE_URL + "/friends/" + user.id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      toaster.success({
        type: "success",
        title: "Success",
        description: "Friend deleted successfully.",
        duration: 2000,
      });
    } catch (error) {
      toaster.create({
        title: "An error occurred",
        description: error.message,
        type: "error",
        duration: 4000,
        isClosable: true,
      });
    }
  };
  return (
    <Card.Root>
      <Card.Header>
        <Flex gap={4}>
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Avatar src={user.imgUrl} />
            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          <Flex>
            <EditModal setUsers={setUsers} user={user} />
            <IconButton
              variant="ghost"
              colorPalette="red"
              size={"sm"}
              aria-label="See menu"
              onClick={handleDeleteUser}
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
