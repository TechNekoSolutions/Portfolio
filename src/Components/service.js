import React from 'react'

export default function Service() {
  return (
    <div className="container-fluid bg-light my-5 py-6" id="service">
    <div className="container">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
                <h1 className="display-5 mb-0">My Services</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
                <a className="btn btn-primary py-3 px-5" href="#contact">Hire Me</a>
            </div>
        </div>
        <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-crop-alt fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">Web Development</h4>
                        <span>I specialize in creating responsive, user-friendly websites with modern designs and efficient code. My focus is on delivering high-performance web solutions that meet your business needs.</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-laptop-code fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">App Development</h4>
                        <span>From concept to launch, I develop mobile applications that offer seamless user experiences. My approach ensures your app is robust, scalable, and optimized for all devices.
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-code-branch fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">Software Enhancement</h4>
                        <span>I enhance existing software by optimizing performance, improving functionality, and integrating the latest technologies. My goal is to enhance it in a way that fulfills all your needs.</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                    <div className="bg-icon flex-shrink-0 mb-3">
                        <i className="fa fa-code fa-2x text-dark"></i>
                    </div>
                    <div className="ms-sm-4">
                        <h4 className="mb-3">Software Support</h4>
                        <span>I provide comprehensive support services, including troubleshooting, updates, and maintenance, ensuring your software operates smoothly and efficiently.
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}
