import ContactForm from "../components/Form/ContactForm";
import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavBar/NavigationBar";

export default () => {
    return (
        <>
            <NavigationBar name="Contact"/>
            <ContactForm/>
            <Footer/>
        </>
    );
}