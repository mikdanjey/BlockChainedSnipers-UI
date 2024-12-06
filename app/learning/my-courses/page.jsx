import { myLearning } from "@/actions/myLearning";
import { getCategories } from "@/actions/getCategories";
import EnrolmentList from "@/components/Learning/EnrolmentList";

const Page = async () => {
  const { categories } = await getCategories();
  const { enrolments } = await myLearning();
  return (
    <div className="ptb-50">
      <div className="container">
        <h2 className="fw-bold mb-4">All Courses</h2>
        {categories.map((category) => (
          <>
            <EnrolmentList enrolments={enrolments} category={category} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Page;
