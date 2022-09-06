import { useDispatch } from "react-redux";
import {actionCreators} from '../state/index';
function Shop() {
  const dispatch = useDispatch()
  return (
    <div className="position-relative top-0 start-50">
      <h2>Add to Cart</h2>
      <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.addMoney(100))}>+</button>
      Update balance
      <button className="btn btn-primary" onClick={()=>dispatch(actionCreators.withdrawMoney(100))}>-</button>
    </div>
  );
}

export default Shop;
