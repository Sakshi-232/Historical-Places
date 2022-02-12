import React, {useState} from 'react'

export default function Textform(props) {
    const HandleUpTajMahal = ()=>{
      settext("One of the seven wonders of the world, Taj Mahal is located on the banks of River Yamuna in Agra. It was built by the Mughal Emperor Shah Jahan as a memorial for his third wife, Mumtaz Mahal. It also houses the tomb of Shah Jahan himself. Constructed entirely out of white marble in the 17th century, Taj Mahal is one of the most beautiful monuments in the world. Every year visitors numbering more than the entire population of Agra pass through the magnificent gates to catch a glimpse of this breathtaking monument! A UNESCO World Heritage Site, the Taj Mahal stands for the Crown of Palaces in the Persian language. The tomb is laid out in a rectangular shape and can be approached through a massive gateway which has an arch and alcoves on either side of it. There are water channels and fountains in the entrance which makes the monument even more spectacular. The reflection of this majestic spectacle in the Yamuna is almost poetic in its perfection!. Covering an area of approximately 42 Acres, the construction of the Taj Mahal began in 1631 and it took 17 years before it was completed in 1648! It was constructed using white marble obtained from Makrana in Rajasthan.");
        }
    const HandleUpQutubMinar= ()=>{
      settext("One of the tallest creations in the Indian history is the Qutub Minar. With its red sandstone and aesthetic Iranian architecture, the minaret is the most famous tourist attraction in India.This UNESCO World Heritage site towers at a  height of 240 feet making it one of the tallest ancient towers across the globe. Assimilate history of the minaret by reading the inscriptions engraved in Parso-Arabic and Nagari characters. Built by Qutub Ud-Din-Aibak in the nineteenth century this tower is a must visit place in Delhi. Entry fee: for Indians- INR 10 and Foreigners- INR 250  Timings: 7 am to 5 pm");
    }
    const HandleUpAjantaandElloraCaves = ()=> {
      settext("The enthralling caves of Ajanta and Ellora in Maharashtra are the epitome of beauty. With their authentic rock-cut sculptures and ancient Indian art, the caves have become a UNESCO World Heritage site. The artifacts in the cave portray the past lives and rebirths of Buddha in spellbinding sculptures and murals. Discovered in 1819, the caves are a popular tourist hot spots and a must visit. Entry fee: Indians- INR 30 and Foreigners- INR 500. Timings: 8 am to 5 pm")
    }
    const HandleUpAmerFort = ()=>{
      settext("The splendid Amer Fort sits atop a hill called Cheel ka Teela, safeguarded by the Maota Lake. The essence of the Amer fort lies in its captivating architecture and the lustrous red sandstone and marble. The gigantic fort has some mystical elements enveloped in it, like the Diwan-i-Khaas, the Diwan-i-aam, and the beguiling Sheesh Mahal. Enjoy an elephant ride towards the Suraj Pol (sun gate). A hidden tunnel in the fort takes you on a prolonged path bridging the paerfedlace to the Jaigarh Fort. Entry fee: Indians- INR 25 and Foreigners- INR 200. Timings: 9:30 am to 4:30 pm");
    }
    const HandleUpKonarkTemple = () =>{
      settext("Devoted to the Sun God ‘Surya’, the prepossessing Konark Temple is the most spellbinding historic site in Odisha. The Kalinga architecture reflecting in its gigantic chariot, pillars and walls give the temple an Odiya touch. Also classified as ‘Black Pagoda’ by some European sailors, this UNESCO World Heritage site has also featured in the list of 7 Wonders of India.  The magnificent Khandolite rocks make the beauty of this temple even more alluring to the human eyes. Entry fee: for Indians- INR 30 and Foreigners- INR 250. Timings: 6 am to 8 pm");
    }
    const HandleUpSanchiStupa = () => {
      settext("The Sanchi stupa stands as an unparalleled example of the majestic aura that is encompassed within the Buddhist style of architecture. Ancient relics of Lord Buddha are rooted within the dome- shaped structure of the stupa, which was how the structure looked until the dawn of the 1st century. The stupa borrows its esteem from its commissioner, Ashoka of the Maurya dynasty, whose stature can be well indicated in the terms of the stupa’s altitude. The 54 ft. high stupa tells the tales of Lord Buddha’s life through its mesmerizing carvings, whose intricacy personifies the architecture. Marked as a UNESCO world heritage site the stupa is visited regularly by uncountable visitors. So what are you waiting for! Entry fee: for Indians- INR 20 and Foreigners- INR 250. Timings: Sunrise to Sunset");
    }
    
    const CheckOnChange = (event)=>{
        // console.log("Changed");
        // settext(event.target.value);
    }

    const [text, settext] = useState("Your search will appear here");
  return (
    <>
            <h1>{props.heading}</h1>
            <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Historical Place Information</label>
            <textarea className="form-control" value = {text} onChange={CheckOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
    <div className="container">
    <div className ="row">
    <div className = "col">
        <div className="container" >
                <button className="btn btn-dark" onClick={HandleUpTajMahal}>Taj Mahal</button>
        </div>
    </div>
    
    <div className = "col">
    <div className="container" >
                <button className="btn btn-dark" onClick={HandleUpQutubMinar}>Qutub Minar</button>
      </div>
      </div>
      <div className = "col">
      <div className="container" >
                <button className="btn btn-dark" onClick={HandleUpAmerFort}>Amer Fort</button>
      </div>
      </div>
      </div>
      </div>

      {/* 2nd row  */}

    <div className="container mt-4" >
    <div className ="row">
    <div className = "col">
        <div className="container">
                <button className="btn btn-dark" onClick={HandleUpAjantaandElloraCaves}>Ajanta and Ellora Caves</button>
        </div>
    </div>
    
    <div className = "col">
    <div className="container" >
                <button className="btn btn-dark" onClick={HandleUpKonarkTemple}>Konark Temple</button>
      </div>
      </div>
      <div className = "col">
      <div className="container" >
                <button className="btn btn-dark" onClick={HandleUpSanchiStupa}>Sanchi Stupa</button>
      </div>
      </div>
      </div>
      </div>

    <div className="container fixed-bottom">
       <h3>Time Required To Read The Monument Information</h3>
       <p>There are total {text.split(" ").length} words and total {text.length} characters present.</p>
       <p>Time Required To Read This Information(in Minutes) : {0.008 * text.split(" ").length }</p>
    </div>
    </>
  )
}
