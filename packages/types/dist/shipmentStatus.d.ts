import { z } from 'zod';
export declare enum Status {
    CREATED = 0,
    PENDING = 1,
    IN_TRANSIT = 2,
    CANCELED = 3,
    DELIVERED = 4
}
export declare const StatusSchema: z.ZodEnum<typeof Status>;
export declare const ShipmentStatusSchema: z.ZodObject<{
    id: z.ZodUUID;
    created_at: z.ZodISODateTime;
    name: z.ZodString;
    code: z.ZodEnum<typeof Status>;
}, z.core.$strip>;
export type ShipmentStatus = z.infer<typeof ShipmentStatusSchema>;
//# sourceMappingURL=shipmentStatus.d.ts.map