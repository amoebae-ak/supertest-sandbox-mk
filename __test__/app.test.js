import request from "supertest";
import app from "../app.js";

describe("get", () => {
    test("runningが返ってくる", async () => {
        const response = await request(app).get("/")
        expect(response.body.status).toBe("running")
    }
    )
})
