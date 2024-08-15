import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about">
      <h1>ABOUT US</h1>
      <h3>A swiggy Clone</h3>
      <UserClass
        name="Sameeksha verma"
        location="Indore"
        email="vermasameeksha@2812"
      />
    </div>
  );
};
export default About;
