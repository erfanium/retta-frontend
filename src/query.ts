
const json = (res: Response) => res.json()

function get(method: string) {
  return fetch("http://localhost:8000/" + method).then(json)
}

export const getGrowingUsers = (page: number) => get('getGrowingUsers?page=' + page)
export const getDecliningUsers = (page: number) => get('getDecliningUsers?page=' + page)
export const getTopUsers = (page: number) => get('getTopUsers?page=' + page)
