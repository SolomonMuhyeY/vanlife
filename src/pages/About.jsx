import travelImage from "../assets/travel.jpg";
function About() {
  return (
    <div className='about_page'>
      <div className='img'>
        <img src={travelImage} alt='travel' />
      </div>
      <h2>Don&apos;t squeeze in sedan when you could relax in a van.</h2>
      <p>
        This is our offical site where you can buy as well as rent any kind of
        vans you want. Just reach out to us we won&apos;t disappoint you!
      </p>
      <section>
        <h2>Your destionation is waiting.</h2>
        <h2>Your van is ready.</h2>
        <button>Explore our van</button>
      </section>
    </div>
  );
}

export default About;
