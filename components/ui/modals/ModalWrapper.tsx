import React, { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";
import { cn } from "@/libs/utils";
import { useModalContext } from "@/context/modalContext";

type IModal = {
  subtitleClass: string;
  titleClass: string;
  headerClass: string;
  wrapperClass: string;
  id: string;
  icon: ReactNode;
  title: string | ReactNode;
  subtitle: string;
  children: ReactNode;
  isOpen: { [key: string]: boolean };
  modalAction: (id: string) => void;
};

const ModalWrapper = ({
  id,
  icon,
  title,
  subtitle,
  titleClass,
  subtitleClass,
  children,
  headerClass,
  wrapperClass,
}: Partial<IModal>) => {
  const { closeModal, isOpen } = useModalContext();

  return (
    <div>
      <Dialog
        open={isOpen[String(id)]}
        onOpenChange={(isOpen) => !isOpen && closeModal(String(id))}
      >
        <DialogContent
          className={cn(
            "space-y-5 !border-0 bg-white sm:max-w-[402px]",
            wrapperClass,
          )}
        >
          {icon}

          <DialogHeader className={headerClass}>
            <DialogTitle className={titleClass}>{title}</DialogTitle>
            <DialogDescription className={subtitleClass}>
              {subtitle}
            </DialogDescription>
          </DialogHeader>

          {children}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ModalWrapper;
