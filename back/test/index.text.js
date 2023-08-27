const app = require("../src/app");
const session = require("supertest");
const agent = session(app);
// const users = require('./utils/users'); to do more login users

dexcribe("Routes Test", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responds with status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Returns an object with the properties: "id", "name", "species", "gender", "status", "origin" and "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1").body;
      expect(response).toHaveProperty("id");
      expect(response).toHaveProperty("name");
      expect(response).toHaveProperty("species");
      expect(response).toHaveProperty("gender");
      expect(response).toHaveProperty("status");
      expect(response).toHaveProperty("origin");
      expect(response).toHaveProperty("image");
    });
    it("If there is an error, reply with status: 500", async () => {
      await agent.get("/rickandmorty/character/1932874823478").expect(500);
    });
    describe("GET /rickandmorty/login", () => {
      it("Login credentials are correct", async () => {
        const response = (
          await agent.get(
            "/rickandmorty/login?email=hebe@lia.com&password=123456"
          )
        ).body;
        expect(response.access).toEqual(true);
      });
      it("Login credentials are incorrect", async () => {
        const response = (
          await agent.get(
            "/rickandmorty/login?email=hola@jeje.com&password=000000"
          )
        ).body;
        expect(response.access).toEqual(false);
      });
    });
    describe("POST /rickandmorty/fav", () => {
      const character1 = { id: "1", name: "Hebe" };
      const character2 = { id: "2", name: "Angela" };
      it("Return the element sent on .body", async () => {
        const response = (
          await agent.post("/rickandmorty/fav").send(character1)
        ).body;
        it("Return the previous element and the new one", async () => {
          const response = (
            await agent.post("/rickandmorty/fav").send(character2)
          ).body;
          expect(response).toContainEqual(character1);
          expect(response).toContainEqual(character2);
        });
      });
    });
    describe("DELETE /rickandmorty/fav/:id", () => {
      const character1 = { id: "1", name: "Hebe" };
      const character2 = { id: "2", name: "Angela" };
      it("Return the corresponding array if no character is found", async () => {
        const response = (await agent.delete("/rickandmorty/fav/3483874")).bady;
        expect(response).toContainEqual(character1);
        expect(response).toContainEqual(character2);
      });
      it("Correctly deletes the character specified by ID", async () => {
        const response = (await agent.delete("/rickandmorty/fav/1")).bady;
        expect(response).toContainEqual(character1);
      });
    });
  });
});
