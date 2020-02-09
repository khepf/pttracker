export interface IState {
  users: IUser[] | null;
  teams: ITeam[] | null;
  players: IPlayer[] | null;
  authId: string | null;
}

export interface IUser {
  name: string;
  players: IPlayer[];
  teams: ITeam[];
}

export interface IPlayer {
  firstname: string;
  lastname: string;
  jerseynumber: number;
  teams: ITeam[];
  users: IUser[];
}

export interface ITeam {
  teamname: string;
  players: IPlayer[];
  users: IUser[];
}

export interface IFirebaseError {
  code: string;
  message: string;
}
