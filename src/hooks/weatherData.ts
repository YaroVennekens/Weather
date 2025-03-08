export function getAirQualityText(value: number) {
  if (value <= 3) return "Low Health Risk";
  if (value <= 6) return "Moderate Health Risk";
  if (value <= 9) return "High Health Risk";
  return "Very High Health Risk";
}

export function getUVIndexText(value: number) {
  if (value <= 2) return "Low";
  if (value <= 5) return "Moderate";
  if (value <= 7) return "High";
  if (value <= 10) return "Very High";
  return "Extreme";
}
