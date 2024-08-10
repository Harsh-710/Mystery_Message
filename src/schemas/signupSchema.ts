import * as z from 'zod'

export const usernameValidation = z.string().min(2, "Username must be at least 2 characters long").max(30, "Username must not be more than 30 characters").regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters")

export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long"})
})