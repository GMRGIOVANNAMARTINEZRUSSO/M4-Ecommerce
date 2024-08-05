import { NextRequest, NextResponse } from "next/server";
import PATHROUTES from "./helpers/PathRoutes";
import { NextMiddleware } from "next/server";

export const middleware: NextMiddleware = async (request) => {

  const { pathname } = request.nextUrl;


  const isAuthenticated = checkUserAuthentication(request);


  if (pathname.startsWith(PATHROUTES.DASHBOARD || PATHROUTES.CART) && !isAuthenticated) {
    const url = new URL(PATHROUTES.LOGIN, request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

function checkUserAuthentication(request: NextRequest) {
  const authToken = request.cookies.get("user");
  return !!authToken;
}


