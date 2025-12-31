import NavbarClient from './NavbarClient';
import { getMenuCategory } from '@/lib/navbarMenu';

export default async function Navbar() {
  const groupMenu = await getMenuCategory();
  
  return <NavbarClient menu={groupMenu} />;
}