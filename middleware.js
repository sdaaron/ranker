import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // 设置除 /admin 外的所有路由为公共路线
  publicRoutes: ["/", "/landing", "/notfound", "/*"],
  debug: true,
});

export const config = {
  matcher: ["/admin"],
};
