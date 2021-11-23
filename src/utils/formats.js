export const dateFormat = (date) => {
  const dateObj = new Date(date)
  const day = dateObj.getDate()
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear()
  return `${day}/${month}/${year}`
}

export const timeFormat = (date) => {
  // ISO 8601 to local time
  const dateObj = new Date(date)
  const hours = dateObj.getUTCHours()
  const minutes = dateObj.getUTCMinutes()
  // create time string with leading zeros
  const time = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
  return time
}
