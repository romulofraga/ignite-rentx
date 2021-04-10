import { Request, Response } from "express";
import { container } from "tsyringe";

import ListSpecificationUseCase from "./ListSpecificationUseCase";

export default class ListSpecificationsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationUseCase = container.resolve(
      ListSpecificationUseCase
    );
    const specifications = await listSpecificationUseCase.execute();

    return response.json(specifications);
  }
}
