import { IUser, NewUserParams } from '@udtt/rest/users/domains/types';

export class User {
  public static readonly passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/;
  private _id?: number;

  private _nickname: string;

  private _email: string;

  private _password: string;

  private _createdAt?: Date;

  private _updatedAt?: Date;

  private _country: string;

  private _city: string;

  constructor(user: IUser) {
    this._id = user.id;
    this._nickname = user.nickname;
    this._email = user.email;
    this._password = user.password;
    this._createdAt = user.createdAt || new Date();
    this._updatedAt = user.updatedAt || new Date();
    this._country = user.country;
    this._city = user.city;
  }

  public static new(user: NewUserParams): User {
    const entity = new User({ ...user });

    return entity;
  }

  public static from(user: IUser): User {
    return new User(user);
  }

  get id(): number {
    if (!this._id) throw new Error('User identifier is not defined');
    return this._id;
  }

  get nickname(): string {
    return this._nickname;
  }

  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  get createdAt(): Date {
    if (!this._createdAt) throw new Error('User creation date is not defined');
    return this._createdAt;
  }

  get updatedAt(): Date {
    if (!this._updatedAt) throw new Error('User update date is not defined');
    return this._updatedAt;
  }

  get country(): string {
    return this._country;
  }

  get city(): string {
    return this._city;
  }
}
