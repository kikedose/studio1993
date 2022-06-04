import React, { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './ProjectGallery.module.sass';

function ProjectGallery({ img }) {
  const [index, setIndex] = useState(0);

  const handleClick = (event) => {
    event.preventDefault();
    setIndex(index === img.length - 1 ? 0 : index + 1);
  };

  return (
    <div
      className={styles.gallery}
      onClick={handleClick}
      onKeyPress={handleClick}
      role="button"
      tabIndex={0}
    >
      <Image
        src={`/static/${img[index]}`}
        alt={`img-${index}`}
        layout="responsive"
        width={1800}
        height={1200}
      />

    </div>
  );
}

ProjectGallery.propTypes = {
  img: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectGallery;
