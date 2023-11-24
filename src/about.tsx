import "./about.css";

interface Props {
  enter: boolean;
}

const About = (props: Props) => {
  return (
    <div
      className={`about-container about-container-columns ${
        props.enter && "about-container-show"
      }`}
    >
      <div></div>
      <div className="about-content">
        <div className="about-content-inner">
          <div className="about-content-title">- Project -</div>
          <div>
            Temporal Retrospect Device: This project aims to develop a virtual
            reality apparatus enabling individuals to experience historical
            moments. The device immerses users in the ambiance of past eras,
            offering an interactive experience to revisit historical events and
            cultural landscapes.
          </div>
          <div>
            <img src="/project01.jpg" />
          </div>
          <div>
            ChronoVisor: The ChronoVisor project focuses on creating an
            immersive time-traveling experience using advanced augmented reality
            technology. This device allows users to witness historical events
            firsthand by overlaying virtual simulations onto real-world
            environments. By bridging the past and present, users can interact
            with and observe historical moments, fostering a deeper
            understanding of bygone eras.
          </div>
          <div className="about-content-title">- About -</div>
          <div>
            RetroVortex Foundation is a non-profit organization dedicated to
            exploring and advancing the theme of Retrofuturism. We are committed
            to excavating and implementing the concepts of Retrofuturism,
            envisioning the future as imagined in the past, and using it as a
            catalyst for new technologies, designs, and innovations. The
            Foundation seeks to merge elements of retro technology and
            futuristic visions, fostering a novel and distinctive perspective to
            redefine modern technology and design.
          </div>
          <div>
            <img src="/project02.jpg" />
          </div>
          <div>
            Veve, the founder of RetroVortex Foundation, is a visionary and a
            driving force within the organization. He plays a pivotal role in
            exploring and advancing the realm of Retrofuturism. As a temporal
            explorer, Veve passionately merges concepts from the past with
            imaginative visions of the future to inspire innovative technologies
            and designs. His unique understanding of historical technologies and
            boundless imagination positions RetroVortex Foundation at the
            forefront of Retrofuturism exploration.
          </div>
          <div>
            In his earlier years, Veve was an inquisitive explorer fascinated by
            history, art, and science. He held a unique fascination with past
            technologies and designs, alongside an interest in the futuristic
            visions of that time. This curiosity led him to delve deeply into
            Retrofuturism, becoming the driving force behind his leadership at
            RetroVortex Foundation. As a visionary, Veve aims to unlock new
            possibilities for innovation and progress by combining lessons from
            the past with visions of the future. His vision involves merging
            humanity's historical wisdom with forward-thinking approaches to
            create a better and wiser future for mankind.
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
