export function getFormattedDate(date) {
  return `${date.toLocaleString('en-us',{month:'short',weekday:'long', day:'numeric', year:'numeric'})}`;
}