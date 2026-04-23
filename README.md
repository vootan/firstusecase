# Azure Function - Calculator (TypeScript)

An Azure Function that exposes an HTTP endpoint to calculate the sum or multiplication of two numbers.

## Overview

This is a TypeScript Azure Function application that implements an HTTP-triggered function named `sum`. It takes two numbers as input parameters and returns their sum.

## Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [Azure Functions Core Tools](https://learn.microsoft.com/en-us/azure/azure-functions/functions-run-local)
- TypeScript 5.3+

## Project Structure

```
FirstUseCase/
├── src/
│   ├── index.ts                    # Function app entry point
│   └── functions/
│       └── sum.ts                  # HTTP-triggered sum function
├── dist/                           # Compiled JavaScript (generated)
├── package.json                    # Project dependencies
├── tsconfig.json                   # TypeScript configuration
├── host.json                       # Azure Functions configuration
├── local.settings.json             # Local development settings
└── README.md                       # This file
```

## Function Endpoint

### HTTP Trigger: sum

**Endpoint**: `GET/POST /api/sum`

**Parameters** (Query String):
- `num1` (required): First number
- `num2` (required): Second number

**Request Examples**:
```bash
# Using GET
curl "http://localhost:7071/api/sum?num1=5&num2=3"

# Using POST
curl -X POST "http://localhost:7071/api/sum?num1=10&num2=20"
```

**Response Example (Success)**:
```json
{
  "num1": 5,
  "num2": 3,
  "sum": 8
}
```

**Response Example (Error)**:
```json
{
  "error": "num1 must be a valid number"
}
```

## Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Build TypeScript**:
   ```bash
   npm run build
   ```

## Running Locally

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Start the Azure Functions runtime**:
   ```bash
   npm start
   ```

   Or use the Azure Functions Core Tools directly:
   ```bash
   func start
   ```

3. **Test the function**:
   ```bash
   curl "http://localhost:7071/api/sum?num1=10&num2=20"
   ```

## Development

For development with auto-recompilation, use:
```bash
npm run watch
```

This will watch for TypeScript file changes and recompile automatically.

## Building

```bash
npm run build
```

The compiled JavaScript will be output to the `dist/` directory.

## Deployment to Azure

1. **Create an Azure Storage account** (required for Azure Functions)

2. **Create a Function App** using the Azure CLI or Azure Portal

3. **Deploy using Azure Functions Core Tools**:
   ```bash
   func azure functionapp publish <FunctionAppName>
   ```

   Or using Visual Studio Code with the Azure Functions extension.

## Configuration

- **Authorization Level**: Set to `anonymous` (no authentication required)
- **HTTP Methods**: Accepts both GET and POST requests
- **Input Validation**: Validates that num1 and num2 are required and valid numbers
- **Runtime**: Node.js

## Supported Data Types

The function accepts numeric values, including:
- Integers: 5, 10, -3
- Decimals: 3.14, -2.5
- Scientific notation: 1.5e2

## License

MIT
