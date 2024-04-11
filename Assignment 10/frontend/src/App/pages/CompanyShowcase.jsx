import Footer from "../components/Footer/Footer";
import NavigationBar from "../components/NavBar/NavigationBar";
import RenderImage from "../components/List/RenderImage";

export default () => {
    return (
        <>
            <NavigationBar name="Company Showcase"/>
            <RenderImage/>
            <Footer/>
        </>
    );
}