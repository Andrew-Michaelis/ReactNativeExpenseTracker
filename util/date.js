export function getFormattedDate(date) {
  return `${date.toLocaleString('en-us',{month:'short',weekday:'short', day:'numeric', year:'numeric'})}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}