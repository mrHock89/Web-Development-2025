# JavaScript Learning 

## How Does Js code is executed: 

- JavaScript code is executed by a JavaScript engine like V8 in the browser or on the server like Node.js

## Steps Are:
---
#### **1. Parsing - 🔄** 

- The JavaScript engine reads the code line by line.

- It parses the code into an Abstract Syntax Tree (AST) — a structured, tree-like representation of your code.

- This helps the engine understand the syntax and semantics.

#### **2. Compilation (Just-In-Time - JIT) - ⚙️**

- The code is compiled into machine code using JIT (Just-In-Time) compilation.

- Modern engines (like V8) optimize the code during execution for performance.

- The compiled machine code is what actually runs on your CPU.

#### **3. Execution (Call Stack & Memory) - 🧠**

- The engine executes the compiled code:

- Variables are stored in memory (heap or stack).

- Functions are added to the call stack when invoked.

- Each function runs, and once it completes, it’s removed from the stack.

**4. Handling Asynchronous Code (Event Loop) - ⏱️**

- JavaScript is single-threaded and non-blocking.

- For async operations (like setTimeout, API calls), it uses:

- Web APIs (provided by browser).

- Callback Queue (holds async tasks ready to run).

- Event Loop (monitors the call stack and queue).

- When the call stack is empty, the Event Loop pushes queued tasks into it.
---
---
### Pdf Notes from Namaste JavaScript
#### [JavaScript Notes](./namaste-javascript-notes.pdf) by `Namaste JavaScript Course`
---
