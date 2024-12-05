import React, { useEffect, useState } from "react";
import axios from "axios";

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/artists")
      .then((response) => {
        console.log("Réponse API :", response.data);
        if (response.data && response.data.member) {
          setArtists(response.data.member);
        } else {
          console.error("Format de réponse inattendu", response.data);
          setArtists([]);
        }
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des artistes :", error);
        setArtists([]); 
      });
  }, []);

  return (
    <div>
      <h2>Liste des Artistes</h2>
      <ul>
        {artists.length > 0 ? (
          artists.map((artist) => (
            <li key={artist.id}>
              <strong>Nom :</strong> {artist.name} <br />
              <strong>Style :</strong> {artist.style}
            </li>
          ))
        ) : (
          <li>Aucun artiste trouvé</li>
        )}
      </ul>
    </div>
  );
};

export default Artists;
