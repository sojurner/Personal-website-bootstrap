import React from 'react';
import Modal from 'react-responsive-modal';
import './ProjectModal.css';

const ProjectModal = ({ show, handleClose, project }) => {
  const redirect = link => {
    const newTab = window.open(link, '_blank');
    newTab.focus();
  };
  return (
    <Modal open={show} onClose={handleClose}>
      <header className="modal-header">
        <h1>{project.title}</h1>
        <div className="imgs">
          {project.technologies.map((tech, index) => {
            return (
              <img
                key={`tech-${index}`}
                height="30"
                alt="Technology stack skills"
                className="modal-tech"
                name={tech}
                src={`https://res.cloudinary.com/paulkim/image/upload/v1552393728/images/skills/${tech}.png`}
              />
            );
          })}
        </div>
      </header>

      <img
        alt="Project screen shot"
        className="modal-project-image"
        src={project.img_url}
      />
      <section className="modal-section-links">
        <p className="project-modal-description">{project.description}</p>
        <div className="icon-links">
          <i
            className="fab fa-github-alt"
            onClick={redirect.bind(null, project.githubURL)}
          />
          <i
            className="fas fa-laptop-code"
            onClick={redirect.bind(null, project.githubPages)}
          />
        </div>
      </section>
    </Modal>
  );
};

export default ProjectModal;
