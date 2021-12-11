import React,{useState} from 'react'
export default function Form (){
    const [food,setFood] = useState({ startRating:"",isChecked:false,cfood:"",
        // isAgree:false 
    })


    const data = [
            {
                name:"CHD"
            },
            {
                name:"PNCH"
            },
            {
                name:"Mohali"
            }
        ]
    const [formData,setFormData]=useState(data);

    const [isChecked,setIsChecked] = useState({});

    const handleSingleCheck = e=>{
        setIsChecked({...isChecked, [e.target.name]:e.target.checked});
    }

    const save = (e)=>{
        e.preventDefault();
        console.log(food);
        localStorage.setItem("food",JSON.stringify(food));
        // localStorage.setItem("newfood",JSON.stringify(formData));
            
    }
   
    const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFood({
        ...food,
        [e.target.name]: value,
        })
    }


    return(
        <form style={{padding:30}}>

            <h1>CHOICE OF FOOD</h1>

            <div>
                Food:
                <label>
                    <input
                    type="radio"
                    name="cfood"
                    value="italian"
                    //   checked={food.cfood === "italian"}
                    onChange={handleChange}
                    />
                        {" "}
                        Italian
                        </label>
                        <label>
                    <input
                    type="radio"
                    name="cfood"
                    value="chinese"
                    //   checked={food.cfood === "chinese"}
                    onChange={handleChange}
                    />
                    {" "}
                            Chinese
                        </label>
                        {/* <h5>food Selected : {food.cfood}</h5> */}

                </div>
         

                <div style={{marginTop:30}}>
                    <label>
                    startRating:
                    <select
                    name="startRating"
                    value={food.startRating}
                    onChange={handleChange}
                    >
                    <option value="5 star">5 star</option>
                    <option value="4 star">4 star</option>
                    <option value="3 star">3 star</option>
                    </select>
                    </label>
                    {/* <h5>startRating: {food.startRating}</h5> */}
                </div>



                <div>
                    {
                        formData.map((value,index)=>(
                            <div key={index}>
                             <label>{value.name}</label>
                             <input
                             type="checkbox"
                             name={value.name}
                             checked={isChecked[value.name]}
                             onChange={handleSingleCheck}
                             />

                            </div>
                            ))
                        }
                </div>


{/*             
        <div style={{marginTop:30}}>
        <label>
            City:
          <input
          type="checkbox"
          name="isChecked"
        //   checked={food.isChecked}
          onChange={handleChange}
        />
        
{" "}
        CHD
      </label> */}

      {/* <h5>CHD : {food.isChecked ? "Yes" : "No"}</h5> */}
            {/* </div> */}



            <div>
                {/* <h1>CITY</h1>

                <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={food.isChecked}
          onChange={handleChange}
        />
{" "}
        Is Checked?
      </label> */}

                {/* <input type="checkbox" name="isAgree"  checked={food.isAgree} onChange={handleChange}/>
                <label>CHD</label> */}
                {/* <input type="checkbox" name="city" checked={food.isAgree} onChange={handleChange}/>
                <label>PNCH</label>
                <input type="checkbox" name="city" checked={food.isAgree} onChange={handleChange}/>
                <label>PNCH</label> */}
                {/* <p>City:{food.isAgree ? "yes": "no"}</p> */}
            </div>
            <button onClick={save}>Submit</button>

        </form>
    )
}



import React,{useState} from 'react'
export default function Form (){
    const [food,setFood] = useState({ startRating:"",isChecked:false,cfood:"",
        // isAgree:false 
    })

    // const [city,setCity] = useState([
    //     {
    //         id:1, value:"CHD", isChecked:false
    //      },
    //      {
    //          id:2, value:"PUNC", isChecked:false
    //      },
    //      {
    //          id:3, value:"Mohali", isChecked:false
    //      }
    // ]);

    // handleAllChecked = (event) => {
    //     let city = city
    //     city.forEach(city => city.isChecked = event.target.checked) 
    //     this.setState({city: city})
    //   }
    //   handleCheckChieldElement = (event) => {
    //     let City = city
    //     City.forEach(city => {
    //        if (city.value === event.target.value)
    //           city.isChecked =  event.target.checked
    //     })
    //     setCity({city: city})
    //   }
 


    const data = 
     [
            {
               id:1, value:"CHD", isChecked:false
            },
            {
                id:2, value:"PUNC", isChecked:false
            },
            {
                id:3, value:"Mohali", isChecked:false
            }
        ]
    

    const [formData,setFormData]=useState(data);

    const [isChecked,setIsChecked] = useState({});

    const handleSingleCheck = e=>{
        setIsChecked({...isChecked, [e.target.name]:e.target.checked});
    }

    const save = (e)=>{
        e.preventDefault();
        console.log(food);
        localStorage.setItem("food",JSON.stringify(food));
        // localStorage.setItem("newfood",JSON.stringify(formData));
            
    }
   
    const handleChange = e => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setFood({
        ...food,
        [e.target.name]: value,
        })
    }


    return(
        <form style={{padding:30}}>

            <h1>CHOICE OF FOOD</h1>

            <div>
                Food:
                <label>
                    <input
                    type="radio"
                    name="cfood"
                    value="italian"
                    //   checked={food.cfood === "italian"}
                    onChange={handleChange}
                    />
                        {" "}
                        Italian
                        </label>
                        <label>
                    <input
                    type="radio"
                    name="cfood"
                    value="chinese"
                    //   checked={food.cfood === "chinese"}
                    onChange={handleChange}
                    />
                    {" "}
                            Chinese
                        </label>
                        {/* <h5>food Selected : {food.cfood}</h5> */}

                </div>
         

                <div style={{marginTop:30}}>
                    <label>
                    startRating:
                    <select
                    name="startRating"
                    value={food.startRating}
                    onChange={handleChange}
                    >
                    <option value="5 star">5 star</option>
                    <option value="4 star">4 star</option>
                    <option value="3 star">3 star</option>
                    </select>
                    </label>
                    {/* <h5>startRating: {food.startRating}</h5> */}
                </div>


                
                 <div>
                    {
                        formData.map((value,index)=>(
                            <div key={index}>
                             <label>{value.name}</label>
                             <input
                             type="checkbox"
                             name={value.name}
                             checked={isChecked[value.name]}
                             onChange={handleSingleCheck}
                             />

                            </div>
                            ))
                        }
                </div>


{/*             
        <div style={{marginTop:30}}>
        <label>
            City:
          <input
          type="checkbox"
          name="isChecked"
        //   checked={food.isChecked}
          onChange={handleChange}
        />
        
{" "}
        CHD
      </label> */}

      {/* <h5>CHD : {food.isChecked ? "Yes" : "No"}</h5> */}
            {/* </div> */}



            <div>
                {/* <h1>CITY</h1>

                <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={food.isChecked}
          onChange={handleChange}
        />
{" "}
        Is Checked?
      </label> */}

                {/* <input type="checkbox" name="isAgree"  checked={food.isAgree} onChange={handleChange}/>
                <label>CHD</label> */}
                {/* <input type="checkbox" name="city" checked={food.isAgree} onChange={handleChange}/>
                <label>PNCH</label>
                <input type="checkbox" name="city" checked={food.isAgree} onChange={handleChange}/>
                <label>PNCH</label> */}
                {/* <p>City:{food.isAgree ? "yes": "no"}</p> */}
            </div>
            <button onClick={save}>Submit</button>

        </form>
    )
}


