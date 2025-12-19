import { getMenu } from "@/lib/navbarMenu";
import FooterClient from "./FooterClient";

export default async function Footer() {
  const productMenu = await getMenu();

  return <FooterClient productMenu={productMenu} />;
}