import React, {Component} from 'react';

// class format of the functional below. here, u dont need 
// a class name as it is anonymous. also, props should come with this(i.e this.props)
const withClass = (WrappedComponent, className) => {
  const WithClass = class extends Component {
    render() {
      return (
        <div className={className}>
          {/* dont manipulate the wrapped component */}
          <WrappedComponent ref={this.props.forwardedRef} {...this.props}/>
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) =>{
    return <WithClass {...props} forwardedRef={ref} />
  })
}



// javascript function returning a functional Component
// const withClass = (WrappedComponent, className) => {   return (props) => (
//  <div className={className}>     {/* dont manipulate the wrapped component
// */}       <WrappedComponent {...props} />     </div>   ) }

export default withClass;
