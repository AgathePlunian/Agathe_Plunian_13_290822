
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../store";
import { updateUser } from "../Services/API";
import { updateUserState } from "../store";
import { useSelector } from "react-redux";
import { getUserInfo} from "../Services/API";

function Profile() {

  let dispatch = useDispatch()
  let tokenKey = useSelector((state) => state.userLog.userKey);
  let userFirstName = useSelector((state) => state.userLog.currentUser.firstName);
  let userLastName = useSelector((state) => state.userLog.currentUser.lastName)  

  let inputFirstName = userFirstName;
  let inputLastName =  userLastName;
   
  const handleChangeFirstName = event => {
    inputFirstName = event.target.value;  
  };

  const handleChangeLastName = event => {
    inputLastName = event.target.value;
  };

  useEffect(() => {
    const setUserInfo = async () => {  
    const response = await getUserInfo(tokenKey);
    dispatch(setUser(response))  
    }  

    setUserInfo();
  }, [dispatch, tokenKey])

  function showForm() {
    let formEdit = document.getElementById("form-edit");
    formEdit.classList.add('active');
  } 

  async function editUser(e) {
  e.preventDefault();
  let newFirstName = document.getElementById("firstName").value;
  let newLastName = document.getElementById("lastName").value;

  const response = await updateUser(tokenKey, newFirstName, newLastName);
  dispatch(updateUserState(response))

  }

  function cancelEdit(e) {
    e.preventDefault();
    let formEdit = document.getElementById("form-edit");
    document.getElementById("lastName").value = userLastName;
    document.getElementById("firstName").value = userFirstName;
    formEdit.classList.remove('active');
  }
 

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{userFirstName}!</h1>
        <button className="edit-button" onClick={showForm}>Edit Name</button>
        
        <form action="" className="form-edit" id="form-edit">
          <div className="inputs-container">
            <input type="text" id="firstName" name='firstName' defaultValue={inputFirstName} placeholder="First Name" onClick={handleChangeFirstName} />
            <input type="text" id="lastName" name='lastName' defaultValue= {inputLastName} placeholder= "Last Name" onClick={handleChangeLastName} />
          </div>
          <div className="btn-container">
              <button className="btn-edit" onClick={editUser}>Save</button>
              <button className="btn-edit" onClick={cancelEdit}>Cancel</button>
          </div>
        </form>

      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
}

export default Profile;
