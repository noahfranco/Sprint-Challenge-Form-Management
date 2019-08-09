import React, { useState, useEffect } from "react"; 
import axios from "axios"; 
import * as  Yup from "yup";
import { Form, Field, withFormik } from "formik"; 
// import FoodList from "FoodList.js"

const UserForm = ({errors, touched, values, status}) => {

const [users, setUsers] = useState([]); 

useEffect(() => {
    if (status) {
        console.log(status)
        setUsers([...users, status])
    }
}, [status])

    return(
    <section> 
    <Form> 
        <div>
            <Field type="text" name="name" placeholder="Name" />
            {touched.name && errors.name && (
                <p className="error"> { errors.name }  </p>
            )}
            <Field type="password" name="password" placeholder="Password" />
            {touched.password && errors.password && (
                <p className="error"> { errors.password }  </p>
            )}
         </div> 
         <button type='submit'>Submit</button>
     </Form> 
    {users.map(user => (
    <div key={user}> 
        <p>
            Name: { user.name }
            Email: { user.password }     
        </p> 
    </div> 
    ))}
    </section> 
       
    )
}

const FormikUserForm = withFormik({
    mapPropsToValues({name, password}) {
        return {
          name: name || "",  
          password: password || ""  
        }
    }, 


    validationSchema: Yup.object().shape({
        name: Yup.string().required("Input Info Here"), 
        password: Yup.string().required("Input Info Here")
    }), 



    handleSubmit(values, { resetForm ,setErrors, setStatus }) {
        if(values.name === "this is my name") {
            setErrors({name: "That name is taken"})
        } else {
            axios 
            .post("http://localhost:5000/api/register", values)
            .then(res => {
                console.log(res);
                setStatus(res.data);
                resetForm(); 
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    
        }
    }
})(UserForm); 



export default FormikUserForm; 
