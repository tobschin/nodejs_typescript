import request from "supertest";
import app from "./index";

describe("Test app.ts", () => {
    test("get :id", async () => {
        const res = await request(app).get("/adsf");
        expect(res.body).toEqual({ "id": "adsf", "record": "jkl" });
    });

    test("get", async () => {
        const res = await request(app).get("/");
        expect(res.text).toEqual('Hello, TypeScript Express!');
    });

    test("post", async () => {
        const res = await request(app).post("/").send({"x" : "y"})
        expect(res.body).toEqual({"x" : "y"})
        expect(res.ok).toBeTruthy()
    })

});