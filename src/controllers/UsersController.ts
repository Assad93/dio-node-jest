import { Request, Response } from "express";
import database from "../database";

class UsersControllers {
  public static getUsers(request: Request, response: Response): Response {
    return response.json(database);
  }

  public static createUser(request: Request, response: Response): Response {
    const { name } = request.body;

    if (name.length < 1) {
      return response
        .status(403)
        .json({ message: `Não é possível criar usuário sem nome!` });
    }

    database.push(name);

    return response
      .status(201)
      .json({ message: `O usuário ${name} foi criado com sucesso!` });
  }
}

export default UsersControllers;
