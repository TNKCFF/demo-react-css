import logo from "../assets/icons/bear.png";
import { useNavigate } from "react-router-dom";

function LandingPage(){
    const navigate = useNavigate();
    const handleToDetail = () =>{
        navigate("/details");
    };

    return(
            <div className="text-center font-mono text-white subpixel-antialiased underline uppercase">
                <p className="font-mono text-7xl font-bold uppercase">Adout Me</p>
                    <div className="flex justify-center">
                        <img src={logo} alt="logo" className="w-[20%] cursor-pointer p-6"/>
                    </div>
                <p className="text-md mt-2 font-bold text-white mx-8 md:mx-36">
                    Use box-border to set an element’s box-sizing to border-box, telling the browser to include the element’s 
                    borders and padding when you give it a height or width. This means a 100px × 100px element with a 2px border 
                    and 4px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 88px × 88px.Use box-content to set an element’s box-sizing to content-box, 
                    telling the browser to add borders and padding on top of the element’s specified width or height.
                    This means a 100px × 100px element with a 2px border and 4px of padding on all sides will actually be rendered as 
                    112px × 112px, with an internal content area of 100px × 100px.{"/n"}
                </p>{" "}
                <br />
                <button className="font-mono text-xl text-white underline" 
                        onClick={() =>handleToDetail()}
                >
                    NEXT</button>
        </div>
    );
}

export default LandingPage;