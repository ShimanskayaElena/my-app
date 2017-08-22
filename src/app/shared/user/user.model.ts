interface UserInterface {
  name: string;
  password: string;
  access: boolean;
}

export class User implements UserInterface {

  constructor(
    public name: string,
    public password: string,
    public access: boolean
  ) {}
}
