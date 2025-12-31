import { getFooterMenu } from "@/lib/navbarMenu";
import FooterClient from "./FooterClient";

export default async function Footer() {
  const productMenu = await getFooterMenu();

  return <FooterClient productMenu={productMenu} />;
}