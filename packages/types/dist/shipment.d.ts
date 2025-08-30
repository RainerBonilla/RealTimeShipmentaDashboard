import { z } from "zod";
export declare const ShipmentSchema: z.ZodObject<{
    id: z.ZodNumber;
    created_at: z.ZodCoercedDate<unknown>;
    description: z.ZodString;
    size: z.ZodNumber;
    delivered: z.ZodBoolean;
}, z.core.$strip>;
export type Shipment = z.infer<typeof ShipmentSchema>;
//# sourceMappingURL=shipment.d.ts.map