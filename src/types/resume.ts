// Types
import { IUser, ISphere } from "./users";

export interface IResume {
  _id?: string;

  student?: string;

  name?: string;
  salary?: string;
  text?: string;

  spheres?: ISphere[];
  time?: string;

  user?: IUser;
}