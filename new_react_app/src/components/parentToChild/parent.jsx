import React from 'react';
import Child from './child'

const Parent = (props) =>{
    return (
<div>
    {/* this passes everything from the grandfather to the child */} 
    {/* <Child {...props} xyz='xyz'/>  */}
    <Child doWhatever={props.changeTheWorldEvent} title={props.title}/> 
    <Child doWhatever={props.keepTheWorldSameEvent} title={props.title}/> 
</div>
    );
}

export default Parent;