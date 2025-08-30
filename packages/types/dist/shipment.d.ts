import { z } from 'zod';
export declare const ShipmentSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodISODateTime;
    description: z.ZodString;
    size: z.ZodNumber;
    delivered: z.ZodBoolean;
    origin: z.ZodNullable<z.ZodString>;
    destination: z.ZodNullable<z.ZodString>;
    status: z.ZodObject<{
        id: z.ZodUUID;
        created_at: z.ZodISODateTime;
        name: z.ZodString;
        code: z.ZodEnum<typeof import("./shipmentStatus.js").Status>;
    }, z.core.$strip>;
}, z.core.$strip>;
export type Shipment = z.infer<typeof ShipmentSchema>;
export declare const CreateShipmentSchema: z.ZodObject<{
    description: z.ZodString;
    size: z.ZodNumber;
    origin: z.ZodString;
    destination: z.ZodString;
}, z.core.$strip>;
export type CreateShipment = z.infer<typeof CreateShipmentSchema>;
//# sourceMappingURL=shipment.d.ts.map