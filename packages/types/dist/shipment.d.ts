import { z } from 'zod';
export declare const ShipmentSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodISODateTime;
    description: z.ZodString;
    size: z.ZodNumber;
    delivered: z.ZodBoolean;
}, z.core.$strip>;
export type Shipment = z.infer<typeof ShipmentSchema>;
export declare const CreateShipmentSchema: z.ZodObject<{
    description: z.ZodString;
    size: z.ZodNumber;
}, z.core.$strip>;
export type CreateShipment = z.infer<typeof CreateShipmentSchema>;
//# sourceMappingURL=shipment.d.ts.map