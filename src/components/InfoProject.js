const InfoProject = () => {
    return (
        <>
        <div className="about__project">
                <div className="container--foot__about-project">
                    <div className="about-project__left">
                        <div className="left-head">Concpet of the Project</div>
                        <div className="left-body">
                            <ul className="left-body__ul">
                                <li>The name and gender are stored in Local state.</li>
                                <li>On Click of a button it make a request to the server.</li>
                                <li>On Response from the server, we get an array of facts.</li>
                                <li>The fetched facts are stored in a state and then inserted on screen.</li>
                            </ul>
                        </div>
                        <div className="left-tail">
                            Hola!
                        </div>
                    </div>
                    <div className="about-project__mid">
                        <div className="mid-head">About Backend</div>
                        <div className="mid-body">
                            <ul className="mid-body__ul">
                                <li>The Backend is made using nodejs and express hosted on hostiko.</li>
                                <li>Where we have list of objects which are randomly picked.</li>
                                <li>On the bases of name and gender it make a perfect array to return.</li>
                                <li>Code for the Backend server can be found here: <a target="_blank" href="https://github.com/scorcism/name-fact-generator-backend"> Name fact generator backend  </a>.</li>
                            </ul>
                        </div>
                        <div className="mid-tail">Hola!</div>
                    </div>
                    <div className="about-project__right">
                        <div className="right-head">Other Projects</div>
                        <div className="right-body">
                            <ol className="right-body__ul">
                                <li><a target="blank" href="https://github.com/scorcism/Notepad">NotePad</a>- Created using Python.</li>
                                <li><a target="blank" href="https://github.com/scorcism/Scor32k_token">Scor32k Token</a>- Using Solidity, a token on test Environment of Ropsten Test Network .</li>
                                <li><a target="blank" href="https://github.com/scorcism/Estory">Estory</a>- A blog app created using ReactJs and google firebase, also you can showacse your clicked images.</li>
                                <li><a target="blank" href="https://github.com/scorcism/panda-click">Panda Click</a>- A game created on ReactJs events are handled using states.</li>
                            </ol>
                        </div>
                        <div className="right-tail">Hola!</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InfoProject;