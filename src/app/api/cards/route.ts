import clientPromise from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

// ==================================================
//              THIS IS SERVER SIDE CODE!
// ==================================================

// API handler.
// Called when we visit http://localhost:3000/api/cards
// We have one function for handling GET requests, and one function for handling POST requests.


// GET request handler. Since this is a GET request, we don't need to take in any request data ("NextRequest").
// This function will return all post data, or throw a 500 error if anything goes wrong.
export async function GET() {
  console.log("GET request received");
  try {
    const client = await clientPromise;
    const db = client.db("webdesign-workshop");

    const result = await db.collection("posts").find().toArray();
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// POST request handler. This function will insert the data from the request
// into our MongoDB database collection.
// This function will return all post data, or throw a 500 error if anything goes wrong.
export async function POST(req: NextRequest) {
  console.log("POST request received");
  try {
    const client = await clientPromise;
    const db = client.db("webdesign-workshop");

    const body = await req.json();
    if (!body.author || !body.title || !body.body) {
      return NextResponse.json(
        { message: "Missing required fields: author, title, body" },
        { status: 400 }
      );
    }

    const dbRequest = await db.collection("posts").insertOne(body);
    return NextResponse.json(
      { message: "Created Successfully", id: dbRequest.insertedId },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle unsupported HTTP methods
export function OPTIONS() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  );
}