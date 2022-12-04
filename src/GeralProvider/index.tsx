import { get, ref } from "firebase/database";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { database } from "../firebase/firebase";

const GeralProviderContext = createContext({} as any);
export const GeralProviderProvider = ({ children }: any) => {
  const [search, setSearch] = useState("");
  const [players, setPlayers] = useState<any>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [teamsRepeat, setTeamsRepeat] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  async function readPlayerData() {
    setLoading(true);
    get(ref(database, "player/")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const teams = Object.entries(data).map(([key, value]: any) => {
          return {
            player: value.player,
            position: value.position,
            link_url: value.link_url,
            team: value.team,
          };
        });
        setLoading(false);
        setPlayers(teams);
      } else {
        console.log("No data available");
      }
    });
  }

  async function readTeamData() {
    setLoading(true);
    get(ref(database, "team/")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const teamsAll = Object.entries(data).map(([key, value]: any) => {
          return {
            team: value.team,
          };
        });
        setLoading(false);
        setTeams(teamsAll);
      } else {
        console.log("No data available");
      }
    });
  }

  useEffect(() => {
    readTeamData();
  }, []);

  useEffect(() => {
    readPlayerData();
  }, []);

  const filterTeamsWithPlayersCadastred = (teams: any, players: any) => {
    const teamsWithPlayersCadastred = teams.filter((team: any) => {
      return players.some((player: any) => {
        return player.team === team.team;
      });
    });
    setTeamsRepeat(teamsWithPlayersCadastred);
  };
  return (
    <GeralProviderContext.Provider
      value={{
        players,
        teams,
        teamsRepeat,
        filterTeamsWithPlayersCadastred,
      }}
    >
      {children}
    </GeralProviderContext.Provider>
  );
};
export const useGeralProvider = () => {
  const context = useContext(GeralProviderContext);
  return context;
};
