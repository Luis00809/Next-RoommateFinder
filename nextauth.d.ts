import "next-auth";

declare module "next-auth" {
 interface User {
    id: string;
    email: string;
    // Add any other additional fields you need
 }

 interface Session {
    user: User;
 }
}
