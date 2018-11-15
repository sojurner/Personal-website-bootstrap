import React from 'react';

import { Modal, Button, Image } from 'react-bootstrap';
import './ProjectModal.css';
export const ProjectModal = ({ show, handleClose, project }) => {
  const redirect = (event, link) => {
    event.preventDefault();
    window.location = link;
  };
  const imgs = project.technologies.map(tech => {
    return (
      <img
        height="40"
        className="modal-tech"
        name={tech}
        src={require(`../../assets/Images/${tech}.png`)}
      />
    );
  });
  return (
    <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          height
          thumbnail
          src={require(`../../assets/Images/${project.title}.gif`)}
        />
        <div className="imgs">{imgs}</div>

        <h1 className="project-modal-description">{project.description}</h1>
      </Modal.Body>
      <Modal.Footer>
        <div className="icon-links">
          <i
            class="fab fa-github-alt"
            onClick={e => redirect(e, project.githubURL)}
          />
          <i
            class="fas fa-laptop-code"
            onClick={e => redirect(e, project.githubPages)}
          />
        </div>
      </Modal.Footer>
    </Modal>
  );
};