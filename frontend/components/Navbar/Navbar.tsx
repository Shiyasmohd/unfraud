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
            Unfraud
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="app">
          <button className="bg-[#0072F5] px-6 py-2.5 rounded-md">
            App
          </button>
          </Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </Layout>
  )
}
