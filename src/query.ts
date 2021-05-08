import { useQuery } from 'react-query'

const json = (res: Response) => res.json()

function get(method: string) {
  return () => fetch("http://localhost:8000/" + method).then(json)
}

export const useAutoQuery = (method: string) => useQuery(method, get(method))
