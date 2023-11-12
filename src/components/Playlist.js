import "/src/styles/playlist.css";


function Playlist({image,user,info}) {

   return (
        <div className="playlist">
          <img className="playlistimage" src={image} alt="card" />
          <div className="playinfo">
            <h3>{user}</h3>
            <p>{info}</p>
          </div>
      </div>    
   );
}

export default Playlist;
