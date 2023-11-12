import "/src/styles/card.css";


function Card({image,user,info}) {

   return (

      <div className="card">
         <img className="cardimage" src={image} alt="card" />
         <h3>{user}</h3>
         <p>{info}</p>
      </div>
      
   );
}

export default Card;
