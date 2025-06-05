import { createContext } from "react";

interface User {
    name:string,
    age:number,
}

export const UserContext = createContext<User|null>(null);