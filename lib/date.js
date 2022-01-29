import { DateTime } from "luxon"

export const formatDate = ({ val }) => {
  const selectedDate = !val ? DateTime.now() : DateTime.fromISO(val)
  return selectedDate.toLocaleString(DateTime.DATE_FULL)
}
