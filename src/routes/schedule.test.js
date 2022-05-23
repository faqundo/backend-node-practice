const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
let requestBody = {
  userId: "30ecc27b-9df7-4dd3-b52f-d001e79bd035",
  courses: [
    {
      desiredCourse: "PortfolioConstruction",
      requiredCourse: "PortfolioTheories",
    },
    {
      desiredCourse: "InvestmentManagement",
      requiredCourse: "Investment",
    },
    {
      desiredCourse: "Investment",
      requiredCourse: "Finance",
    },
    {
      desiredCourse: "PortfolioTheories",
      requiredCourse: "Investment",
    },
    {
      desiredCourse: "InvestmentStyle",
      requiredCourse: "InvestmentManagement",
    },
  ],
};

let responseBody = [
  {
    desiredCourse: "Investment",
    requiredCourse: "Finance",
  },
  {
    desiredCourse: "InvestmentManagement",
    requiredCourse: "Investment",
  },
  {
    desiredCourse: "PortfolioTheories",
    requiredCourse: "Investment",
  },
  {
    desiredCourse: "InvestmentStyle",
    requiredCourse: "InvestmentManagement",
  },
  {
    desiredCourse: "PortfolioConstruction",
    requiredCourse: "PortfolioTheories",
  },
];

it("gets the test endpoint", async () => {
  const response = await request.get("/api/test");

  expect(response.status).toBe(200);
  expect(response.body.message).toBe("pass!");
});

it("POST api/schedule", async () => {
  const response = await request.post("/api/schedule").send(requestBody);
  expect(response.status).toBe(200);
  expect(response.text.courses).toBe(responseBody.courses);
});
