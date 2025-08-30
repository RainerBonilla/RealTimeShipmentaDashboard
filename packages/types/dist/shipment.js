import { z } from 'zod';
export const ShipmentSchema = z.object({
    id: z.uuid(),
    created_at: z.iso.datetime({
        offset: true,
    }),
    description: z.string(),
    size: z.number(),
    delivered: z.boolean(),
});
export const CreateShipmentSchema = z.object({
    description: z.string(),
    size: z.number(),
});
