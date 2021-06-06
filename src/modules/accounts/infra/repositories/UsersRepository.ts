import { getRepository, Repository } from "typeorm";

import ICreateUserDTO from "../../dtos/ICreateUserDTO";
import IUsersRepository from "../../repositories/IUsersRepository";
import User from "../typeorm/entities/User";

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  public async findById(user_id: string): Promise<User> {
    const user = this.repository.findOne(user_id);

    return user;
  }

  public async create({
    name,
    email,
    driver_license,
    password,
    avatar,
    id,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      avatar,
      id,
    });

    await this.repository.save(user);
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }
}
