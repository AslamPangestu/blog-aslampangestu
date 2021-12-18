const { DateTime } = require("luxon")

export const FormatDate = ({ val }) => {
  const selectedDate = !val ? DateTime.now() : DateTime.fromISO(val)
  return selectedDate.toLocaleString(DateTime.DATE_FULL)
}
