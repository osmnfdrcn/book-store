"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "@/components/layout";
import { Button } from "@/components/base";
import { Title } from "@/components/ui";
import { RootState, useAppDispatch, useAppSelector } from "@/store/store";
import { updateCart } from "@/store/slices/cartSlice";
type Props = {};

const Cart = (props: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, showCart } = useAppSelector((store: RootState) => store.cart);

  const handleQuantityChange = (id: string, action: "increase" | "decrease") =>
    dispatch(updateCart({ id, action }));

  if (!items.length) {
    return (
      <Wrapper>
        <div className="mt-[200px] flex flex-col gap-2 items-center justify-center">
          <p className="text-sm font-light text-slate-500">
            Sepetinizde urun yok.{" "}
          </p>

          <Button
            variant="primary"
            text="ANASAYFA"
            onClick={() => router.push("/")}
          />
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="w-full flex flex-col  sm:w-3/4 md:w-1/3 mx-auto  mt-[20px] md:mt-[50px]">
        <Title text="SEPETINIZ" />
        {items?.map((i: any) => (
          <div
            key={uuidv4()}
            className="flex items-center justify-between mb-2 md:mb-4"
          >
            <div className="flex items-center justify-start gap-2">
              <Image src={i.image} width={60} height={60} alt={i.title} />
              <div className="flex flex-col ">
                <span className="text-xs text-slate-500 ">{i.title}</span>
                <span className="text-sm text-slate-600">
                  {i.price * i.quantity}TL
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                icon={AiOutlineMinus}
                variant="rounded"
                onClick={() => handleQuantityChange(i.id, "decrease")}
              />
              <span className="text-sm">{i.quantity}</span>
              <Button
                icon={AiOutlinePlus}
                variant="rounded"
                disabled={i.quantity === i.stock}
                onClick={() => handleQuantityChange(i.id, "increase")}
              />
            </div>
          </div>
        ))}
        {/* <div className="mt-5 flex  items-center justify-end w-full"> */}
        {/* <Button variant="secondary" text="TEMIZLE" onClick={() => reset()} /> */}
        {/* <Button
          variant="primary"
          text="ALISVERISI TAMAMLA"
          onClick={() => reset()}
        /> */}
        {/* </div> */}
      </div>
    </Wrapper>
  );
};

export default Cart;
