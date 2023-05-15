import { createContext, useState, useMemo } from 'react';
import { generateNamespaceId, generateData } from '../utils/payForBlob';

interface PayForBlobContextProps {
  nodeUrl: string
  namespaceId: string;
  data: string;
  gasLimit: number;
  fee: number;
  isSubmitLoading: boolean,
  setNodeUrl: (nodeUrl: string) => void;
  setNamespaceId: (namespaceId: string) => void;
  setData: (daat: string) => void;
  setGasLimit: (gasLimit: number) => void;
  setFee: (fee: number) => void;
  setIsSubmitLoading: (isSubmitLoading: boolean) => void;
}

export const PayForBlobContext = createContext<PayForBlobContextProps>({} as PayForBlobContextProps);

interface PayForBlobProps {
  children: React.ReactNode;
}

export function PayForBlobState({ children }: PayForBlobProps) {
  const [nodeUrl, setNodeUrl] = useState('http://localhost:26659/submit_pfb');
  const [namespaceId, setNamespaceId] = useState(generateNamespaceId);
  const [data, setData] = useState(generateData);
  const [gasLimit, setGasLimit] = useState(80000);
  const [fee, setFee] = useState(2000);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const value = useMemo(() => ({
    nodeUrl,
    namespaceId,
    data,
    gasLimit,
    fee,
    isSubmitLoading,
    setNodeUrl,
    setNamespaceId,
    setData,
    setGasLimit,
    setFee,
    setIsSubmitLoading,
  }), [nodeUrl, namespaceId, data, gasLimit, fee, isSubmitLoading]);

  return (
    <PayForBlobContext.Provider value={value}>
      {children}
    </PayForBlobContext.Provider>
  );
}
