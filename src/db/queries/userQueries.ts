import { IUser } from "../../models/interfaces/IUser.ts";
import pool from "../db.ts";

export const createUser = async (userData: IUser) => {
  const query =
    "INSERT INTO users (user_name, email, password, phone, role) VALUES ($1, $2, $3, $4, $5) RETURNING *";
  const values = [
    userData.user_name,
    userData.email,
    userData.password,
    userData.phone,
    userData.role,
  ];
  const result = await pool.query(query, values);
  return result.rows[0];
};

export const findUserByEmail = async (email: string) => {
  const query = "SELECT * FROM users WHERE email = $1";
  const result = await pool.query(query, [email]);
  return result.rows[0];
};
