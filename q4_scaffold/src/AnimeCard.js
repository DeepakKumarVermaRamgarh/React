import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const { anime } = this.props;
    return <div className="anime-card">
      <img src={anime.image} alt={anime.name} role="img" />
      <p>{anime.name}</p>
    </div>;
  }
}

export default AnimeCard;
