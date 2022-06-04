import React from 'react';
import NavBar from 'components/NavBar/NavBar';
import ProjectCard from 'components/ProjectCard/ProjectCard';

import data from '../../public/data';

function Home() {
  return (
    <div className="wrapper">
      <NavBar />

      {
        data.map((project) => <ProjectCard project={project} key={project.proyecto} />)
      }
    </div>
  );
}

export default Home;
