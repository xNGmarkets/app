import Button from "@/components/ui/button";
import Field from "@/components/ui/field";
import { useTrade } from "@/hooks/useTrade";
import React, { ReactNode, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MarketPrice } from "../../table/marketPrice";
import { CustomSelect } from "@/components/ui/select/customSelect";
import { preferenceTypes, toleranceTypes } from "@/utils/constant";

export const LimitOrder = () => {
  const [tradeMethod, setTradeMethod] = useState("Buy");
  return (
    <section className="space-y-3">
      <div className="toggleWrapper !min-h-12 !max-w-3/6">
        {["Buy", "Sell"]?.map((item, idx) => (
          <button
            key={idx}
            className={`${
              tradeMethod === item
                ? "toggleActive !bg-grey-800 !text-white"
                : "toggleNotActive"
            } !text-base !font-medium transition-all`}
            onClick={() => setTradeMethod(item)}
          >
            {item}
          </button>
        ))}
      </div>
      <PriceInput label="Price" />
      <QtyInput label="Quantity" />
      <Button className="pry-btn w-full">Place Limit BUY</Button>
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
          valuClassName="text-end"
        />
        <Field
          title="Transaction fees"
          value="5 USDC"
          className="justify-between"
          valuClassName="text-end"
        />
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
        contentsCassName="min-w-72"
      />
      <CustomSelect
        label="Tolerance"
        name="tolerance"
        value={"Conservative"}
        options={toleranceTypes}
        onChange={() => {}}
        contentsCassName="min-w-72"
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
  const { value, increase, decrease, handleValueChange } = useTrade();
  return (
    <article>
      {label && <h5 className="text-grey-700 !mb-2 text-sm">{label}</h5>}
      <div className="card flex min-h-[44px] items-center justify-between">
        <button
          className="btn !text-grey-600"
          onClick={() => decrease("amount")}
          disabled={value["amount"] === "0"}
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
            value={value?.amount}
            onChange={(e) => handleValueChange("amount", e.target.value)}
          />
        </div>
        <button
          className="btn !text-grey-600"
          onClick={() => increase("amount")}
        >
          <FaPlus />
        </button>
      </div>
    </article>
  );
};

export const QtyInput = ({ label }: { label?: string | ReactNode }) => {
  const { value, increase, decrease, handleValueChange } = useTrade();
  return (
    <article>
      {label && <h5 className="text-grey-700 !mb-2 text-sm">{label}</h5>}
      <div className="card flex min-h-[44px] items-center justify-between">
        <button
          className="btn !text-grey-600"
          onClick={() => decrease("qty")}
          disabled={value["qty"] === "0"}
        >
          <FaMinus />
        </button>
        <div className="flex flex-1 items-center justify-center text-base">
          <input
            name=""
            id=""
            type="text"
            placeholder="e.g, 100"
            className="w-full bg-transparent text-center focus:border-0 focus:outline-0"
            value={value?.qty}
            onChange={(e) => handleValueChange("qty", e.target.value)}
          />
        </div>
        <button className="btn !text-grey-600" onClick={() => increase("qty")}>
          <FaPlus />
        </button>
      </div>
    </article>
  );
};
