"use server";

const SuspensePreloader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <div className="loadingio-spinner-reload">
          <div className="ldio">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspensePreloader;
