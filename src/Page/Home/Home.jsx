import {React} from "react";
// import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel';
import { useHistory } from "react-router";
import HomeModule from "./Home.module.css";

const Home = () => {

    const history = useHistory();
  
    const items = [
        'https://businessfirstfamily.com/wp-content/uploads/2019/04/Fire-Insurance-Coverage.jpg', 
        'https://www.abnamro.nl/en/media/ankeiler_laptopverzekering_tcm18-50547.jpg', 
        'https://www.finixevents.com/wp-content/uploads/2021/03/asset-protection_site.jpg.webp', 
        'https://media.istockphoto.com/vectors/medical-insurance-family-with-secured-protection-vector-id1279760685?k=20&m=1279760685&s=612x612&w=0&h=Lh6Rt2oYikpSWuNlnbcYI-AFdlbTSTD1RZMiRvk06Kk=', 
        'https://media.istockphoto.com/photos/female-owner-of-start-up-coffee-shop-or-restaurant-turning-round-open-picture-id1226418360?k=20&m=1226418360&s=612x612&w=0&h=cE5vgibQfInK69IhAmprbVmrqJA7RC5rSDuRS7YB_UM=', 
        'https://media.istockphoto.com/photos/business-woman-examining-insurance-policy-picture-id1180387704?k=20&m=1180387704&s=612x612&w=0&h=UxcHp_N1RS8J7hLc595ZuW_K1_sWQ-fswTz-Iy2aUDM=', 
        'https://media.istockphoto.com/photos/lawsuit-document-picture-id468847392?k=20&m=468847392&s=612x612&w=0&h=aSHkHoPpCWtSlqt-QxYdE90HANvXbFX_m5nf-1vIxMA='
        
    ];
  
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
        ];

    return(
        <>
        <section className="contentstart">
        <div className="inner_content">
               
        <h1 className="gettingStarted" onClick={(e) => history.push('/signup')}>Get Started →</h1>

                    <div className="App">
                    <div className="controls-wrapper">
                      
                    </div>
                    {/* <hr className="seperator" /> */}
                    <div className="carousel-wrapper" >
                        <Carousel breakPoints={breakPoints}>
                        {items.map((item) => (
                            <HomeModule key={item} >
                                <img src={item} alt="Loading..." width="300px" height="250px" 
                                style={{borderTopRightRadius: '20px'}}/>
                            </HomeModule>
                        ))}
                        </Carousel>
                    </div>
                    </div>


                {/* <h2>Home Page</h2>
                <div className="image">
                    <img src="https://images.financialexpress.com/2021/01/insurance-representative-1.jpg" alt="Loading Image..." />
                </div>
                <h1>Lorem ipsum</h1>
                <br/>
                <h4>Dolor sit amet consectetur adipisicing elit. Pariatur iusto autem dolore ipsum et officia saepe, deleniti at ipsa, minus unde quos atque quod labore molestias commodi sequi veniam expedita.
                Ab a perferendis.</h4>
                <br/>
                <br/>
                
                <ol type="i">
                    <li>At eosuam, non perferendis </li>
                    <li>Impedit laudantium aperiam </li>
                    <li>Repudiandae dignissimos est qui </li>
                    <li>At voluptatibus provident modi</li>
                    <li>Dolorum quae autem</li>
                </ol>

                <br/>
                <br/>
                <h3>
                Provident vel eligendi laboriosam placeat itaque maiores. 
                </h3>
                <ol type="A">
                    <li>Ipsam accusantium, quod ea at eaque enim maxime ab. exercitationem, eaque blanditiis, reiciendis quos voluptatum quo quas rerum in voluptatem! Pariatur facilis, recusandae quasi beatae in vel cumque laudantium quidem voluptates blanditiis, provident non magni distinctio quis.</li>
                    <li>Dolore aspernatur exercitationem earum perferendis, voluptates corporis perspiciatis, nulla eaque sint, similique unde? Omnis.
                </li>
                    <li>Fuga nam doloribus architecto et consectetur quisquam exercitationem aperiam possimus, repudiandae ut tempora neque similique alias reiciendis nisi nesciunt optio fugiat dolores atque quas placeat. Nulla, laboriosam corporis? Omnis, nisi!
                Vel quisquam</li>
                </ol>
                <br/>
               <br/>
                <p>To Know More about BUSINESS INSURANCE.  
                    <a href="https://en.wikipedia.org/wiki/Insurance" target="_blank">Click Here</a>
                </p>
                <br/><br/> */}
              
            </div>
            </section>
        </>
    )
}

export default Home;






