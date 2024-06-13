import { User } from "@/interfaces/user";

export const transformUser = (data: string | User | null): User | null => {
  if (typeof data === "string") {
    try {
      const parsed = JSON.parse(data);
      if (parsed && typeof parsed === "object") {
        return parsed as User;
      } else {
        console.error("Invalid user data: parsed data is not an object");
        return null;
      }
    } catch (error) {
      console.error("Invalid user data: parsing error", error);
      return null;
    }
  } else if (data && typeof data === "object") {
    return data as User;
  } else {
    console.error("Invalid user data: data is not an object");
    return null;
  }
};
