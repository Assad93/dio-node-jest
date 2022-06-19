import server from "../index";
import supertest from "supertest";

describe("Users Controllers", () => {
  it("should be possible to list users", async () => {
    //Arrange && Act
    const { body, status } = await supertest(server).get("/users");

    //Assert
    expect(status).toBe(200);
    expect(body).toEqual([]);
  });

  it("should be possible to create a user", async () => {
    const { body, status } = await supertest(server)
      .post("/users")
      .send({ name: "Jhon Doe" });

    expect(status).toBe(201);
    expect(body).toEqual({
      message: `O usuário Jhon Doe foi criado com sucesso!`,
    });
  });

  it("cannot create an empty user", async () => {
    const { body, status } = await supertest(server)
      .post("/users")
      .send({ name: "" });

    expect(status).toBe(403);
    expect(body).toEqual({
      message: `Não é possível criar usuário sem nome!`,
    });
  });

  afterAll((done) => {
    server.close();
    done();
  });
});
