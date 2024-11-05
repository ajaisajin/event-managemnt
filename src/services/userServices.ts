import { createUser, findUserByEmail } from "../db/queries/userQueries.ts";
import { IUser } from "../models/interfaces/IUser.ts";
import { generateToken, hashPassword } from "../utils/jwtUtils.ts";

export const createUserService = async (userData: IUser) => {
  const isAlreadyExist = await findUserByEmail(userData.email);

  if (isAlreadyExist) {
    return { status: 400, message: "User already exists" };
  } else {
    const hashedPassword = await hashPassword(userData.password);

    userData.password = hashedPassword;

    const user = await createUser(userData);
    const userObj = {
      user_id: user.user_id,
      user_name: user.user_name,
      email: user.email,
      phone: user.phone,
      role: user.role,
    };
    const token = generateToken(user.user_id);
    return {
      status: 200,
      message: "User created successfully",
      data: { user: userObj, token: token },
    };
  }
};
