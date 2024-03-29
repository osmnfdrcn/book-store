"use client";
import NoResult from "@/components/common/noResult";
import Title from "@/components/common/title";
import Wrapper from "@/components/layout/wrapper";
import Button from "@/components/ui/button";
import { Item } from "@/store/slices/cartSlice";
import { v4 as uuidv4 } from "uuid";
import CartItem from "./cart-item";
import useCart from "./useCart";

const Cart = () => {
  const { items, handleClearCart, handleUpdateStock, isLoading, total } =
    useCart();

  if (!items.length) {
    return <NoResult title="Sepetinizde urun yoktur!" />;
  }

  return (
    <Wrapper>
      <div className="w-full flex flex-col  sm:w-3/4 md:w-1/3 mx-auto  mt-[20px] md:mt-[50px]">
        <Title text="SEPETINIZ" />

        {items.map((i: Item) => (
          <CartItem key={uuidv4()} item={i} />
        ))}

        <p className=" text-right my-4 font-semibold text-xl">{total} TL</p>

        <div className="mt-5 flex flex-col items-center justify-end gap-2 w-full">
          <Button
            onClick={handleClearCart}
            className="w-full bg-rose-500 hover:bg-rose-600 transition duration-100 font-bold text-white py-1 dark:border dark:border-white"
            loading={isLoading}
          >
            TEMIZLE
          </Button>
          <Button
            onClick={handleUpdateStock}
            variant="primary"
            className="w-full bg-slate-800 hover:bg-slate-800/80 transition duration-100s font-bold text-white py-1 dark:border dark:border-white"
            loading={isLoading}
          >
            ALISVERISI TAMAMLA
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cart;
