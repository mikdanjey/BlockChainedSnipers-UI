import { getCurrentUser } from "@/actions/getCurrentUser";
import MainBanner from "@/components/ModernSchooling/MainBanner";

export const metadata = {
  title: "Home | Blockchained Snipers - React Next.js Education LMS Template",
};

export default async function Home() {
  const currentUser = await getCurrentUser();
  return <MainBanner />;
}
