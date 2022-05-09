import { useState } from "react";
import downloadjs from 'downloadjs';
import html2canvas from 'html2canvas';

const Body = () =>{
    const host = "https://namefact.herokuapp.com";
    const [fact, setFact] = useState("He is liked by everyone and also has a great taste in fashion.He's adorable, He's hot, He's everything a girl craves for.Modest, but also speak His mind in a way that others can't.He is loyal to people and won't back stab you.Smart and out to prove the world wrong.One of the most unique guy you'll every meet.He is a great person who will be the best friend you ever had once you crack His hard outer shell. -- not me :)");
    const [userName, setuserName] = useState("Abhishek");
    const [data, setData] = useState({
        name: "",
        gender: ""
    });

    let name, value;
    const handleChange = (e) => {
        name = e.target.name;
        value = e.target.value
        setData({ ...data, [name]: value })
    }

    const handleSubmit = (e) => {
        console.log("Button Clicked")
        e.preventDefault();
        const getFact = async (name, gender) => {
            const response = await fetch(`${host}/api/v1/fact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, gender })
            });
            const json = await response.json();
            console.log("Data Fetched")
            setFact(json)
        }
        let name = data.name;
        let gender = data.gender;
        getFact(name, gender)
        if (fact) {
            setuserName(name)
            setData({
                name: "",
                gender: ""
            });
        }
    }

    const download = async () => {
        const userAbout = document.querySelector('.data__body');
        const canvas = await html2canvas(userAbout);
        const dataURL = canvas.toDataURL('image/png');
        downloadjs(dataURL, `about${userName}.png`, 'image/png');
    }


    return (
        <>
        <div className="container--body">
                <div className="container--body__form">
                    <div className='form--body'>
                        <div className='userName'>
                            <label className='name-label' htmlFor="userName">Name: </label>
                            <input name="name" value={data.name} onChange={handleChange} className='name' type="text" placeholder='Abhishek' />
                        </div>
                        <select value={data.gender} onChange={handleChange} name='gender' className="form-select" aria-label="Select Gender">
                            <option selected value="g">Gender</option>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                    <input onClick={handleSubmit} type="submit" className='submit-btn' value="Get Fact" />

                </div>
                <div className="container--body__data">
                    <div className="data__body">
                        <div className="data__head">
                            {userName} &hearts;
                        </div>
                        <div className="data__info">
                            {fact && <p>{fact}</p>}
                        </div>
                    </div>
                    <input onClick={download} type="submit" className="download-btn" value="Download" />
                </div>
            </div>
        </>
    )
}
export default Body;