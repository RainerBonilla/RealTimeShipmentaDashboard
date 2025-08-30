import { ShipmentSchema, type Shipment } from '@repo/types/shipment';
import { useEffect, useState } from 'react';

const useGetShipments = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [shipsLoading, setShipsLoading] = useState<boolean>(true);
  const [shipsError, setShipsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await fetch('/api/shipment');
        const gotList = await res.json();

        // parse
        const shipments: Shipment[] = [];
        for await (const row of gotList) {
          const parsed = ShipmentSchema.safeParse(row);
          if (parsed.success) {
            shipments.push(parsed.data);
          }
        }
        setShipments(shipments);
        setShipsLoading(false);
      } catch (error) {
        console.error('error: ', error);
        setShipsError(true);
      }
    };
    fetchShipments();
  }, []);

  return {
    shipsLoading,
    shipsError,
    shipments,
    setShipments,
  };
};

export default useGetShipments;
