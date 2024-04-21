import React, { useState, useEffect } from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";
import Chancellor from "../../Assets/reva-digital.png";
import CDC from "../../Assets/CDC.jpeg";
import Classroom from '../../Assets/classroom.jpg'
import Library from '../../Assets/library.jpg'
const Slider = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });

  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      if (bottom && visibleItems < sliderItems.length) {
        setVisibleItems(visibleItems + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [visibleItems]);

  const sliderItems = [
    // ... your slider items here
    {
      title: "Why REVA",
      description: (
        <div>
          <p>• Thrust towards being a Social Impact University</p>
          <p>• A place for learning, discovery, and innovation</p>
          <p>• Areas of excellence that span from arts to athletics to engineering to technology</p>
          <p>• Multidisciplinary and Transdisciplinary approach to learning</p>
          <p>• Rich heritage of culture and gender studies</p>
          <p>• Ample opportunities for career progression and internships for scholars</p>
          <p>• Focus on exploration and interdisciplinary study</p>
          <p>• Senior leadership with a good representation of women</p>
        </div>
      ),
      image: Chancellor,
    },
    {
      title: "Career Development Center (CDC)",
      description:[ "REVA University strives to provide holistic education and development to our beloved students.",
      "Our schools incubate and nurture students with knowledge across diverse disciplines.",
      "The Career Development Centre plays a pivotal role in connecting potential job providers with aspiring and skilled students.",
      "REVAites excel in carving a niche in their career paths, bringing us immense joy and pride.",
      "We extend our heartfelt gratitude to the dedicated team at the Career Development Centre, who tirelessly drive placement initiatives and empower our students to achieve remarkable milestones in their careers.",
      "Their commitment and efforts contribute significantly to the success of our students and strengthen the university's reputation as a center of excellence."],
      image: CDC,
    },
    {
      title: "Smart Classrooms",
      description:(
      <div>
      <p>• Technology-Enhanced Classrooms: REVA University features state-of-the-art classrooms equipped with advanced digital facilities, fostering an immersive and interactive learning environment for students.</p>
      <p>• Congenial Study Atmosphere: The classrooms at REVA are thoughtfully designed to provide students with a comfortable and conducive atmosphere for focused studying and academic engagement.</p>
    </div>
      ),
      image: Classroom,
    },
    {
      title: "Library",
      description: "Central Library Location: Situated at the heart of the campus, REVA University's Central Library is housed in a dedicated and independent building spanning an impressive carpet area of 3316 square meters.",
      image: Library,
    },
    {
      title: "Slider Item 1",
      description: "Description for Slider Item 1",
      image: CDC,
    },
    {
      title: "Slider Item 2",
      description: "Description for Slider Item 2",
      image: CDC,
    },
  ];

  return (
    <div className="slider" ref={ref}> {/* Add ref here */}
      {sliderItems.slice(0, visibleItems).map((item, index) => (
        <div className="slider__item" key={index}>
          {index % 2 === 0 ? (
            <>
              <img src={item.image} alt="Image" className="slider__image" />
              <div className="slider__content">
                <h1 className="slider__title">{item.title}</h1>
                <p style={{ fontSize: "18px" }} >{item.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="slider__content">
                <h1 className="slider__title">{item.title}</h1>
                <p style={{ fontSize: "18px" }}>{item.description}</p>
              </div>
              <img src={item.image} alt="Image" className="slider__image" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Slider;
