import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProjectData.module.sass';

function ProjectData({ data }) {
  const dataMap = Object.entries(data);

  return (
    <div className={styles.projectData}>
      {
          dataMap?.map((entry) => (
            <p key={entry[1]} className={styles.projectData__entry}>
              <strong>
                {entry[0]}
                &nbsp;
              </strong>
              {entry[1]}
            </p>
          ))
        }
    </div>
  );
}

ProjectData.propTypes = {
  data: PropTypes.shape({
    proyecto: PropTypes.string,
    servicio: PropTypes.string,
    año: PropTypes.number,
  }).isRequired,
};

export default ProjectData;
