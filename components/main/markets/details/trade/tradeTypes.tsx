import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { CustomSelect } from "@/components/ui/select/customSelect";
import { useModalContext } from "@/context/modalContext";
import usePriceAndQuantity from "@/store/usePriceAndQuantity.store";
import { preferenceTypes, toleranceTypes } from "@/utils/constant";
import React, { ReactNode } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MarketPrice } from "../../table/marketPrice";

export const LimitOrder = () => {
  const { tradeMethod, setTradeMethod, quantity } = usePriceAndQuantity();
  const { openModal } = useModalContext();

  const handler = () => {
    const agreedToTerms = localStorage.getItem("agreedToTerms");
    if (!agreedToTerms) {
      openModal("terms");
      return;
    }
    if (tradeMethod === "buy") {
      openModal("buy-asset");
    } else {
      openModal("sell-asset");
    }
  };
  return (
    <section className="space-y-3">
      <div className="toggleWrapper !min-h-12 !max-w-3/6">
        {["buy", "sell"]?.map((item: string, idx) => (
          <button
            key={idx}
            className={`${
              tradeMethod === item
                ? "toggleActive !bg-grey-800 !text-white"
                : "toggleNotActive"
            } !text-base !font-medium !capitalize transition-all`}
            onClick={() => setTradeMethod(item as "buy" | "sell")}
          >
            {item}
          </button>
        ))}
      </div>
      <PriceInput label="Price" />
      <QtyInput label="Quantity" />
      <Button
        disabled={!quantity}
        className="pry-btn w-full capitalize"
        onClick={handler}
      >
        Place Limit {tradeMethod}
      </Button>
    </section>
  );
};

export const MarketBuy = ({ price }: { price: number }) => {
  return (
    <section className="!space-y-3">
      <QtyInput label="How many tokens to get?" />
      <ul className="card !space-y-2 !p-4">
        <Field
          title="Est. price"
          value={<MarketPrice price={price} className="text-end" />}
          className="justify-between"
        />
        <Field
          title="Within band"
          value="Yes"
          className="justify-between"
          valueClassName="text-end"
        />
        {/* <Field
          title="Transaction fees"
          value="5 USDC"
          className="justify-between"
          valueClassName="text-end"
        /> */}
      </ul>
      <Button className="pry-btn w-full">Buy now</Button>
    </section>
  );
};

export const PrimaryMin = () => {
  return (
    <section className="!space-y-3">
      <QtyInput label="Creation units" />

      <CustomSelect
        label="Preference"
        name="preference"
        value={"Lenient (Final VWAP check)"}
        options={preferenceTypes}
        onChange={() => {}}
        contentsClassName="min-w-72"
      />
      <CustomSelect
        label="Tolerance"
        name="tolerance"
        value={"Conservative"}
        options={toleranceTypes}
        onChange={() => {}}
        contentsClassName="min-w-72"
      />

      <article className="grid grid-cols-1 justify-between gap-3 gap-y-0 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="Lower">Lower (%)</label>
          <input
            name="lower"
            id="lower"
            type="text"
            defaultValue="-0.63"
            className="form-controls"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="upper">Upper (%)</label>
          <input
            name="upper"
            id="upper"
            type="text"
            defaultValue="-0.63"
            className="form-controls"
          />
        </div>
        <div className="col-span-2">
          <small className="text-grey-500">
            Effective (clamped to band): -0.63% / +0.32%  Band: ±1.05%
          </small>
        </div>
      </article>

      <article className="grid grid-cols-1 justify-between gap-3 gap-y-0 md:grid-cols-2">
        <Button className="outline-btn w-fit">
          <span>
            Cancel <br />
            <span className="text-grey-600 !text-xs">(before cut-off)</span>
          </span>
        </Button>
        <Button className="pry-btn w-fit">Buy now</Button>
      </article>
    </section>
  );
};

export const PrimaryBurn = () => {
  return (
    <section className="!space-y-3">
      <div>
        <QtyInput
          label={
            <>
              Units to burn{" "}
              <span className="text-grey-500 text-xs">
                (sell underlying and receive USDC)
              </span>{" "}
            </>
          }
        />
        <small className="text-grey-500 !text-xs">
          Tokens move to escrow; broker sells on NGX at the next window and we
          remit USDC net of fees.
        </small>
      </div>
      <article className="mt-10">
        <Button className="pry-btn w-full">Submit burn for USDC</Button>
      </article>
    </section>
  );
};

export const PriceInput = ({ label }: { label?: string }) => {
  const { price, increasePrice, decreasePrice, setPrice } =
    usePriceAndQuantity();
  return (
    <article>
      {label && <h5 className="text-grey-700 !mb-2 text-sm">{label}</h5>}
      <div className="card flex min-h-[44px] items-center justify-between">
        <button
          className="btn !text-grey-600"
          onClick={decreasePrice}
          disabled={!price}
        >
          <FaMinus />
        </button>
        <div className="flex flex-1 items-center justify-center text-base">
          <span className="w-3/6 text-end">₦</span>
          <input
            name=""
            id=""
            type="tel"
            placeholder="0.0"
            className="focus flex w-3/6 bg-transparent focus:border-0 focus:outline-0"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <button className="btn !text-grey-600" onClick={increasePrice}>
          <FaPlus />
        </button>
      </div>
    </article>
  );
};

export const QtyInput = ({ label }: { label?: string | ReactNode }) => {
  const { quantity, increaseQuantity, decreaseQuantity, setQuantity } =
    usePriceAndQuantity();
  return (
    <article>
      {label && <h5 className="text-grey-700 !mb-2 text-sm">{label}</h5>}
      <div className="card flex min-h-[44px] items-center justify-between">
        <button
          className="btn !text-grey-600"
          onClick={decreaseQuantity}
          disabled={!quantity}
        >
          <FaMinus />
        </button>
        <div className="flex flex-1 items-center justify-center text-base">
          <input
            type="number"
            placeholder="e.g, 100"
            className="w-full bg-transparent text-center focus:border-0 focus:outline-0"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <button className="btn !text-grey-600" onClick={increaseQuantity}>
          <FaPlus />
        </button>
      </div>
    </article>
  );
};
