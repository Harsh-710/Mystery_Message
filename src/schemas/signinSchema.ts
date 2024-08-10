import * as z from 'zod'

export const signinSchema = z.object({
    identifier: z.string(),     // username or email
    password: z.string()
})