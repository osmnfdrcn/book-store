import { reset } from "@/store/slices/cartSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export const useCart = () => {
  const { items } = useAppSelector((store: RootState) => store.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const updateStock = async (id: string, quantity: number) => {
    setLoading(true);
    const data = { id, quantity };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    try {
      const res = await fetch(`/api/book/`, requestOptions);
      if (res.ok) {
        router.refresh();
        toast.success("Satin Alma Islemi Gerceklesmistir");

        dispatch(reset());
      } else {
        toast.error("Urun satin alinamadi! Guncel stogu kontrol eedin.");
      }
    } catch (err) {
      toast.error("HATA");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStock = async () => {
    for (const item of items) {
      await updateStock(item.id, item.quantity);
    }
  };

  const handleClearCart = () => {
    dispatch(reset());
  };

  return { items, handleClearCart, handleUpdateStock, isLoading };
};

export default useCart;
