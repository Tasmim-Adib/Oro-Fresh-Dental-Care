import React, { Component } from 'react'

export default class PatientMedicine extends Component {
    constructor(props){
        super(props)
        this.state = {
            isShow : false,
            pic : '',
            loading : false,
            isMedicine : true
        }
    }

    handleSubmit = (e) =>{
      e.preventDefault();
      this.props.onSubmit(this.state)
    }

    handleFileChange = async(e) =>{
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0])
        data.append('upload_preset','OroFreshDentalCare')

        this.setState({
            loading : true
        })
        const res = await fetch("https://api.cloudinary.com/v1_1/ds4o8gl3d/image/upload",{
            method : 'POST',
            body : data
        })

        const file = await res.json();
        
        this.setState({
            loading : false,
            pic : file.secure_url
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type  = "file" name = "file" placeholder = "Choose the Prescription" onChange = {this.handleFileChange} />
              { this.state.loading ? <h3>Loading ....</h3> : <img src={this.state.pic} alt = "prescription"/>}
          
          <div className = "centerBtn"><button type='submit'>Next</button></div>
        </form>
        
      </div>
    )
  }
}
