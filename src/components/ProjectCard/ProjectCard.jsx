import React from 'react';
import PropTypes from 'prop-types';
import ProjectData from 'components/ProjectData/ProjectData';
import ProjectGallery from 'components/ProjectGallery/ProjectGallery';
import styles from './ProjectCard.module.sass';

function ProjectCard({ project }) {
  const { img, ...data } = project;

  return (
    <div className={styles.card}>
      <ProjectData data={data} />
      <ProjectGallery img={img} />
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    proyecto: PropTypes.string,
    servicio: PropTypes.string,
    año: PropTypes.number,
    img: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ProjectCard;
