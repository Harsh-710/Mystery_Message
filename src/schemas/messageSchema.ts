import * as z from 'zod'

export const messageSchema = z.object({
    content: z.string().min(5, "Message must be at least 5 characters long").max(300, "Message must be less than 300 characters")
})