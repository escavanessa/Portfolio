import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <>
      <h1 className='hidden-project'>My Projects!</h1>
      <div class="project-container" id='project-container'>



        <div class="project-1 animate__animated animate__fadeIn">
          <div className='p1'>
            <p>Job Dashboard</p>
          </div>
        </div>
        <div class="project-2 animate__animated animate__fadeIn">
          <div className='p2'>
            <p>NASA Open API</p>
          </div>
        </div>
        <div class="project-3 animate__animated animate__fadeIn">
          <div className='p3'>
            <p>Little Lemon</p>
          </div>
        </div>
        <div class="project-4 animate__animated animate__fadeIn">
          <div className='p4'>
            <p>NoteBook</p>
          </div>
        </div>




        <div class="desc-1">
          <p>
            Desktop Job DashBoard. Made with React and Tailwind. It is fully functional - you can filter job searches in the UK by company, title, and location. An aside displays the appropriate description based on whihc job you click.
          </p>
        </div>
        <div class="desc-2">
          <p>
            Originally this was supposed to be ONLY a mobile app. I used React and multiple different APIs from Nasa Open API including asteroid information, images from Mars, a daily image from NASA plus the appropriate description, and information on solar flares. I used vanilla CSS for the styling and I am working on converting this to be a dashboard for desktop.
          </p>
        </div>
        <div class="desc-3">
          <p>
           The Coursera Capstone project. I used React and Tailwind to build a fully functional reservation system for the Little Lemon website. Its important to note the API Coursera provided did not work so I had no access to data and had to build it myself with the help of a brilliant friend.
          </p>
        </div>
        <div class="desc-4">
          <p>
            A productivity tracker/ notebook for personal use. Built with React and Vanilla CSS. This is the project ive wanted to build for the longest time and I enjoyed every moment. It includes the ability to add notebooks, sticky notes, a calender adn so on.
          </p>
        </div>
      </div>
    </>
  )
}

export default Projects