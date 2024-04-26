import React, { useState, useEffect } from "react";
import "./Slider.css";
import { useInView } from "react-intersection-observer";
import Chancellor from "../../Assets/reva-digital.png";
import CDC from "../../Assets/CDC.jpeg";
import Classroom from '../../Assets/classroom.jpg'
import Library from '../../Assets/library.jpg'
import NAAC from '../../Assets/naac.jpeg'
import Sougandhika from '../../Assets/sougandhika.jpg'
import IndoorSport from '../../Assets/indoorjpg.jpg'
import Hostel from '../../Assets/hostel.jpeg'
import Foodcourt from '../../Assets/foodcourt.jpg'
import NCC from '../../Assets/ncc.jpg'
import Tradi from '../../Assets/tradi.jpg'
import GYM from '../../Assets/gym.jpg'
import Auditorium from '../../Assets/auditorium.jpg'
import Cover from '../../Assets/cover.jpg'
import { styled } from "@mui/material";
import Team from '../Team/Team'

const Image = styled('img')({
  borderRadius: '25px',
});

const Slider = () => {
  const { ref } = useInView({
    threshold: 0.4,
  });

  
  

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
      description: (
        <div>
          <p> REVA University strives to provide holistic education and development to our beloved students. Our schools incubate and nurture students with knowledge across diverse disciplines. </p>
          <p> The Career Development Centre plays a pivotal role in connecting potential job providers with aspiring and skilled students. REVAites excel in carving a niche in their career paths, bringing us immense joy and pride. </p>
          <p> We extend our heartfelt gratitude to the dedicated team at the Career Development Centre, who tirelessly drive placement initiatives and empower our students to achieve remarkable milestones in their careers. </p>
          <p> Their commitment and efforts contribute significantly to the success of our students and strengthen the university's reputation as a center of excellence. </p>
      </div>
      ),
      image: CDC,
    },

    {
      title: "Smart Classrooms",
      description: (
        <div>
          <p> Technology-Enhanced Classrooms: REVA University features state-of-the-art classrooms equipped with advanced digital facilities, fostering an immersive and interactive learning environment for students. </p>
          <p> Congenial Study Atmosphere: The classrooms at REVA are thoughtfully designed to provide students with a comfortable and conducive atmosphere for focused studying and academic engagement.</p>
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
      title: (
        <span>
          <span style={{ fontWeight: 600, color: "orange" }}>NAAC A+</span>
        </span>
      ),
      description: (
        <div style={{ fontWeight: 540, fontSize: '22px' }}>
          <p> The NAAC A+ accreditation is a significant milestone for REVA University, affirming its commitment to academic excellence and quality education. This achievement reflects rigorous standards in teaching, learning, research, infrastructure, and governance. </p>
          <p> Celebrations included a cake ceremony, highlighting the dedication and teamwork of all REVAties. The accreditation underscores REVA's pursuit of continuous improvement and inspires the community toward higher standards in education. </p>
          <p> It enhances the university's reputation, fostering collaborations, research partnerships, and student placements. REVA University stands as a leading institution, dedicated to innovation and holistic development, ensuring a conducive environment for learning and growth.</p>
        </div>
      ),
      image: NAAC,
    },

    {
      title: "Saugandhika",
      description: (
        <div>
          <p> Built within the picturesque Green Park, the open-air theatre at REVA University serves as a vibrant hub for cultural activities and performances. Situated amidst lush greenery, this venue offers a unique setting for students to showcase their talents and celebrate diverse cultures. </p>
          <p> The open-air theatre hosts a wide range of cultural programs, including dance performances, music concerts, theatrical productions, and other artistic displays. Students from various states and countries come together to present their traditions, adding a colorful and fascinating dimension to campus life. </p>
        </div>
      ),
      image: Sougandhika,
    },

    {
      title: "Sports",
      description: (
        <div>
          <p> At REVA University, we prioritize the holistic development of our students by integrating academic learning with sports activities. Our commitment to fostering a well-rounded educational experience extends to organizing sports tournaments that promote physical fitness, teamwork, and sportsmanship. </p>
          <p> These tournaments provide students with opportunities to excel in their chosen sports, develop leadership skills, and cultivate a sense of camaraderie. Through such initiatives, we aim to instill values of discipline, perseverance, and healthy competition among our student community. </p>
          <p> These efforts contribute to creating a dynamic and supportive environment that nurtures both academic and athletic excellence at REVA University. </p>
        </div>
      ),
      image: IndoorSport,
    },

    {
      title: "Hostels",
      description: (
        <div>
          <p> The housing blocks at REVA University are designed with a focus on aesthetics and functionality, set within a picturesque landscape of lush greenery. These well-planned residential spaces offer students a serene and comfortable living environment that complements their academic journey. </p>
          <p> Each housing block is thoughtfully crafted to provide modern amenities and facilities that enhance student life, fostering a sense of community and belonging. Surrounded by natural beauty, the housing blocks serve as more than just accommodation, they are spaces that inspire creativity, relaxation, and social interaction. </p>
        </div>
      ),
      image: Hostel,
    },

    {
      title: "Food Court",
      description: (
        <div>
          <p> The expansive food court at REVA University offers a diverse and satisfying dining experience for students and staff alike. Situated conveniently alongside a brand store, the food court provides a comfortable seating area where individuals can enjoy a wide range of culinary options. </p>
          <p> From delightful street food and traditional Indian dishes to popular Chinese cuisine, the food court caters to a variety of tastes and preferences. Additionally, visitors can indulge in ice cream, refreshing juices, and a selection of beverages. </p>
          <p> This vibrant culinary hub not only nourishes the campus community but also serves as a lively social gathering spot within the university premises. </p>
        </div>
      ),
      image: Foodcourt,
    },

    {
      title: "NCC, NSS & Voluntory Work",
      description: (
        <div>
          <p> The National Cadet Corps (NCC) is a prestigious Indian military cadet corps with its headquarters located in New Delhi. It operates on a voluntary basis and is open to school and college students who wish to participate in disciplined training and activities. </p>
          <p> The NCC aims to develop leadership qualities, discipline, and a spirit of adventure among the youth of the country. Participants engage in various activities such as drill, shooting, adventure sports, and community service. </p>
          <p> The NCC plays a vital role in fostering national unity and instilling a sense of patriotism and social responsibility among the future leaders of India. </p>
        </div>
      ),
      image: NCC,
    },

    {
      title: "Students Clubs",
      description: (
        <div>
          <p> Getting involved in student life through clubs and events is a valuable way to enrich your college experience. By participating in clubs, organizations, and events on campus, you can form new connections with peers who share similar interests and passions. </p>
          <p> These interactions can lead to lifelong friendships and professional networks that may benefit you in your future career. Additionally, being involved in student life allows you to explore your interests, develop leadership skills, and contribute to the campus community through various activities and initiatives. </p>
          <p> Overall, active engagement in college clubs and events enhances personal growth and makes your college years more fulfilling and enjoyable. </p>
        </div>
      ),
      image: Tradi,
    },

    {
      title: "REVA Fitness",
      description: (
        <div>
          <p> Engaging in sports and outdoor activities at REVA University offers numerous benefits beyond physical fitness. It provides students with opportunities to socialize, relieve stress, and maintain a healthy work-life balance. </p>
          <p> REVA boasts comprehensive sports facilities, including indoor and outdoor spaces equipped for various activities such as badminton, table tennis, volleyball, basketball, football, and cricket. These facilities encourage students to participate in recreational sports, competitive tournaments, and fitness programs. </p>
          <p>  Whether it's a casual game with friends or organized sports events, the university promotes a holistic approach to student wellness through sports, promoting teamwork, discipline, and overall well-being. </p>
        </div>
      ),
      image: GYM,
    },

    {
      title: "Auditorium & Seminar Halls",
      description: (
        <div>
          <p> REVA University features a spacious, air-conditioned auditorium designed to accommodate numerous participants. This versatile venue serves as a hub for conferences, workshops, and seminars, equipped with modern facilities to enrich the learning experience and meet the demands of quality education. </p>
          <p> Additionally, the university boasts a well-equipped seminar hall conveniently situated on campus. This facility hosts a variety of events including parent-teacher association meetings, get-togethers, seminars, workshops, guest lectures, and other functions. </p>
          <p> These spaces play a vital role in fostering academic engagement, community interaction, and the overall enhancement of the learning environment at REVA University. </p>
        </div>
      ),
      image: Auditorium,
    },

    {
      title: "Courses Offered",
      description: (
        <div>
          <p><h4>Undergraduate Programs:</h4> Bachelor of Technology (B.Tech)
            | Bachelor of Computer Applications (BCA)
            | Bachelor of Business Administration (BBA)
            | Bachelor of Science (B.Sc)
            | Bachelor of Commerce (B.Com)
            | Bachelor of Arts (B.A)
            | Bachelor of Design (B.Des)
            | Bachelor of Architecture (B.Arch)
            | Bachelor of Law (LLB)
            | Bachelor of Arts and Bachelor of Law (BA LLB)
            | Bachelor of Business Administration and Bachelor of Law (BBA LLB)
            | Bachelor of Science in Nursing (B.Sc Nursing)
            | Bachelor of Education (B.Ed)
            | Bachelor of Physical Education (B.P.Ed).
           </p>
          <p><h4>Postgraduate Programs:</h4> Master of Technology (M.Tech)
            | Master of Computer Applications (MCA)
            | Master of Business Administration (MBA)
            | Master of Science (M.Sc)
            | Master of Commerce (M.Com)
            | Master of Arts (M.A)
            | Master of Design (M.Des)
            | Master of Laws (LLM)
            | Master of Social Work (MSW)
            | Master of Public Health (MPH)
            | Master of Hospital Administration (MHA)
            | Master of Philosophy (M.Phil)
          </p>
          <p style={{ fontWeight: 'bold', display: 'inline-block', marginRight: '10px' }}>Doctoral Programs:</p>
          <p style={{ display: 'inline-block' }}>Doctor of Philosophy (Ph.D.)</p>       
        </div>
      ),
      image: Auditorium,
    },

    {
      title: "About Website",
      description: (
        <div style={{ fontSize: '18px' }}>
          <p>• Campus Connect is a revolutionary web-based platform to empower students in bridging the transition from academia to the professional world. Recognizing the challenges students face in academic knowledge into practical career success, Campus Connect serves as a vital resource offering mentorship, career insights. </p>
          <p>• At the core of Campus Connect is an extensive alumni directory, connecting students with seasoned professionals across diverse industries. Nurturing a supportive community students can explore career paths and gain industry insight. </p>
          <p>• Campus Connect fosters meaningful engagement between students and alumni, facilitating discussions on industry trends and job opportunities. The platform also features a repository of interview experiences, offering perspectives on interview techniques and common questions. </p>
          <p>• Campus Connect keeps students informed about career-related events, from job fairs to workshops, tailored to their interests and majors. The platform's user-friendly interface ensures seamless access across devices, enabling students to navigate resources effortlessly and stay engaged with their professional career. </p>
          <p>• By leveraging Campus Connect, students gain the confidence, skills, and connections needed to excel in their job search and future careers. This innovative platform commitment to preparing students for the challenges of the modern workforce, fostering a culture of continuous learning and career readiness. </p>
        </div>
      ),
      image: Cover,
    },

  ]

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
  }, [visibleItems, sliderItems.length]);

  return (
    <>
        <div className="slider" ref={ref}> {/* Add ref here */}
      {sliderItems.slice(0, visibleItems).map((item, index) => (
        <div className="slider__item" key={index}>
          {index % 2 === 0 ? (
            <>
              <Image src={item.image} alt="Image" className="slider__image" />
              <div className="slider__content">
                <h1 className="slider__title" >{item.title}</h1>
                <p style={{ fontSize: "19px" }} >{item.description}</p>
              </div>
            </>
          ) : (
            <>
              <div className="slider__content">
                <h1 className="slider__title">{item.title}</h1>
                <p style={{ fontSize: "19px" }}>{item.description}</p>
              </div>
              <Image src={item.image} alt="Image" className="slider__image" />
            </>
          )}
        </div>
      ))}
    </div>
    {visibleItems === sliderItems.length && <Team />}
    </>
  );
};

export default Slider;
