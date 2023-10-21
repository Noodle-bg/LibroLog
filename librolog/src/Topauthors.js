import auth1 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Authors/J K Rowling.webp';
import auth2 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Authors/Agatha Christie.jpg';
import auth3 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Authors/Jeff Kinney.jpeg';
import auth4 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Authors/Ruskin Bond.jpg';
import auth5 from 'C:/Users/bgpra/OneDrive/Documents/GitHub/LibroLog/librolog/src/Authors/Sudha Murthy.webp';

const Authors=[auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3,auth3];
const Topauthors = () => {
    return(
        <div>
            <div className="scroll-container">
                {Authors.map((src,index) => (
                <a href="#" key={index} className="card-container">   <div key={src} className="card" style={{backgroundImage:`url(${src})`
                }}></div>
                <span className="card-title">Author Name</span>
                </a>
                ))}
            </div>
        </div>
    );
};
export default Topauthors;