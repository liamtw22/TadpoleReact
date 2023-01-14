import "./about.scss";
import { Link } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import logo from '../../assets/Tadpole Logo no Back.png';
import mousa from '../../assets/Mousa.jpg';
import liam from '../../assets/Liam.jpg';

const About = () => {
  return (
    <div className="about">
        <Navbar />
        <div className="top">
            <h1>About Tadpole</h1>
                <p>Tadpole is a more casual and versatile business social media. Tadpole allows
                users to talk about themselves, respond to prompts such as typical interview
                questions in video format, and display different professional projects on their
                profile for companies and other professionals to view.
                </p>
            <img src={logo}/>
        </div>
        <div className="bottom">
            <h1>Who are we?</h1>
            <table>
                <tr>
                    <td><img src={mousa}/></td>
                    <td><img src={liam}/></td>
                </tr>
                <tr>
                    <th>Mousa Adely- Co-Founder & CEO</th>
                    <th>Liam Walsh- Co-Founder & CTO</th>
                </tr>
                <tr>
                    <td className="description">Mousa graduated from New York University, where he studied neuroscience 
                        and business. Mousa came up with Tadpole during his job search, where he 
                        saw a disconnect between companies and young professionals entering the job 
                        force.</td>
                    <td className="description">Liam Walsh graduated from Villanova University where he studied computer 
                        science. Liam experienced a similar disconnect between companies and young 
                        professionals entering the work force and decided to join Mousa in the creation 
                        of Tadpole.</td>
                </tr>
            </table>
        </div>
        <Footer />
    </div>
  );
};
export default About;