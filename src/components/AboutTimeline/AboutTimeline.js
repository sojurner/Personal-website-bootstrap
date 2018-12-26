import React from 'react';
import './AboutTimeline.css';
import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { EducationCard } from '../EducationCard/EducationCard';

export const AboutTimeline = () => {
  return (
    <section className="jumbo-experience-education">
      <section className="resume-experience-education">
        <ExperienceCard />
        <EducationCard />
      </section>
    </section>
  );
};