import React from 'react';
import {Col, Card, Icon, Button} from 'antd';
import CollectionCreateForm from './CollectionCreateForm'
import './PeopleItem.css';

    
    class PeopleItem extends React.Component{
        
        state ={   theme:'', visible:false, selectedDataName:'', name:this.props.person.name, email:this.props.person.email, phone:this.props.person.phone, website:this.props.person.website}; 
        style={background:'none' ,border:'none', outline:'none', cursor:'pointer'};
        img = `https://avatars.dicebear.com/v2/avataaars/${this.props.person.username}.svg?options[mood][]=happy`;
        
        
        
        toggleState=() =>{
        
            this.state.theme ==='' ? this.setState({theme:'filled'}) : this.setState({theme:''}) 
        }
        showModal = () => {
            this.setState({
              visible: true,
              selectedDataName:this.props.person.name
            });
            
          };

       
         
        handleCancel = e => {
            //console.log(e);
            this.setState({
              visible: false,
            });
          };
       
        handleCreate = () => {
          const form = this.formRef.props.form;
          form.validateFields((err, values) => {
            if (err) {
              return;
            }
      
            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false, name: values.name, phone:values.phone, email:values.email, website:values.website });

            console.log(values.name);
            
          });

          console.log(this.state.name)

        };
        
        saveFormRef = formRef => {
          this.formRef = formRef;
        };
        
         
        
        
        render(){
            
            //console.log(values);
            //console.log(this.state.name);
            return(
                <div>
                    <Col xs={24} sm={24} md={12} lg={8} xl={6}>
                        <Card style={{ width: 300, margin:'15px auto' } }
                            cover={
                            <img
                                alt="example"
                                src={this.img}
                                width="200px" height="200px"
                            />
                            }           
                            actions={[<button style={this.style} onClick={this.toggleState}> <Icon type="heart"   style={{fontSize:'20px', color:'#F50000'}} theme={this.state.theme}/></button>,
                            <button style={this.style}  onClick={this.showModal} ><Icon type="edit" /></button>, 
                            <button style={this.style} onClick={()=>this.props.removeItem(this.props.person)} ><Icon type="delete"  theme="filled" /> </button>]}
                            >
                        <div>
                            <h3>{this.state.name}</h3>
                            <div>
                                <p  className="p-style"><Icon type="mail" style={{fontSize:'18px',marginRight:'10px'}} />  <span id='p1'> {this.state.email} </span> </p>
                            </div>
                            <div>
                                <p className="p-style"><Icon type="phone" style={{fontSize:'18px',marginRight:'10px'}} />  <span id="p2"> {this.state.phone}</span> </p>
                            </div>
                            <div>
                                <p className="p-style"><Icon type="global" style={{fontSize:'18px',marginRight:'10px'}}/> http:// <span id="p3">{this.state.website}</span> </p>
                            </div>
                        </div>
                        </Card>
                    </Col>

                            {/* MOdal */}
                    
                    <CollectionCreateForm
                        wrappedComponentRef={this.saveFormRef}
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        onCreate={this.handleCreate}
                        name={this.state.name}
                        email={this.state.email}
                        phone={this.state.phone}
                        website={this.state.website}/>
                    </div>
            );
            
        }
    }

export default PeopleItem;