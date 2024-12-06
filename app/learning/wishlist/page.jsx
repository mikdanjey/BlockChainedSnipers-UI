import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <div className="ptb-100">
        <div className="container">
          <h2 className="fw-bold mb-4">My Learning</h2>
          <ul className="nav-style1">
            <li>
              <Link href="/learning/my-courses/">All Courses</Link>
            </li>
            <li>
              <Link href="/learning/wishlist/">Wishlist</Link>
            </li>
          </ul>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-courses-box">
                <div className="courses-image">
                  <Link className="d-block image" href="#">
                    <Image
                      src="https://res.cloudinary.com/dev-empty/image/upload/v1680503063/krjd65qmdyjkmhfj3gzi.jpg"
                      alt="Pianoforall - Incredible New Way To Learn Piano &amp; Keyboard"
                      width={750}
                      height={500}
                    />
                  </Link>

                  <button className="btn fav">
                    <i className="bx bxs-heart"></i>
                  </button>

                  <div className="price shadow discount-price">
                    <del>$145</del>
                  </div>

                  <div className="price shadow">$49.99</div>
                </div>

                <div className="courses-content">
                  <div className="course-author d-flex align-items-center">
                    <Image
                      src="/images/avatar.png"
                      className="rounded-circle"
                      alt="image"
                      width={35}
                      height={35}
                    />
                    <span>Instructor1 User</span>
                  </div>
                  <h3>
                    <Link
                      title="Pianoforall - Incredible New Way To Learn Piano &amp; Keyboard"
                      href="#"
                    >
                      Pianoforall - Incredible New Way To Lear...
                    </Link>
                  </h3>
                  <p>
                    Learn Piano in WEEKS not years. Play-By-Ear &amp; learn to
                    Read Music. Pop, Blues, Jazz, Ballads, Improvisation,
                  </p>

                  <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                    <li>
                      <i className="flaticon-agenda"></i> 426 Lessons
                    </li>
                    <li>
                      <i className="flaticon-people"></i> 0 Students
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="text-center border py-3 fs-5">Empty</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
