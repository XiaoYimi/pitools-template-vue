const addZero = (n) => {
  return n < 10 ? '0' + n : n
}

export default {
  now: () => { return new Date() },
  tomorrow: () => { return new Date(new Date().getTime() + 86400000) },
  yestoday: () => { return new Date(new Date().getTime() - 86400000) },
  year: () => { return (new Date()).getFullYear() },
  month: () => { return (new Date()).getMonth() + 1 },
  date: () => { return (new Date()).getDate() },
  hour: () => { return (new Date).getHours() },
  minute: () => { return (new Date().getMinutes()) },
  second: () => { return (new Date()).getSeconds() },
  stamp: () => { return (new Date()).getTime() },
  datetime: () => {
    return this.year() + '-' + addZero(this.month()) + '-' + addZero(this.date()) + ' ' + addZero(this.hour()) + ':' + addZero(this.minute()) + ':' + addZero(this.second())
  },
  dates: () => { return this.year() + '-' + addZero(this.month()) + '-' + addZero(this.date()) },
  times: () => { return addZero(this.hour()) + ':' + addZero(this.minute()) + ':' + addZero(this.second()) },

  deal: {
    datetime (date) {
      const arg_date = new Date(date)
      return arg_date.getFullYear() + '-' + addZero(arg_date.getMonth() + 1) + '-' + addZero(arg_date.getDate()) + ' ' + addZero(arg_date.getHours()) + ':' + addZero(arg_date.getMinutes()) + ':' + addZero(arg_date.getSeconds())
    },
    dates (date) {
      const arg_date = new Date(date)
      return arg_date.getFullYear() + '-' + addZero(arg_date.getMonth() + 1) + '-' + addZero(arg_date.getDate())
    },
    times (date) {
      const arg_date = new Date(date)
      return addZero(arg_date.getHours()) + ':' + addZero(arg_date.getMinutes()) + ':' + addZero(arg_date.getSeconds())
    },
    stamp (date) {
      const arg_date = date
      return (new Date(date)).getTime()
    }
  }
}