import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/users", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Saif",
      },
      {
        id: 2,
        name: "John",
      },
    ]);
  }),
];
