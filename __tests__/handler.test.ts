const { hello } = require("../handler");

describe("handler.hello()", () => {
    it("returns a body with message", async () => {
        const response = await hello({}, {});
        expect(response.statusCode).toBe(200);
        expect(JSON.parse(response.body)).toEqual({
            message: "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
            input: {}
        });
    });
});