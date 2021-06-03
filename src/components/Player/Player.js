import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./Player.css";

const Player = (props) => {
  const { picture, name, BasePrice } = props.player;

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-1 g-4">
        <div className="col">
          <div className="card card-b shadow p-3 mb-5 bg-body rounded">
            <img src={picture} class="card-img-top image " alt="..." />
            <div className="card-body">
              <h1 className="card-title">{name}</h1>
              <p className="card-text">{BasePrice}</p>
              <button
                className="btn btn-primary"
                onClick={() => props.handleAddPlayer(props.player)}
              >
                <FontAwesomeIcon icon={faCheckCircle} />
                Add players
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
