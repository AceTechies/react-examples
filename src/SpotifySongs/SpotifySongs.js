import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./SpotifySongs.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Avatar, Button } from "@mui/material";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function SpotifySongs() {
  const [schema, setSchema] = React.useState([
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1432250767374-ee19cba37b52?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Calm Chilld Coding beats",
      artist: "Chill Coding Music, Chill Lofi For Coding, Coding Beats",
      album: "AI Music Studio",
      addedby: "OpenAPI productions",
      dated_added: "Nov 12, 2020",
      time: "3:58",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1596125099843-4c28a6287ddb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Back End Developer Beats",
      artist: "Chill Coding Music, Chill Lofi For Coding, Coding Beats",
      album: "AI Music Studio",
      addedby: "OpenAPI productions",
      dated_added: "Nov 12, 2020",
      time: "1:40",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1621535484902-f946de404eb4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Calming Lo Fi For Coding",
      artist: "Chill Coding Music, Chill Lofi For Coding, Coding Beats",
      album: "AI Music Studio",
      addedby: "OpenAPI productions",
      dated_added: "Nov 12, 2020",
      time: "2:30",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1600180073523-fa4a48f9b8b3?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Coding with Focus Music",
      artist: "Chill Coding Music, Chill Lofi For Coding, Coding Beats",
      album: "AI Music Studio",
      addedby: "OpenAPI productions",
      dated_added: "Nov 12, 2020",
      time: "2:25",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1519753901089-6eeae06ccb80?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Coding with Focus Music",
      artist: "Chill Coding Music, Chill Lofi For Coding, Coding Beats",
      album: "AI Music Studio",
      addedby: "OpenAPI productions",
      dated_added: "Nov 12, 2020",
      time: "2:25",
    },
  ]);
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    // reorder using index of source and destination.
    const schemaCopy = schema.slice();
    const [removed] = schemaCopy.splice(result.source.index, 1);
    // put the removed one into destination.
    schemaCopy.splice(result.destination.index, 0, removed);

    console.log(result);

    setSchema(schemaCopy);
  };

  const getSongsContainer = (it) => {
    return (
      <div key={it.id} className="song_container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          {/* image section  */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <img
                style={{
                  width: "80px",
                  height: "60px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
                src={it.src}
                alt=""
              />
            </div>
            <div>
              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#fff",
                    margin: "0px",
                  }}
                >
                  {it.songName}
                </h3>
              </div>
              <div>
                <h4
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#fff",
                    margin: "8px 0px",
                  }}
                >
                  {it.artist}
                </h4>
              </div>
            </div>
          </div>
          {/* album section */}
          <div>
            <p>{it.album}</p>
          </div>
          {/* added by section */}
          <div>
            <p>{it.addedby}</p>
          </div>
          {/* date added section */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <DateRangeIcon
              style={{
                color: "#fff",
                fontSize: "16px",
                marginRight: "5px",
              }}
            />
            <p>{it.dated_added}</p>
          </div>
          {/* likes section */}
          <div>
            <FavoriteIcon style={{ color: "#52ea52e8" }} />
          </div>
          {/* time section  */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <AccessTimeIcon
              style={{
                color: "#fff",
                fontSize: "16px",
                marginRight: "6px",
                marginTop: "2px",
              }}
            />
            <p>{it.time}</p>
          </div>
        </div>
      </div>
    );
  };

  
  const getUpperContainer = () => {
    return (
      <div className="upper_main_container">
        <div
          style={{
            display: "flex",
            alignItems: "end",
            justifyContent: "end",
            marginTop: "10px",
          }}
        >
          <Button className="upgrade-button">Upgrade</Button>
          <Button className="own-button">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                style={{ width: "20px", height: "20px" }}
                src="https://images.unsplash.com/photo-1505964135045-cdada2f6bf43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <h3
                style={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "12px",
                  margin: "0px 10px",
                }}
              >
                D-Zazzy
              </h3>
            </div>
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {getArtistAlbumDetails()}
          <div
            style={{
              marginTop: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "11%",
            }}
          >
            <PlayCircleFilledIcon
              style={{ color: "#52ea52e8", fontSize: "84px" }}
            />
            <MoreHorizIcon style={{ color: "#888", fontSize: "44px" }} />
          </div>
        </div>
      </div>
    );
  };

  const getArtistAlbumDetails = () => {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <img
            style={{
              width: "250px",
              height: "280px",
              borderRadius: "12px",
              objectFit: "cover",
            }}
            src="https://images.unsplash.com/photo-1505964135045-cdada2f6bf43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div style={{ color: "#fff", marginTop: "100px" }}>
          <div>
            <p style={{ margin: "0px" }}>D-zazzy Playlist</p>
          </div>
          <div>
            <h1 style={{ fontSize: "54px", margin: "10px 0px" }}>
              Code Playlist
            </h1>
          </div>
          <div>
            <span>
              <span style={{ fontWeight: "600" }}>D-Zazzy ft.zinger</span> • 05
              songs • 3hr 36mins
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="main_container">
      {getUpperContainer()}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="column1">
          {(provided, snap) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {schema.map((it, i) => (
                <Draggable key={it.id} draggableId={it.id} index={i}>
                  {(provided, snap) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="list-item"
                      style={{
                        // backgroundColor: snap.isDragging ? "#4fe" : "#eee",

                        ...provided.draggableProps.style,
                      }}
                    >
                      {getSongsContainer(it)}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default SpotifySongs;
