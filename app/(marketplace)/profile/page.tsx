import Button from "@/components/ui/button";
import React from "react";
import ConnectedWallet from "./_components/ConnectedWallet";

export default function page() {
  return (
    <main className="container min-h-screen py-20">
      <hgroup className="py-10">
        <h4 className="font-gabarito text-grey-900">Profile</h4>
      </hgroup>

      <main className="mx-auto w-full max-w-xl !space-y-6">
        <section className="card p-5">
          <h5 className="text-grey-900">Personal Information</h5>

          <ul className="divide-grey-25 !mt-7 flex flex-col justify-between gap-3 divide-y !text-xs">
            <ConnectedWallet />
            <li className="!text-grey-900 flex flex-wrap items-center justify-between gap-1 gap-y-2 !rounded p-1">
              <article className="flex items-center gap-2">
                <div className="bg-warning-50 !size-8 rounded-full" />
                <small className="text-grey-700">Email</small>
              </article>

              <article className="flex flex-wrap items-center justify-between gap-3">
                <div className="">
                  <input
                    type="email"
                    name=""
                    id=""
                    className="form-controls"
                    placeholder="Enter email address"
                  />
                </div>

                <Button className="outline-btn !text-primary">
                  Verify email
                </Button>
              </article>
            </li>
          </ul>
        </section>

        <section className="card p-5">
          <h5 className="text-grey-900">KYC Status</h5>

          <article className="!text-grey-900 mt-7 flex flex-wrap items-center justify-between gap-x-1 gap-y-5 !rounded p-1 !pb-2">
            <small className="text-grey-700">Current level</small>

            <div className="flex flex-wrap items-center justify-between gap-3 gap-y-4">
              <div>
                <span className="card p-2">Level 0</span>
              </div>

              <Button className="pry-btn">Upgrade to leevel 1</Button>
            </div>
          </article>
        </section>

        <section className="card p-5">
          <hgroup>
            <h5 className="text-grey-900">Personal Information</h5>
            <h6 className="text-grey-500 !mt-2 text-xs">Get notified on</h6>
          </hgroup>

          <ul className="divide-grey-25 !mt-7 flex flex-col justify-between gap-3 divide-y !text-xs">
            <li className="!text-grey-900 flex items-center gap-2 !rounded p-1 !pb-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="!m-0">
                Trade confirmations
              </label>
            </li>
            <li className="!text-grey-900 flex items-center gap-2 !rounded p-1 !pb-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="!m-0">
                Risk alerts (LTV, liquidations)
              </label>
            </li>
            <li className="!text-grey-900 flex items-center gap-2 !rounded p-1 !pb-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="!m-0">
                Dividend receipts
              </label>
            </li>
            <li className="!text-grey-900 flex items-center gap-2 !rounded p-1 !pb-3">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="!m-0">
                News & corporate actions
              </label>
            </li>
          </ul>
        </section>

        <article className="card flex flex-wrap items-center justify-end gap-4 p-5">
          <Button className="outline-btn !text-primary w-full lg:w-fit">
            Download data
          </Button>
          <Button className="outline-btn !text-error w-full lg:w-fit">
            Delete account
          </Button>
        </article>
      </main>
    </main>
  );
}
