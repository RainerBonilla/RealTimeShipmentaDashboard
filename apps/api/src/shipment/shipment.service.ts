import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { SupabaseClient } from '@repo/supabase';
import { CreateShipment, Shipment, ShipmentSchema } from '@repo/types/shipment';

@Injectable()
export class ShipmentService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}

  async getMany(): Promise<Shipment[]> {
    try {
      const { data, error } = await this.supabase
        .from('shipments')
        .select('*, status:shipment_statuses(*)');

      if (error) {
        console.error('Error fetching shipments:', error);
        return [];
      }

      const shipments: Shipment[] = [];
      for await (const row of data) {
        const parsed = ShipmentSchema.safeParse(row);
        if (parsed.success) {
          shipments.push(parsed.data);
        }
        if (parsed.error) {
          console.log('parse error: ', parsed.error);
        }
      }

      return shipments;
    } catch (error) {
      console.error('ERROR: something happened while fetching shipments', {
        error,
      });
      return [];
    }
  }

  async insert(shipmentPayload: CreateShipment): Promise<boolean> {
    try {
      const { data, error } = await this.supabase
        .from('shipments')
        .insert({
          ...shipmentPayload,
          status: 0,
        })
        .select();
      if (error) {
        console.error('Error creating shipment:', error);
        return false;
      }

      if (data) {
        return data[0];
      }

      return false;
    } catch (error) {
      console.error('ERROR: something happened while fetching shipments', {
        error,
      });
      return false;
    }
  }

  async findById(id: string): Promise<Shipment> {
    try {
      const { data, error } = await this.supabase
        .from('shipments')
        .select('*, status:shipment_statuses(*)')
        .eq('id', id);

      if (error) {
        console.error('Error fetching shipment:', error);
        throw new InternalServerErrorException(error);
      }

      if (data && data[0]) {
        const parsed = ShipmentSchema.safeParse(data[0]);
        if (parsed.success) return parsed.data;
      }

      console.error('Error fetching shipment:', error);
      throw new InternalServerErrorException(error);
    } catch (error) {
      console.error('ERROR: something happened while fetching shipments', {
        error,
      });
      throw new InternalServerErrorException(error);
    }
  }

  async markAsDelivered(id: string): Promise<boolean> {
    try {
      const { data, error } = await this.supabase
        .from('shipments')
        .update({ delivered: true, status: 4 })
        .eq('id', id)
        .select('*, status:shipment_statuses(*)');

      if (error) {
        console.error('Error updating shipment:', error);
        return false;
      }

      if (data) {
        return data[0];
      }

      return true;
    } catch (error) {
      console.error('ERROR: something happened while fetching shipments', {
        error,
      });
      return false;
    }
  }
}
