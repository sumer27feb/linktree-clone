import { Event } from "@/models/Event";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  await mongoose.connect(process.env.MONGO_URI);
  const url = new URL(req.url);
  const clickedLink = atob(url.searchParams.get("url"));
  const page = url.searchParams.get("page");
  await Event.create({ type: "click", uri: clickedLink, page });
  console.log("Clicked link", clickedLink);
  return NextResponse.json(true);
}
