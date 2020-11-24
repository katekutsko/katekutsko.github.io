export interface IUser {
  id: number;
  login: string; //only alphanumeric characters allowed
  firstName: string; //only alphanumeric characters allowed
  password: string; // minlength 8, at least one: lowercase alphabetical character, uppercase alphabetical character, numeric character
  email: string; // email validation
  address: string; // optional field, all other fields required
}
