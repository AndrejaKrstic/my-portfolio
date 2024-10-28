import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url || "");
  const publicId = searchParams.get("id");
  if (!publicId) {
    return NextResponse.json(
      { error: "public id is required" },
      { status: 500 }
    );
  }
  try {
    const imageDetails = await cloudinary.v2.api.resource(publicId, {
      type: "upload",
    });
    const imageUrl = imageDetails.secure_url;
    const width = imageDetails.width;
    const height = imageDetails.height;
    return NextResponse.json({ imageUrl, width, height });
  } catch (error) {
    console.error("Error fetching image:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
