import React from 'react'
import NavbarClient from './NavbarClient';
import { getMenu } from '@/app/api/products/route';
import { NavbarProducts } from '@/type/dataTypes';
import { getFullNavbarMenu } from '@/lib/navbarMenu';

export default async function Navbar() {
  const fullMenu = await getFullNavbarMenu();
  return <NavbarClient menu={fullMenu} />;
}