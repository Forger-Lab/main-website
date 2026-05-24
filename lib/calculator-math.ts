import { TOUCH_RATE_BASELINE, TOUCH_RATE_SOLVO } from "./calculator-config";

export function calculate({
  leads,
  value,
  closeRatePercent,
}: {
  leads: number;
  value: number;
  closeRatePercent: number;
}) {
  const closeRate = closeRatePercent / 100;
  const extraTouchRate = TOUCH_RATE_SOLVO - TOUCH_RATE_BASELINE; // 0.52
  const extraUnits = Math.max(0, leads * extraTouchRate * closeRate);
  const recoveredRevenue = extraUnits * value;
  return { extraUnits, recoveredRevenue };
}
