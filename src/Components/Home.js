import React from 'react'
import Header from './Header'
import About from './About'
import Skill from './skill'
import Service from './service'
import Project from './project'
import Contact from './contact'
import $ from 'jquery';
import 'waypoints/lib/jquery.waypoints';


export default function Home() {
  return (
    <>    
    <About/>
    <Skill/>
    <Service/>
    <Project/>
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
      )
}
