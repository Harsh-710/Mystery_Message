import { getServerSession, User } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User";
import mongoose from "mongoose";

export async function GET(request: Request) {
    await dbConnect();

    const session = await getServerSession(authOptions);
    const user: User = session?.user as User;

    if(!session || !session.user) {
        return Response.json(
            {
                success: false,
                message: "Not authenticated"
            },
            { status: 401 }
        )
    }

    const userId = new mongoose.Types.ObjectId(user._id);

    try {
        const dbUser = await UserModel.aggregate([
            {
                $match: { _id: userId }
            },
            {
                $unwind: '$messages'
            },
            {
                $sort: { 'messages.createdAt': -1 }
            },
            {
                $group: {
                    _id: '$_id',
                    messages: { $push: '$messages' }
                }
            }
        ])

        if(!dbUser || dbUser.length === 0){
            return Response.json(
                {
                    success: false,
                    message: "User not found"
                },
                { status: 401 }
            )
        }

        return Response.json(
            {
                success: true,
                message: "User messages fetched successfully",
                messages: dbUser[0].messages
            },
            { status: 200 }
        )

    } catch (error) {
        console.error("Unable to fetch user messages", error);
        return Response.json(
            {
                success: false,
                message: "Unable to fetch user messages"
            },
            { status: 500 }
        )
    }
}