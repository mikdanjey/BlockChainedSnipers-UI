export async function getCourses(params) {
  const { q, sort } = params;
  try {
    const courses = [];
    return { courses };
  } catch (error) {
    // console.error("Error fetching counts:", error);
  }
}

export async function getHomepageCourses() {
  try {
    const courses = [];

    return { courses };
  } catch (error) {
    // console.error("Error fetching counts:", error);
  }
}
