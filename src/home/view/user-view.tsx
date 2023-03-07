import React from "react"
import { ViewProps, ViewState } from "../types/types";


export default class UserView extends React.Component<ViewProps,ViewState>{
        render(){
            const{
                name,
                email,
                message,
                handleChange,
                handleSubmit,
                formSent
            } = this.props;
             
      
            return(
                <div className="formulario">
                    <div >
                            <form onSubmit={handleSubmit}>
                    
                            <label>Name</label>
                            <input placeholder='Name' 
                                name ="name"
                                value={name}
                                onChange={handleChange}
                            />
                        
                            <label>Email</label>
                            <input placeholder='Email'
                                name="email" 
                                value={email}
                                onChange={handleChange}
                            />
                            <label>message</label>
                            <input placeholder='message'
                                name="message"
                                value={message}
                                onChange={handleChange}
                            />
                            <button type="submit">Enviar</button> 
                            <span>{formSent?'formulario enviado com sucesso!':''}</span>
                        </form>
                        
                        
                    </div>

                    <div className="drops">
                        <div className="drop drop-1"></div>
                        <div className="drop drop-2"></div>
                        <div className="drop drop-3"></div>
                        <div className="drop drop-4"></div>
                        <div className="drop drop-5"></div>
                    </div>
                </div>
            )
               
        }  
 }
 