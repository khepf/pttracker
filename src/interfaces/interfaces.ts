export interface IPlayer {
  key: string;
  firstname: string;
  lastname: string;
  jerseynumber: number;
  teams: object;
  userId: string;

}


export interface IFirebaseError {
  code: string;
  message: string;
}