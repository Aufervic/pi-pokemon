import { useState } from "react"

const Paginator = ({page, setPage, pages, perPage, total}) =>  {
  const [numPage, setNumPage] = useState(1)

  const handleChange = (event) => {
    let num = event.target.value
    if(isNaN(num) || num === '') {
      setNumPage(num)
      return 
    }

    num = parseInt(num)
    num = num <= 0 ? 1: num
    num = num > pages ? pages: num
    setNumPage(num)
    setPage(num)
  }

  const previousPage = () => {
    if(parseInt(numPage) <= 1) return

    setPage(parseInt(numPage)-1)
    setNumPage(parseInt(numPage)-1)
  }
  const nextPage = () => {
    if(parseInt(numPage) >= pages) return

    setPage(parseInt(numPage)+1)
    setNumPage(parseInt(numPage)+1)
  }

  const firstPages = () => {
    setPage(1)
    setNumPage(1)
  }
  const lastPage = () => {
    setPage(pages)
    setNumPage(pages)
  }

  return (
    <div>
      <div>
        <label>{perPage} pokemons per page</label>
        <label>|</label>
        <label>Total {total} Pokemons</label>
      </div>
      <div>
        <button onClick={firstPages}>{'|<'}</button>
        <button onClick={previousPage} disabled={page <= 1}>{'<'}</button>
        <input name='page' value={numPage} onChange={handleChange}  autoComplete='off' type='number' min={1} max={pages}/>
        <label>{`${numPage} of ${pages}`}</label>
        <button onClick={nextPage} disabled={page >= pages}>{'>'}</button>
        <button onClick={lastPage}>{'>|'}</button>
      </div>
      
    </div>
  )
}

export default Paginator