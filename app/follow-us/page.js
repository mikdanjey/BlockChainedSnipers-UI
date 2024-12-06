import { getCurrentUser } from "@/actions/getCurrentUser";
import FollowUs from "@/components/ModernSchooling/FollowUs";

export const metadata = {
  title: "Home | Blockchained Snipers - React Next.js Education LMS Template",
};

export default async function Home() {
  const currentUser = await getCurrentUser();
  return <FollowUs />;
}
