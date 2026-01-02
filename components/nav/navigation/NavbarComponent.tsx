import NavbarClient from './NavbarClient';
import { getMenuCategory } from '@/lib/navbarMenu';

export default async function Navbar() {
  const groupMenu = await getMenuCategory();

  const safeMenu = groupMenu || { Compute: [], Networking: [], Storage: [] };
  
  return <NavbarClient menu={safeMenu} />;
}