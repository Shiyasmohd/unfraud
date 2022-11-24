import { Navbar, Button, Link, Text } from "@nextui-org/react";
import { Layout } from "./Layout";
import { AcmeLogo } from "./AcmeLogo";
import Logo from '../../public/logo.png'
import Image from "next/image";

export default function Topbar() {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Image src={Logo} alt="" width={25} height={25}/>
          <Text b color="inherit" hideIn="xs" className="ml-4 font-koulen tracking-widest">
            Health Chain
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="app">
            App
          </Navbar.Link>
          <button className="bg-[#0072F5] px-6 py-2.5 rounded-md">
            Login
          </button>
        </Navbar.Content>

        {/* <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content> */}

        {/* <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse> */}
      </Navbar>
    </Layout>
  )
}
