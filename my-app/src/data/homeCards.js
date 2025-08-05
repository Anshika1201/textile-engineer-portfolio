// src/data/homeCards.js
const homeCards = [
  {
    title: "Short Introduction",
    iconName: "intro",
    content: (
      <p>
        Hello! I am <b>{'{Your Name}'}</b>, a passionate textile engineer with 20+ years of experience in the industry, dedicated to innovation and quality.
      </p>
    ),
  },
  {
    title: "Work Experience & Skills",
    iconName: "skills",
    content: (
      <ul className="list-disc ml-5">
        <li>Over 25 years of hands-on experience in textile machine maintenance, with deep expertise in mechanical troubleshooting, machine part alignment, and digital name-printing systems integration.</li>
        <li>Extensive experience in maintaining and fine-tuning textile machinery, ensuring smooth fabric production and flawless brand name printing through both mechanical precision and digital expertise.</li>
      </ul>
    ),
  },
  {
    title: "Mission or Passion",
    iconName: "mission",
    content: (
      <ul className="list-disc ml-5">
        <li>Dedicated to ensuring the flawless operation of textile machinery to support high-quality fabric production, with a passion for combining mechanical precision and digital innovation in the textile industry.</li>
        <li>Passionate about making sure every machine runs smoothly so the cloth is made right and the brand name prints perfectly. Always eager to learn and work with both tools and technology.</li>
    </ul>
    ),
  },
  
];

export default homeCards;
