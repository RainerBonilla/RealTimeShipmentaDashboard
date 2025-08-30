import { createSupabaseClient } from '@repo/supabase';
import { ConfigService } from '@nestjs/config';

export const SupabaseProvider = {
  provide: 'SUPABASE_CLIENT',
  useFactory: (configService: ConfigService) => {
    const supabaseUrl = configService.get<string>('SUPABASE_URL')??'';
    const supabaseKey = configService.get<string>('SUPABASE_SERVICE_ROLE_KEY')??'';
    return createSupabaseClient(supabaseUrl, supabaseKey);
  },
  inject: [ConfigService],
};