import React, { useEffect } from 'react'
import $ from 'jquery';
import 'waypoints/lib/jquery.waypoints';


export default function Skill() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = $(window).scrollTop();
            const windowHeight = $(window).height();
            const offset = 0.8 * windowHeight; // 80% of the viewport height

            $('.skill').each(function () {
                const elementTop = $(this).offset().top;
                if (elementTop - scrollTop < offset) {
                    $(this).find('.progress-bar').each(function () {
                        $(this).css("width", $(this).attr("aria-valuenow") + '%');
                    });
                }
            });
        };

        $(window).on('scroll', handleScroll);

        // Clean up function to remove the scroll event listener when component unmounts
        return () => {
            $(window).off('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <div className="container-xxl py-6 pb-5" id="skill">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <h1 className="display-5 mb-5">Skills & Experience</h1>
                    <p className="mb-4">Continuously expanding my skill set. while actively pursuing new technologies to
                        stay at the forefront of innovation.</p>
                    <h3 className="mb-4">My Skills</h3>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">.Net MVC</h6>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">C#</h6>
                                    <h6 className="font-weight-bold">95%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="95"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Rest API's</h6>
                                    <h6 className="font-weight-bold">85%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="85"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Entity Framework</h6>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">MSSQL</h6>
                                    <h6 className="font-weight-bold">95%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Flutter</h6>
                                    <h6 className="font-weight-bold">75%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="75"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">Javascript</h6>
                                    <h6 className="font-weight-bold">80%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="skill mb-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-bold">PHP</h6>
                                    <h6 className="font-weight-bold">90%</h6>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5 active" data-bs-toggle="pill"
                                href="#tab-1">Experience</button>
                        </li>
                        <li className="nav-item w-50">
                            <button className="nav-link w-100 py-3 fs-5" data-bs-toggle="pill"
                                href="#tab-2">Education</button>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6">
                                    <h5>Team Lead</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2023 - Now</p>
                                    <h6 className="mb-0">Infobits PVT. LTD</h6>
                                </div>
                                <div className="col-sm-6">
                                    <h5>Software Developer</h5>
                                    <hr className="text-primary my-2"/>
                                    <p className="text-primary mb-1">2019 - 2023</p>
                                    <h6 className="mb-0">Infobits PVT. LTD</h6>
                                </div>
                            </div>
                        </div>
                        <div id="tab-2" className="tab-pane fade show p-0">
                            <div className="row gy-5 gx-4">
                                <div className="col-sm-6">
                                    <h5>Bachelor's in Computer Science</h5>
                                    <hr className="text-primary my-2"/>
                                    <h6 className="mb-0">Karachi University</h6>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
     )
}
