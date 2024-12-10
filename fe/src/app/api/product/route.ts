import { NextResponse } from "next/server";
import { createProduct, getProduct, getProductByUID } from "@/shared/actions/product";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");

  if (type === "getProduct") {
    const params = Object.fromEntries(searchParams.entries());
    const response = await getProduct(params, req.headers.get("Authorization"));
    if (response.success) {
      return NextResponse.json(response);
    } else {
      return NextResponse.json({ message: response.message }, { status: response.error_code || 400 });
    }
  } else if (type === "byID") {
    const uid = searchParams.get("id");
    if (uid) {
      const response = await getProductByUID(uid, req.headers.get("Authorization"));
      if (response.success) {
        return NextResponse.json(response);
      } else {
        return NextResponse.json({ message: response.message }, { status: response.error_code || 400 });
      }
    }
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  return NextResponse.json({ message: "Invalid query type" }, { status: 400 });
}

export async function POST(req: Request) {
  const { buffer, action } = await req.json();

  if (action === "post") {
    const parsedData = JSON.parse(Buffer.from(buffer).toString());
    const response = await createProduct(parsedData, req.headers.get("Authorization"));
    if (response.success) {
      return NextResponse.json(response);
    } else {
      return NextResponse.json(response, { status: 400 });
    }
  }

  return NextResponse.json({ message: "Invalid action" }, { status: 400 });
}
