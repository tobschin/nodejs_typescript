import request from "supertest";
import app from "./index";

describe("Test app.ts", () => {
    test("get :id", async () => {
        const res = await request(app).get("/adsf");
        expect(res.body).toEqual({ "id": "adsf", "record": "asdf" });
    });

    test("get", async () => {
        const res = await request(app).get("/");
        expect(res.text).toEqual('Hello, TypeScript Express!');
    });

});