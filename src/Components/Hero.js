import { useGlobalContext } from "../Context";
import phone from "../images/phone.svg";
const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Navbar Functionality which Looks good</h1>
          <p>
            So here I tried to create a cool navbar functionality where you will
            triger the navbar content when hovering over them. USed data from
            data.js and the menu width and height is kept dynamic , meaning it
            will change according to the amount of data present in the data
            file.
          </p>
          <button className="btn">Start</button>
        </article>
        <article className="hero-images">
          <img src={phone} alt="phone" className="phone-img" />
        </article>
      </div>
    </section>
  );
};
export default Hero;
