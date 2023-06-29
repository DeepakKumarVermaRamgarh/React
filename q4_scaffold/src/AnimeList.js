import { Component } from "react";
import AnimeCard from './AnimeCard'

// Complete the AnimeList Component
class AnimeList extends Component {
  render() {
    const {state} = this.props;
    return <div className="anime-list">
      {
        state.anime.map((a,i) => <AnimeCard key={i} anime = {a} />)
      }
    </div>;
  }
}

export default AnimeList;
