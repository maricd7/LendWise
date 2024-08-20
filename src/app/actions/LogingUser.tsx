"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const LoginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("User not found");
    }

    if (user.password !== password) {
      throw new Error("Incorrect password");
    }

    console.log("User logged in:", user);
    return user;
  } catch (error) {
    console.error("Error logging in user:", error);
    throw new Error("User login failed");
  }
};
