export interface RootState {
  users: string | null;
  authId: string | null;
}

export interface IFirebaseError {
  code: string;
  message: string;
}