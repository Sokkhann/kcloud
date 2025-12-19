import React from 'react'
import NavbarClient from './NavbarClient';
import { getMenu } from '@/lib/navbarMenu';

export default async function Navbar() {
  const fullMenu = await getMenu();
  return <NavbarClient menu={fullMenu} />;
}