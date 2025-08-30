import { ShipmentSchema } from '@repo/types/shipment';
import { useState } from 'react';

const useUpdateShipment = () => {
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const [updateError, setUpdateError] = useState<boolean>(false);

  const updateShipment = async (id: string) => {
    setUpdateLoading(true);

    try {
      const res = await fetch(`/api/shipment/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const raw = await res.json();

      const parsed = ShipmentSchema.safeParse(raw);
      if (parsed.success) {
        setUpdateLoading(false);
        return parsed.data;
      } else {
        console.error('bad parsed');
        setUpdateError(true);
      }
    } catch (error) {
      console.error('error: ', error);
      setUpdateError(true);
    }

    setUpdateLoading(false);
  };

  return {
    updateLoading,
    updateError,
    updateShipment,
  };
};

export default useUpdateShipment;
