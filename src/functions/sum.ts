import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export async function sum(
  request: HttpRequest,
  context: InvocationContext
): Promise<HttpResponseInit> {
  context.log("Sum function processed a request.");

  // Get query parameters
  const num1Str = request.query.get("num1");
  const num2Str = request.query.get("num2");

  // Validate inputs
  if (!num1Str) {
    return {
      status: 400,
      jsonBody: {
        error: "num1 is required",
      },
    };
  }

  if (!num2Str) {
    return {
      status: 400,
      jsonBody: {
        error: "num2 is required",
      },
    };
  }

  const num1 = parseFloat(num1Str);
  const num2 = parseFloat(num2Str);

  if (isNaN(num1)) {
    return {
      status: 400,
      jsonBody: {
        error: "num1 must be a valid number",
      },
    };
  }

  if (isNaN(num2)) {
    return {
      status: 400,
      jsonBody: {
        error: "num2 must be a valid number",
      },
    };
  }

  const sum = num1 + num2;

  return {
    status: 200,
    jsonBody: {
      num1: num1,
      num2: num2,
      sum: sum,
    },
  };
}
