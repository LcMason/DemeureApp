import React, { useEffect} from 'react'
import { loadLists } from '../actions/items'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import shoe from '../images/shoe.jpg'

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector(store => store.itemsReducer)
  console.log(items, "these are all my items")

  useEffect(() => {
      dispatch(loadLists());
  }, [dispatch])

  return (
    <div>
        <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>

          <div className="row">
          {items.map((item) => 
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="card w-100 my-2 shadow-2-strong">
                <img src={shoe} alt={shoe} className="card-img-top" style={{"aspectRatio": "1 / 1"}} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.price}</p>
                  <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                    {/* TODO : edit buttons. Line 35 - potentially add another button on hte items page. */}
                    <Link to="#!" className="btn btn-primary shadow-0 me-1">Add to cart</Link>
                    {/* <Link to="#!" className="btn btn-light border px-2 pt-2 icon-hover"><i className="fas fa-heart fa-lg text-secondary px-1"></i></Link> */}
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ItemList