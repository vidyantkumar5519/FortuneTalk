import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { connect } from "react-redux";
import * as CustomerActions from '../redux/Actions/customerActions'
function PrivateRoute({ dispatch }) {
  const navigate = useNavigate();
  // const [data, setData] = useState();

  useEffect(() => {
    try {
      const data = localStorage.getItem("customerData");
      const userData = JSON.parse(data)
      console.log(userData)
      // setData(userData);

      // if (!userData) {
      //   navigate("/login");
      // } else {
      //   dispatch(CustomerActions.setCustomerData(userData))
      // }
    } catch (e) {
      console.log(e);
    }
  }, [dispatch]);

  return <Layout />;
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
