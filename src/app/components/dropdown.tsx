import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { FaChevronDown } from "react-icons/fa";

export default function Navbar () {

    return (
        <div>
            <Menu>
                <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                    Actions
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}