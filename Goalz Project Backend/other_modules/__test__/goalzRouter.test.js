import app from "../../app.js";
import request from "supertest";

// practice jest supertest test
    test("Should return status 200", async()=>{
        const response = (await request(app).get("/goalz/yes"));
        expect(response.statusCode).toBe(200);
    })