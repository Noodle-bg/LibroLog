
import auth3 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Authors/Jeff Kinney.jpeg';


const Authors=[auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3];
const Topauthors = () => {
    return(
            <div className="scroll-container">
                {Authors.map((src,index) => (
                <a href="#" key={index} className="card-container">   <div key={src} className="card" style={{backgroundImage:`url(${src})`
                }}></div>
                <span className="card-title">Author Name</span>
                </a>
                ))}
            </div>
    );
};
export default Topauthors;