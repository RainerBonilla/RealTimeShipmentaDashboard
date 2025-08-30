import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@repo/supabase';

@Injectable()
export class AppService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getShipments() {
    const { data, error } = await this.supabase.from('shipments').select('*');

    if (error) {
      console.error('Error fetching shipments:', error);
      return [];
    }
    return data;
  }
}
