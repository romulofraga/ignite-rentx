import { container } from "tsyringe";

import CarsRepository from "@modules/cars/infra/typeorm/repositories/CarRepository";
import ICarsRepository from "@modules/cars/repositories/ICarsRepository";

import UsersRepository from "../../modules/accounts/infra/repositories/UsersRepository";
import IUsersRepository from "../../modules/accounts/repositories/IUsersRepository";
import CategoryRepository from "../../modules/cars/infra/typeorm/repositories/CategoryRepository";
import SpecificationRepository from "../../modules/cars/infra/typeorm/repositories/SpecificationRepository";
import ICategoryRepository from "../../modules/cars/repositories/ICategoryRepository";
import ISpecificationRepository from "../../modules/cars/repositories/ISpecificationRepository";

container.registerSingleton<ICategoryRepository>(
  "CategoryRepository",
  CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);
