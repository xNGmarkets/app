"use client";
import Button from "@/components/ui/button";
import { DialogClose, DialogFooter } from "@/components/ui/modals/dialog";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import CLOB_ABI from "@/config/abis/clob.abi";
import { CLOB_CONTRACT } from "@/constants/contracts";
import { useModalContext } from "@/context/modalContext";
import { RewardIcon } from "@/public/svgs";
import { OrderProps } from "@/types/order";
import React from "react";
import { toast } from "sonner";
import { useWriteContract } from "wagmi";

export const OrderAction = ({ data }: { data: OrderProps }) => {
  const { openModal, isOpen, closeModal } = useModalContext();
  const { isPending, writeContractAsync } = useWriteContract();

  const cancelTradeHandler = async () => {
    const response = await writeContractAsync({
      abi: CLOB_ABI,
      address: CLOB_CONTRACT,
      functionName: "cancel",
      args: [data.id],
    });

    if (response) {
      toast.success("Order cancelled successfully!", {
        className: "toast-success",
      });
      closeModal(`order-${data?.id}`);
      return;
    }

    toast.error("Failed to close order", {
      className: "toast-order",
    });
  };

  return (
    <div>
      <Button
        disabled={!data.isActive}
        className="outline-btn mr-0 ml-auto w-full !border-red-600 !text-red-500 md:w-fit"
        onClick={() => openModal(`order-${data?.id}`)}
      >
        {data?.isActive ? "Close" : "Closed"}
      </Button>

      {isOpen[`order-${data?.id}`] && (
        <ModalWrapper
          id={`order-${data?.id}`}
          title="Close order"
          subtitle={<>You are about to close this order.</>}
          titleClass="!text-2xl font-semibold"
          headerClass="justify-center items-center gap-2"
          wrapperClass="!max-w-xl"
          icon={<RewardIcon />}
        >
          <DialogFooter className="!mb-0">
            <DialogClose asChild>
              <Button className="outline-btn w-full">Cancel</Button>
            </DialogClose>
            <Button
              className="pry-btn w-full !bg-red-500"
              onClick={cancelTradeHandler}
              disabled={isPending}
            >
              {isPending ? "Closing order...." : "Close"}
            </Button>
          </DialogFooter>
        </ModalWrapper>
      )}
    </div>
  );
};
