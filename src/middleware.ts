import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "./lib/i18n-config";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.match("/((?!api|static|.*\\..*|_next).*)")) {
    return i18nRouter(request, i18nConfig);
  }
  return NextResponse.next();
}
