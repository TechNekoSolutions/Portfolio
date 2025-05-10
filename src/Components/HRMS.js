import React from 'react'
import Contact from './contact'
import Header from './Header'

export default function HRMS() {
  return (
    <>
    {/* <div id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>     */}
    <div className="container-xxl py-6" id="projectheading">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex align-items-center mb-4">
                        <div className="years flex-shrink-0 text-right me-4">
                            <h1 className="display-1 mb-0">HRMS</h1>
                            <h5 className="mb-0">HUMAN RESOURCE MANAGEMENT</h5>
                        </div>
                        <h3 className="lh-base mb-0"></h3>
                    </div>
                    <p className="mb-4">I have four years of experience in software engineering, and my areas of expertise
                        are effective solution design, coding, and optimization. I assure smooth project outcomes by
                        staying innovative all the time.</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Payroll Module</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Employee HR Application</p>
                    <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Mobile Application</p>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="row g-3 mb-4 portfolio-container">
                        <div className="col-sm-12 portfolio-item">
                            <a className="btn-outline-secondary border-2 mx-1" href="img/hrms-1.jpg"
                                data-lightbox="portfolio">
                                <img className="img-fluid rounded " src="img/hrms-1.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                    <div className="row g-3 mb-4 portfolio-container">
                        <div className="col-sm-12 portfolio-item">
                            <a className="btn-outline-secondary border-2 mx-1" href="img/hrms-2.jpg"
                                data-lightbox="portfolio">
                                <img className="img-fluid rounded " src="img/hrms-2.jpg" alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid bg-light my-2" id="service">
        <div className="container">
            <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-6">
                    <h3 className="display-5 mb-0">Main Features</h3>
                </div>
            </div>
            <div className="row g-4">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-crop-alt fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Employee Management</h4>
                            <span>Efficiently streamline workforce operations with our HRMS project, offering robust
                                Employee Management features for seamless tracking, performance evaluation, and resource
                                optimization.</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-laptop-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Leave Management</h4>
                            <span>featuring a sophisticated Leave Management module designed to effortlessly handle
                                leave requests, optimize scheduling, and ensure accurate tracking for enhanced workforce
                                flexibility and productivity.</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-code-branch fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Salary Management</h4>
                            <span>Ensure accuracy and timeliness in salary processing for a streamlined and transparent
                                financial workflow.</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                        <div className="bg-icon flex-shrink-0 mb-3">
                            <i className="fa fa-code fa-2x text-dark"></i>
                        </div>
                        <div className="ms-sm-4">
                            <h4 className="mb-3">Mobile Application</h4>
                            <span>Empower employees with real time and easy access to business activities on the go with
                                Our ConnectHR Mobile App.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div className="container-xl py-5 px-5" style={{width: "71%"}} id="projectheading">
        <div className="container">
            <div className="g-5 row">
                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="align-items-center mb-4">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0" style={{fontSize: "2.5rem"}}>Payroll Module</h1>
                        </div>
                        <h3 className="lh-base mb-0"></h3>
                    </div>
                    <p className="mb-4 text-center">In just a few minutes, the entire payroll process can be finished—much
                        less time than other payroll systems demand. For groups of workers depending on selection
                        criteria such department, processing group, salary/hourly, etc., generate checks using
                        conventional computations. To address any modifications specific to the current payroll cycle,
                        edit unposted checks. Send off the batch of checks to finish the procedure. Print the checks.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="container-xl py-5 px-5" id="projectheading">
        <div className="container">
            <div className="g-5 row">
                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="align-items-center mb-4">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0" style={{fontSize: "2.5rem"}}>Employee HR Portal</h1>
                        </div>
                        <h3 className="lh-base mb-0"></h3>
                    </div>
                    <p className="mb-4 text-center " style={{margin: "auto auto", width: "75%"}}>With our full of features
                        Employee HR Portal, employees can check their own payroll, deductions, benefits, skills, and
                        other H/R information at any time. Employees can safely log in to our employee portal to check
                        their prior pay slips, leave balances, history of miscellaneous deductions and other
                        payroll-related data. This complete dashboard includes all of this and much more.

                    </p>
                </div>
                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-5 mb-0">Leave Management
                        </h5>
                        <p className="mb-4">

                        <ul className="mb-4">

                            <li>Review his assigned leaves and leave balances.</li>
                            <li>Generate Leave application/request.</li>
                            <li>Review Approved and Pending for approval leave applications.</li>
                            <li>Recall or cancel pending leave applications.</li>
                        </ul>
                        </p>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <h5 className="border-end pe-3 me-5 mb-0">Monthly Salary Management
                        </h5>
                        <p className="mb-4">
                        <ul>
                            <li>Review their monthly salary pay slip</li>
                            <li>Upload expense supporting docs (Scanned docs)</li>
                            <li>Review overtime hours</li>
                            <li>Download tax deduction certificate</li>
                            <li>Review salary structure</li>
                        </ul>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-xl py-5 px-5" style={{width: "71%"}} id="projectheading">
        <div className="container">
            <div className="g-5 row">
                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="align-items-center mb-4">
                        <div className="years flex-shrink-0 text-center me-4">
                            <h1 className="display-1 mb-0" style={{fontSize: "2.5rem"}}>Mobile Application</h1>
                        </div>
                        <h3 className="lh-base mb-0"></h3>
                    </div>
                    <p className="mb-4 text-center">Empower employees with real time and easy access to business activities
                        on the go with Our ConnectHR Mobile App.</p>
                    <div className="d-flex align-items-center mb-3">                        
                        <div className="col-sm-6 portfolio-item">
                            <a className="border-2 mx-1" href="img/mobile-hrm.png"
                                data-lightbox="portfolio">
                                <img className="img-fluid rounded " src="img/mobile-hrm.png" alt=""/>
                            </a>
                        </div>
                        <div className="col-sm-6">
                            <ul className="mb-4">
                                <li>Request Equipment, Leave, paid time off from mobile.</li>
                                <li>Track job costing project-wise with multiple check-ins/outs in a day.</li>
                                <li>Instantly see all employee data.</li>
                                <li>Review & approve attendance sheet.</li>
                                <li>Check in/out with GPS geofence.</li>
                                <li>View schedules in real-time.</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</>
  )
}
