import React from 'react';
import Child from './child'

const Parent = (props) =>{
    return (
<div>
    {/* this passes everything from the grandfather to the child */} 
    {/* <Child {...props} xyz='xyz'/>  */}
    <Child doWhatever={props.changeTheWorldEvent}/> 
    <Child doWhatever={props.changeTheWorldEvent}/> 
</div>
    );
}

export default Parent;