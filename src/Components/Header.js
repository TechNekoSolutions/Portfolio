import React from 'react'

export default function Header() {
  return (
    <div className="container-fluid bg-light my-6 mt-0" id="home">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 py-4 pb-0 pt-lg-0" style={{ minHeight: "50vh" }}>
            <h3 className="text-primary mb-3">We are</h3>
            <h1 className="display-3 mb-3">TechNeko</h1>
            <h2 className="typed-text-output d-inline"></h2>
            <div className="typed-text d-none">
              Web Designer, Web Developer, Front End Developer, Apps Designer,
              Apps Developer
            </div>
            {/* <div className="d-flex align-items-center pt-5">
                        <a href="" className="btn btn-primary py-3 px-4 me-5">Download CV</a>
                        <button type="button" className="btn-play" data-bs-toggle="modal"
                            data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                    </div>
                    <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">                    
                        <div className="d-flex pt-2">
                            <a className="btn btn-square btn-primary me-2" target="_blank"
                                href="https://www.linkedin.com/in/syed-jahanzaib-321a7122b/"><i
                                    className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-square btn-primary me-2" href=""><i className="fab fa-upwork"></i></a>
                            <a className="btn btn-square btn-primary me-2" target="_blank"
                                href="https://github.com/Jahainzaib"><i className="fab fa-github"></i></a>
                        </div>
                    </div> */}
          </div>
          <div className="col-lg-6">
            <img className="img-fluid" src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
