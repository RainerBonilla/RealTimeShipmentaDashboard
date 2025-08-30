import { z } from 'zod';
import { ShipmentStatusSchema } from './shipmentStatus.js';
export const ShipmentSchema = z.object({
    id: z.uuid(),
    created_at: z.iso.datetime({
        offset: true,
    }),
    description: z.string(),
    size: z.number(),
    delivered: z.boolean(),
    origin: z.string().nullable(),
    destination: z.string().nullable(),
    status: ShipmentStatusSchema,
});
export const CreateShipmentSchema = z.object({
    description: z.string(),
    size: z.number(),
    origin: z.string(),
    destination: z.string(),
});
