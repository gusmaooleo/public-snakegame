import axios from "axios";
import { setLoadQueueData } from "./state";

/* capta um novo match_id com base no id do usuário atual -> getNewMatch e posteriormente inicia addMatchValues 
  que é responsável por adcionar os dados de cada partida jogada pelo usuário ao fim do ciclo de vida do jogo.
*/

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
        const res = await axios.post("https://2465-2804-14d-7289-8628-dc51-5477-7d1-ad2b.ngrok-free.app/getMatchID", {
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
        `https://2465-2804-14d-7289-8628-dc51-5477-7d1-ad2b.ngrok-free.app/insertMatchValues?matchId=${match_id}&matchResult=${result}&matchScore=${score}&matchMoves=${moves}&matchTime=${time}`
      );
      setLoadQueueData();
    } catch (error) {
      console.log(error);
    }
  }
}

export default MatchOps;
