import { app } from "@azure/functions";
import { sum } from "./functions/sum";

app.http("sum", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: sum,
});
