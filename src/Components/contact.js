import React from 'react'

export default function Contact() {
  return (
    <div className="container-xxl pb-5" id="contact">
    <div className="container py-5">
        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
                <h1 className="display-5 mb-0">Let's Work Together</h1>
            </div>
        </div>
        <div className="row g-5">                
            <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">                    
                <form id="my-form" action="https://formspree.io/f/xayrndyl" method="POST">
                    <p id="my-form-status"></p>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name"/>
                                <label htmlFor="name">Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Your Email"/>
                                <label htmlFor="email">Your Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject"/>
                                <label htmlFor="subject">Subject</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a message here"name="message" id="message"
                                    style={{height: "100px"}}></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>                    
            </div>
        </div>
    </div>
</div>
  )
}
