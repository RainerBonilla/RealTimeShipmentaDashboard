import { z } from "zod";
export const ShipmentSchema = z.object({
    id: z.number(),
    created_at: z.coerce.date(),
    description: z.string(),
    size: z.number(),
    delivered: z.boolean()
});
