"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const RegisterUser = async (
  email: string,
  password: string,
  name: string
) => {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        name,
      },
    });

    console.log("User registered:", user);
    return user;
  } catch (error) {
    console.error("Error registering user:", error);
    throw new Error("User registration failed");
  }
};
