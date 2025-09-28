import Button from "@/components/ui/button";
import ModalWrapper from "@/components/ui/modals/ModalWrapper";
import { useModalContext } from "@/context/modalContext";
import React, { useState } from "react";

const termsToAgreeTo = [
  {
    title: "Nature of tokens",
    description:
      "xNGX tokens reference economic exposure to NGX‑listed equities. They are not shares, do not convey voting rights, meeting attendance, or direct corporate actions. The underlying shares are held off‑chain by a regulated broker for a BVI SPV with CSCS custody.",
  },
  {
    title: "Eligibility & compliance",
    description: `Access requires successful KYC/AML checks. Additional onboarding with the broker/CSCS ("Level 2") is required only for off‑chain share withdrawal (feature disabled at launch). Availability varies by jurisdiction and may change.`,
  },
  {
    title: "Prices, iNAV & dynamic band",
    description:
      "Indicative Net Asset Value (iNAV) and the trading band are published via Hedera Consensus Service. Orders must stay inside the band. Stale or missing oracle data may pause trading or switch to a windowed/RFQ flow.",
  },
  {
    title: "Trading windows & primary flows",
    description:
      "Primary Mint/Burn executes during NGX market windows through a regulated broker. Submitted requests may be cancelled before broker execution if outside user tolerance; otherwise they execute at venue prices, net of fees.",
  },
  {
    title: "Fees",
    description:
      "Venue/brokerage fees apply to primary flows. Platform fees include 0.10% loan origination and 2% on liquidation for borrow positions. Network fees apply on‑chain.",
  },
  {
    title: "Borrowing & liquidation",
    description:
      "Loans are over‑collateralised; positions may be liquidated if risk limits are breached. Liquidation occurs during market windows and may incur slippage. Past yield does not guarantee future results.",
  },
  {
    title: "Dividends",
    description:
      "When issuers pay cash dividends, proceeds are converted and distributed in USDC on a best‑effort T+1 basis, net of applicable fees/taxes. Timing is not guaranteed.",
  },
  {
    title: "Custody & Proof of Reserves",
    description:
      "The broker provides statements; an independent auditor issues attestations comparing CSCS positions with on‑chain supply. Summaries and hashes are published publicly; discrepancies will trigger remediation.",
  },
  {
    title: "Risks",
    description:
      "Market, liquidity, execution, currency, technology, oracle, and regulatory risks can lead to losses, delays or trading halts. Tokens may trade at a premium/discount to iNAV. You can lose money.",
  },
  {
    title: "No advice; conflicts",
    description:
      "Nothing here is investment, legal or tax advice. xNGX may receive fees. You are responsible for your decisions.",
  },
  {
    title: "Regulatory",
    description:
      "The structure is designed to comply with applicable regulations; treatment may vary by jurisdiction and can change. Features may be enabled/disabled to remain compliant.",
  },
];

const Terms = () => {
  const { isOpen, closeModal } = useModalContext();
  const [agreed, setAgreedState] = useState(false);

  const handler = () => {
    localStorage.setItem("agreedToTerms", "true");
    closeModal("terms");
  };

  return (
    <>
      {isOpen["terms"] && (
        <ModalWrapper
          id="terms"
          title="Accept Terms & Disclosures to get started"
          subtitle="Scroll the summary below and tick the box to continue."
          titleClass="!text-2xl font-semibold max-w-[18.75rem] mx-auto text-center"
          headerClass="justify-center items-center gap-2"
          wrapperClass="!max-w-[39.3125rem] !pt-[1.9375rem]"
        >
          <div className="mx-auto max-w-[32rem] space-y-[1.75rem]">
            <div className="custom-scrollbar !max-h-[23rem] overflow-auto p-2 pl-4">
              <ul>
                {termsToAgreeTo.map((term, index) => {
                  return (
                    <li key={index}>
                      <span className="mb-1 block !text-sm !font-semibold !text-gray-900">
                        {index + 1}. {term.title}
                      </span>
                      <p className="!text-xs text-gray-600">
                        {term.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <span className="mb-3 flex items-center gap-3">
                <input
                  type="checkbox"
                  name="terms"
                  id="terms"
                  onChange={(event) => {
                    setAgreedState(event.currentTarget.checked);
                  }}
                />
                <label htmlFor="terms" className="!text-xs">
                  I have read and accept the Terms, Risks and Disclosures
                </label>
              </span>
              <Button
                className="pry-btn w-full"
                disabled={!agreed}
                onClick={handler}
              >
                Start trading
              </Button>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
};

export default Terms;
