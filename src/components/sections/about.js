import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;
  
    .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    
    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
    
    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

&:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  
  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
  
    .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);
    
        &:hover,
    &:focus {
      outline: 0;
      
            &:after {
        top: 15px;
        left: 15px;
      }
      
            .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }
    
        .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }
    
        &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }
    
        &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  
    useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

          sr.reveal(revealContainer.current, srConfig());
  }, []);

    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];
  
    return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! My name is Jeffry and I'm a electric PSD Engineer. My
              interest in electrical started back in 2015 when I decided to study at University of Riau
              with majoring electrical engineer.
              Let's learn more about electrical to make a better electricity!
            </p>

            <p>
             Fast-forward to today, I already start my professional of working at:
            </p>
            <p>
              {' '}<a href="https://aprilasia.com/">April Group</a> as Electric Power System Engineer
              {' '}<a href="https://indonesia.chevron.com/">Chevron Pacific Indonesia</a> as COOP Student Internship
              {' '}<a href="https://www.pertamina.com/">Pertamina Refinery Unit II</a> as Electric Maintenance Internship
              {' '}<a href="https://unri.ac.id">High Voltage Testing</a> as student-led high testing voltage.
            </p>

            <p>
              My main focus these days is building career, specialization skills, and experiences at{' '}
              <a href="https://aprilasia.com/">APRIL Group | RGE</a> for Riau Prima Energi (RPE).
            </p>
            <p>Here are a few presentation I’ve been working with recently:</p>
            </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
