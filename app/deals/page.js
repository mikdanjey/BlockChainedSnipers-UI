import { getCurrentUser } from "@/actions/getCurrentUser";
import FeaturedCourses from "@/components/ModernSchooling/FeaturedCourses";

export const metadata = {
  title: "Home | Blockchained Snipers - React Next.js Education LMS Template",
};

export default async function Home() {
  const currentUser = await getCurrentUser();
  return (
    <div className="about-area ptb-100">
      <FeaturedCourses />
    </div>
  );
}
