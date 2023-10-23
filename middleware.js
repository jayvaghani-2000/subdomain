import { NextRequest, NextResponse } from "next/server";
const authRoutes = ["/auth/login"];
const homeRoute = ["/", "/verify"];

const privateRoute = ["/content-editor", "/profile/content-editor"]

export async function middleware(req) {
    const token = req.cookies.get("token")?.value;

    const match = req.headers
        .get("host")
        ?.match(
            process.env.NODE_ENV === "production"
                ? /^([^\.]+)\.gle?a?ns\.me/
                : /^([^\.]+)\.localhost/
        );

    const profile = match ? match[1] : "www";

    // if(!token && privateRoute.includes(req.nextUrl.pathname)) {
    //     return NextResponse.redirect("http://auth.localhost:3000/login")
    // }



    // if (token && authRoutes.includes(req.nextUrl.pathname)) {
    //     return NextResponse.redirect(new URL(publicRoutes[0], req.url));
    // } else if (authRoutes.includes(req.nextUrl.pathname)) {
    //     return NextResponse.next();
    // } else {
    //     const { pathname } = req.nextUrl;
    //     if (profile === "www" && !publicRoutes.includes(pathname)) {
    //         const url = new URL(publicRoutes[0], req.url);
    //         return NextResponse.redirect(url);
    //     }
    // }


    if (profile !== "www") {
        const { pathname, origin, searchParams } = req.nextUrl;
        console.log(pathname)

        const url = new URL(`/profile/${profile}${pathname}?${searchParams}`, origin);
        return NextResponse.rewrite(url);
    }

    const res = NextResponse.next();
    return res;
}

export const config = {
    matcher:
        "/((?!api|admin|favicon.ico|_next/static|_next/image|logo-icon.png|thumbnail-light.webp|thumbnail-dark.webp).*)",
};
