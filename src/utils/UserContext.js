import { createContext } from "react";

const UserContext = createContext({
  LoggedInUser: "default user",
});

export default UserContext;
