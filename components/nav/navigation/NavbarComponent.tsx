import NavbarClient from './NavbarClient';
import { getMenuCategory, GroupedMenu } from '@/lib/navbarMenu';
export default async function Navbar() {
  const groupMenu = await getMenuCategory();

  const safeMenu: GroupedMenu = {
    Compute: groupMenu?.Compute ?? [],
    Networking: groupMenu?.Networking ?? [],
    Storage: groupMenu?.Storage ?? [],
  };

  return <NavbarClient menu={safeMenu} />;
}
