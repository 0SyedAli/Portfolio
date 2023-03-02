import React from "react";

const Home = (props) => {
  return (
    <div>
        <div className="main" id="m">
        <div className="m-left">
            <h1>Website done right.</h1>
            <p>I am a web developer from Cape Breton, Nova Scotia and currently living in Halifax. I enjoy building everything from small business sites to rich interactive web apps. If you are a business seeking a web presence or an employer looking to hire, you can get in touch with me here.</p>
            <div>
            <button type="button" className="btn btn-danger px-5 py-3">Projects</button>
            <button type="button" className="btn btn-danger px-5 py-3 mx-3">C-Vitae</button>
            </div>
            {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
        </div>
    </div>
    </div>
    );
};

export default Home;
