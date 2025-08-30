import { z } from 'zod';

export enum Status {
  CREATED = 0,
  PENDING = 1,
  IN_TRANSIT = 2,
  CANCELED = 3,
  DELIVERED = 4,
}

export const StatusSchema = z.enum(Status);

export const ShipmentStatusSchema = z.object({
  id: z.uuid(),
  created_at: z.iso.datetime({
    offset: true,
  }),
  name: z.string(),
  code: StatusSchema,
});

export type ShipmentStatus = z.infer<typeof ShipmentStatusSchema>;
