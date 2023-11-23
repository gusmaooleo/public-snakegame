import axios from "axios";
import { setLoadQueueData } from "./state";

class MatchOps {
  constructor(result, score, moves, time) {
    this.result = result;
    this.score = score;
    this.moves = moves;
    this.time = time;
  }
  getNewMatch(userID) {
    const act = async (userId) => {
      try {
        const res = await axios.post("http://localhost:3001/getMatchID", {
          userId: userId,
        });
        const match_id = res.data.match_id;
        this.addMatchValues(
          match_id,
          this.result,
          this.score,
          this.moves,
          this.time
        );
      } catch (error) {
        console.log(error);
      }
    };
    act(userID);
  }
  addMatchValues = async (match_id, result, score, moves, time) => {
    try {
      await axios.get(
        `http://localhost:3001/insertMatchValues?matchId=${match_id}&matchResult=${result}&matchScore=${score}&matchMoves=${moves}&matchTime=${time}`
      );
      setLoadQueueData();
    } catch (error) {
      console.log(error);
    }
  }
}

export default MatchOps;
