import React ,{useState,useEffect} from 'react'


function Forrm() {

    const [user,setUser] = useState('')
    const [area, setArea] = useState('')

    const submitHandler =(e) => {
        e.preventDefault();
        alert(user+" "+area)
    }

  return (
    <div>
      <form action="">
        <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={user}  onChange={(e) => setUser(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="area">Area</label>
            <select name="area" id="area" value={area} onChange={(e) => setArea(e.target.value)}>
                <option value="Html">Html</option>
                <option value="CSS">CSS</option>
                <option value="Js">Js</option>
            </select>
        </div>

            <button type="submit" onClick={submitHandler}>Submit</button>
      </form>
    </div>
  )
}

export default Forrm
