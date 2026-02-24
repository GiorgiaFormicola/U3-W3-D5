import { Row, Col } from "react-bootstrap";
import MyCard from "./MyCard";
import { useEffect, useState } from "react";

const apiURL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Colplay";

const MyQuerySection = () => {
  const [songsList, setSongsList] = useState(null);
  const getSongs = () => {
    fetch(apiURL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error in getting the songs data");
        }
      })
      .then((songsData) => {
        console.log(songsData);
        setSongsList(songsData.data);
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

  useEffect(() => {
    getSongs();
  }, []);

  return (
    <Row className="text-light text-opacity-75 py-3">
      <Col xs={12} className="mb-2">
        <h5>
          Nuove uscite <i className="fas fa-chevron-right fs-6 text-light text-opacity-50 ps-1"></i>
        </h5>
      </Col>
      <Col xs={12} className="overflow-auto">
        <Row lg={5} className="flex-nowrap g-3 mt-0 mb-4">
          {songsList &&
            songsList.map((song, i) => {
              if (i <= 4) {
                return (
                  <MyCard
                    key={song.id}
                    src={song.album.cover_big}
                    title={song.title}
                    explicit={song.explicit_lyrics}
                    artist={song.artist.name}
                    songInfo={song}
                  ></MyCard>
                );
              }
            })}
        </Row>
        <Row lg={5} className="flex-nowrap g-3 mt-0 mb-4">
          {songsList &&
            songsList.map((song, i) => {
              if (i > 4 && i <= 9) {
                return (
                  <MyCard
                    key={song.id}
                    src={song.album.cover_big}
                    title={song.title}
                    explicit={song.explicit_lyrics}
                    artist={song.artist.name}
                    songInfo={song}
                  ></MyCard>
                );
              }
            })}
        </Row>
      </Col>
    </Row>
  );
};
export default MyQuerySection;
