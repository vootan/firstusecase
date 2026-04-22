import { app } from "@azure/functions";
import { multiply } from "./functions/multiply";
import { sum } from "./functions/sum";

app.http("sum", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: sum,
});

app.http("multiply", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: multiply,
});
