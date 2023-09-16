import { useEffect, useState } from 'react'

interface TableData {
  id: number
  name: string
  location: string
  health: string
  ip: string
  volume: number
}
const endpointUrl = 'http://localhost:4000/list'

const Table = () => {
  const [tableData, setTableData] = useState<TableData[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(endpointUrl, {
        method: 'GET',
      })

      const data = await response.json()

      setTableData(data.data)
    }

    getData()
  }, [])

  const getBadge = (health: string) => {
    const h = health.toLocaleLowerCase()
    console.log('health', h)
    const badgeClass =
      h === 'healthy' ? 'success' : h === 'error' ? 'danger' : 'warning'

    return <span className={`badge badge-${badgeClass}`}>{health}</span>
  }

  return (
    <div className="card col-md-12">
      <div className="card-body">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>location</th>
              <th>health</th>
              <th>ip</th>
              <th>volume</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => {
              return (
                <tr key={`row-key-${idx}`}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.location}</td>
                  <td>{getBadge(row.health)}</td>
                  <td>{row.ip}</td>
                  <td>{row.volume}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Table
