import { z } from 'zod';
export var Status;
(function (Status) {
    Status[Status["CREATED"] = 0] = "CREATED";
    Status[Status["PENDING"] = 1] = "PENDING";
    Status[Status["IN_TRANSIT"] = 2] = "IN_TRANSIT";
    Status[Status["CANCELED"] = 3] = "CANCELED";
    Status[Status["DELIVERED"] = 4] = "DELIVERED";
    Status[Status["ON_TIME"] = 5] = "ON_TIME";
    Status[Status["DELAYED"] = 6] = "DELAYED";
})(Status || (Status = {}));
export const StatusSchema = z.enum(Status);
export const ShipmentStatusSchema = z.object({
    id: z.uuid(),
    created_at: z.iso.datetime({
        offset: true,
    }),
    name: z.string(),
    code: StatusSchema,
});
