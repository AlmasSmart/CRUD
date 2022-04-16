import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateData = () => {
  const [first_name, setFName] = useState();
  const [last_name, setlName] = useState();
  const [email, setEmail] = useState();
  const [states, setStates] = useState();
  const [city, setCity] = useState();
  const [pincode, setPincode] = useState();
  var navigate = useNavigate();
  const updateValue = () => {
    if (
      email === "" ||
      first_name === "" ||
      last_name === "" ||
      pincode === "" ||
      city === "" ||
      states === ""
    ) {
      alert("Please Fill All Data Feild");
    } else if (pincode.length !== 5) {
      alert("Please Enter valid 5 Digit Pincode ");
    } else {
      alert("Updated Successfully")
      axios.get(
        `https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?param1=${email}&param2=${first_name}&param3=${last_name}&param4=${pincode}&param5=${city}&param6=${states}`
      );
      navigate("/");
    }
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
    setFName(localStorage.getItem("First Name"));
    setlName(localStorage.getItem("Last Name"));
    setStates(localStorage.getItem("states"));
    setCity(localStorage.getItem("city"));
    setPincode(localStorage.getItem("Pincode"));
  }, []);

  return (
    <div>
      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label for="validationDefault01">First name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault01"
            placeholder="First name"
            value={first_name}
            onChange={(e) => setFName(e.target.value)}
            required
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault02">Last name</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault02"
            placeholder="Last name"
            onChange={(e) => setlName(e.target.value)}
            required
            value={last_name}
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefaultUsername">Email</label>
          <div class="input-group">
            <input
              type="email"
              class="form-control"
              id="validationDefaultUsername"
              placeholder="sample@email.com"
              aria-describedby="inputGroupPrepend2"
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled
              value={email}
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-3 mb-3">
          <label for="validationDefault04">State</label>
          <select
            class="custom-select my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            required
            onChange={(e) => setStates(e.target.value)}
          >
            <option selected>{states}</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Goa">Goa</option>
            <option value="Gujrat">Gujrat</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault03">City</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault03"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault05">Pincode</label>
          <input
            type="text"
            class="form-control"
            id="validationDefault05"
            placeholder="Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>
      </div>
      <button
        class="btn btn-primary"
        // type="submit"
        onClick={updateValue}
        style={{ margin: 5, width: 75, borderRadius: 25 }}
      >
        Update
      </button>
      <button
        class="btn btn-primary"
        style={{ margin: 5, width: 75, borderRadius: 25 }}
        onClick={() => {
          navigate("/");
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default UpdateData;
