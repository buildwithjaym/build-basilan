export type BBMessage = {
  id: string;
  role: "user" | "bb";
  content: string;
};