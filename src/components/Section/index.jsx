import React from 'react';

const Section = ({children, light, dark}) => {
    if(dark){
        return (
            <div className="w-100 min-vh-100 pv4 bg-jaguar roboto relative">
                {children}
            </div>
        )
    } else if(light) {
        return (
            <div className="w-100 min-vh-100 pv4 bg-haiti roboto relative">
                {children}
            </div>
        )
    } else {
        return (
            <div className="w-100 min-vh-100 pv4 bg-white roboto relative">
                {children}
            </div>
        )
    }
}
 
export default Section;