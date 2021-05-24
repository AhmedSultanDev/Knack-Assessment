let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

//These are the predefined dates in our calendar
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: todayStr + 'T12:00:00'
  },
  {
    id: createEventId(),
    title: 'CEO meeting',
    start: todayStr + 'T16:00:00'
  },
  {
    id: createEventId(),
    title: 'Design meeting',
    start: todayStr + 'T17:00:00'
  },
  {
    id: createEventId(),
    title: 'Personal Time Off',
    start: todayStr + 'T19:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}