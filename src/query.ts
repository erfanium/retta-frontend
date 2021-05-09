
import url from 'urlcat'

const json = (res: Response) => res.json()

function get(method: string, params: Record<string, any>) {
  return fetch(url("http://localhost:8000/" + method, params)).then(json)
}

export const getGrowingUsers = (page: number) => get('getGrowingUsers', { page })
export const getDecliningUsers = (page: number) => get('getDecliningUsers', { page })
export const getTopUsers = (page: number) => get('getTopUsers', { page })
export const getRetentionChart = (): Promise<{ chart: number[] }> => get('getRetentionChart', null)
