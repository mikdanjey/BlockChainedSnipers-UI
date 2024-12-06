import { Suspense } from 'react';
import { getCurrentUser } from "@/actions/getCurrentUser";
import DashboardList from "@/components/Learning/DashboardList";
import SuspensePreloader from "@/components/_App/SuspensePreloader";

const Page = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div className="ptb-50">
      <div className="container">
        <h2 className="fw-bold mb-4">Dashboard</h2>
        <Suspense fallback={<SuspensePreloader />}>
          <DashboardList
            currentUser={currentUser}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default Page;
