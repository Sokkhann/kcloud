import FooterClient from "./FooterClient";
import { getFullNavbarMenu } from "@/lib/navbarMenu";

export default async function Footer() {
  const productMenu = await getFullNavbarMenu();

  return <FooterClient productMenu={productMenu} />;
}