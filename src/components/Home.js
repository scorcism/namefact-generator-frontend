import Header from "./Header";
import Showcase from "./Showcase"
import InfoProject from "./InfoProject";
import Footer from "./Footer";
import Body from "./Body";


const Home = () => {

    return (
        <div className="container">
            <Header/>
            <Body/>
            <Showcase/>
            <InfoProject/>
            <Footer/>
        </div>
    )
}

export default Home;