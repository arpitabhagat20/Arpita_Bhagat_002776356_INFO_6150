import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavBar/NavigationBar";
import AboutCard from "../components/Card/AboutCard";
import JaneDoe from "../../assets/janeDoe.jpeg";
import JohnDoe from "../../assets/download.jpeg";
import JohnScott from "../../assets/johnScott.jpeg";
import JaneMary from "../../assets/janeMarry.jpg";
import JaneJackson from "../../assets/janeJackson.jpeg";
import JohnJameson from "../../assets/johnJameson.jpeg"

export default () => {

    const personInfo = [
        {
          id: 1,
          name: 'Jane Doe',
          description: 'CEO',
          image: JaneDoe,
        },
        {
          id: 2,
          name: 'John Doe',
          description: 'Recruiter Head',
          image: JohnDoe,
        },
        {
            id: 3,
            name: 'John Scott',
            description: 'HR Manager',
            image: JohnScott,
          },
          {
            id: 4,
            name: 'Jane Mary',
            description: 'Software Engineer',
            image: JaneMary,
          },
          {
            id: 5,
            name: 'John Jameson',
            description: 'Data Analyst',
            image: JohnJameson,
          },
          {
            id: 6,
            name: 'Jane Jackson',
            description: 'Product Owner',
            image: JaneJackson,
          },
      ];

    return (
        <>
            <NavigationBar name="About us"/>
            <AboutCard personInfo={personInfo}/>
            <Footer/>
        </>
    );
}