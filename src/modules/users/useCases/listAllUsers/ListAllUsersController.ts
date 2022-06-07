import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    const id = user_id.toString();

    try {
      const all = this.listAllUsersUseCase.execute({user_id: id});
      return response.status(201).json(all);

    } catch( err) {
      response.status(400).send({ error: err.message });
    }

  }
}

export { ListAllUsersController };
