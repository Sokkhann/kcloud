import NavbarClient from './NavbarClient';
import { getMenuCategory } from '@/lib/navbarMenu';

export default async function Navbar() {
  const groupMenu = await getMenuCategory();

  // FIX: Ensure it is always an object with the required keys
  const fallback = { Compute: [], Networking: [], Storage: [] };

  // If groupMenu is empty or null, use fallback
  const safeMenu = (groupMenu && !Array.isArray(groupMenu)) ? groupMenu : fallback;

  return <NavbarClient menu={safeMenu} />;
}