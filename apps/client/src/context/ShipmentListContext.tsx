import { createContext, useContext, type ReactNode } from 'react';
import type { Shipment } from '@repo/types/shipment';
import useGetShipments from '../utils/backend-hooks/useGetShipments';

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[] | ReactNode;
};

type ShipmentListProps = {
  shipsLoading: boolean;
  shipsError: boolean;
  shipments: Shipment[];
  getShipment: (id: string) => Shipment;
  updateShipmentInList: (updated: Shipment) => void;
};

const ShipmentListContext = createContext<ShipmentListProps | undefined>(
  undefined,
);

export const ShipmentListProvider = ({ children }: Props) => {
  const { shipments, shipsError, shipsLoading, setShipments } =
    useGetShipments();

  const getShipment = (id: string): Shipment => {
    const found = shipments.find((shipment) => shipment.id === id);
    if (!found) throw Error('Shipment not found');
    return found;
  };

  const updateShipmentInList = (updated: Shipment) => {
    const newList = shipments.map((shipment) =>
      shipment.id === updated.id ? updated : shipment,
    );
    setShipments(newList);
  };

  return (
    <ShipmentListContext.Provider
      value={{
        shipsLoading,
        shipsError,
        shipments,
        getShipment,
        updateShipmentInList,
      }}
    >
      {children}
    </ShipmentListContext.Provider>
  );
};

export const useShipmentList = (): ShipmentListProps => {
  const context = useContext(ShipmentListContext);

  if (!context) throw Error('shipment list context not found');

  return {
    shipsLoading: context.shipsLoading,
    shipsError: context.shipsError,
    shipments: context.shipments,
    getShipment: context.getShipment,
    updateShipmentInList: context.updateShipmentInList,
  };
};
