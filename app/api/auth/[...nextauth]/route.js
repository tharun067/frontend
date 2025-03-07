const { default: NextAuth } = require("next-auth");
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from 'next-auth/providers/github';
import FacebookProvider from "next-auth/providers/facebook";
import { connectToDB } from '@/utils/database';
import User from '@/models/user';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret:process.env.FACEBOOK_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session}) {
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();
                //check if user already exists
                const userExists = await User.findOne({ email: profile.email });
                // if not,create a new document  and save user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    });
                }
                return true;
            } catch (error) {
                console.log("Error checking if user exists:", error.message);
                return false;
            }
        },
        async redirect({ url, baseUrl }) {
            return "/home";
        }
    },
    pages: {
        signIn: "/app/signup",
        
    },
});

export { handler as GET, handler as POST };