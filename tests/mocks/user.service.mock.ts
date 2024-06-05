interface IUser {
  _id: string;
  username: string;
  password: string;
  $assertPopulated?: any;
  $clone?: any;
  $getAllSubdocs?: any;
  $ignore?: any;
}

const mockUser: Partial<IUser> = { 
  _id: 'user_id', 
  username: 'username', 
  password: 'password',
};
