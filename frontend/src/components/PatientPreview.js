import React,{useState} from 'react'

const initialValues = {
	preview : "",
  isPreview : true
};
export default function PatientPreview(props) {
    const [values, setValues] = useState(initialValues);
	const handleInputChange = (e) =>{
		const {name, value} = e.target;
		setValues({
			...values,
			[name] :value,
		});
	};


  const handleSubmit = (e) =>{
    e.preventDefault();
		props.onSubmit(values)
  }
  return (
    <div className='boxed'>
        <fieldset>
            <legend>Preview</legend>
            <form onSubmit={handleSubmit}>
              <textarea type = "text" name = "preview" value = {values.preview} onChange={handleInputChange}/><br/>
              <div className = "centerBtn"><button type='submit'>Next</button></div>
            </form>
        </fieldset>
    </div>
  )
}
