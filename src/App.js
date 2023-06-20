import { Box, Flex, Avatar, Image, Text, Stack,Tooltip, Icon, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {HiOutlineSwitchHorizontal} from 'react-icons/hi'
import {BiCalendar} from 'react-icons/bi'
import {MdTaskAlt, MdDashboard} from 'react-icons/md'
import { FaYoast, FaAlgolia, FaAirFreshener, FaWhatsapp } from 'react-icons/fa';
import Logo from '../src/images/logo.png'
import Dashboard from "./Components/DashBoard";
import './index.css'

function Navbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      bg="lightpink"
      p={4}
      height={35}
      position="fixed"
      width="73rem"
      ml={113}
      mt={-8}
    >
      <Text>Mount Camel School</Text>
      <Flex align="center" mr="-46rem" w="283px" justify="space-evenly">
        {/* <Icon as={FaHome} boxSize={20} color="gray" mr={4} cursor="pointer" /> */}
        
        {/* <Box as={FaSearch} boxSize={20} color="gray" mr={4} cursor="pointer" /> */}
        <Tooltip  label="English" aria-label="Home Tooltip" placement="bottom" padding={2} border="1px solid" background="white">
        <Image cursor="pointer" src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg" height="15px" width="20px"/>
          </Tooltip>
        
        
        <Tooltip label="Currency" aria-label="User Menu Tooltip" borderRadius="10px" mt="5px" placement="bottom-end" padding="2px" color="white" backgroundColor="lightpink">
          <select style={{background: "none", border: "none", color: "gray", width: "50px"}}>
            <option>USD</option>
            <option>EUR (€)</option>
            <option>INR (₹)</option>
            <option>RUB (RUB)</option>
          </select>
            </Tooltip>
        {/* <div className="hover-conatiner"> */}
        <Box as={HiOutlineSwitchHorizontal} boxSize={20} color="gray" mr={4} cursor="pointer" />
        {/* <span className='show-text'>SwithClass</span> */}
        {/* </div> */}
        <Box as={BiCalendar} boxSize={20} color="gray" mr={4} cursor="pointer" />
        <Box as={MdTaskAlt} boxSize={20} color="gray" cursor="pointer" />
        <Box as={FaWhatsapp} boxSize={20} color="gray" mr={4} cursor="pointer" />
      </Flex>
      <Flex align="center">
        <Avatar size="sm" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZNQ_QBku9NeOeZzRgBrriMKrq6LTmG7COa_gebSwTFpzIKy1-3kRZvtB0E5VqDcTcpQ&usqp=CAU" alt="Profile Picture" borderRadius="50%" height="20px" width="20px"/>
        
      </Flex>
    </Flex>
  );
}

function Sidebar() {
  const icons = [
    { name: "DashBoard", icon: <MdDashboard /> },
    { name: "Icon 2", icon: <FaAirFreshener /> },
    { name: "Icon 3", icon: <FaAlgolia /> },
    { name: "Icon 1", icon: <FaYoast /> },
    { name: "Icon 2", icon: <FaAirFreshener /> },
    { name: "Icon 3", icon: <FaAlgolia /> },
     { name: "Icon 1", icon: <FaYoast /> },
    { name: "Icon 2", icon: <FaAirFreshener /> },
    { name: "Icon 3", icon: <FaAlgolia /> },
    { name: "Icon 1", icon: <FaYoast /> },
    { name: "Icon 2", icon: <FaAirFreshener /> },
    { name: "Icon 3", icon: <FaAlgolia /> },
    // Add more icons here
  ];

  return (
    <div>
    <Box bg="lightpink" width={120} p={4} position="fixed" mt={-10} ml={-10}>
      <Image src={Logo} width="109px" height= "33px"  margin= "3px"/>
      <Stack spacing={2}>
        {icons.map((icon, index) => (
          <Flex key={index} align="center">
            {icon.icon}
            <Text ml={2}>{icon.name}</Text>
          </Flex>
        ))}
      </Stack>
    </Box>
    <Dashboard/>
    </div>
  );
}

function App() {
  return (
    <>
    <Box height="100vh" >
    <Navbar />
      <Flex>
      
      
        <Sidebar />
        {/* <Dashboard/> */}
        {/* Add the rest of your content here */}
        
      </Flex>
    </Box>
    
    </>
  );
}

export default App;
