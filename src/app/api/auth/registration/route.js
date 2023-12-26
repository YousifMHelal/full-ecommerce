import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { name, email, password } = await req.json();

  const hash = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.User.create({
      data: {
        name,
        email,
        password: hash,
      },
    });
    return new NextResponse(JSON.stringify(user, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
