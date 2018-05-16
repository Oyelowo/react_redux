import React, {Component} from 'react';

// class format of the functional below. here, u dont need 
// a class name as it is anonymous. also, props should come with this(i.e this.props)
const withClass = (WrappedComponent, className) => {
  return class extends Component {
    render() {
      return (
        <div className={className}>
          {/* dont manipulate the wrapped component */}
          <WrappedComponent {...this.props}/>
        </div>
      )
    }
  }
}

// javascript function returning a functional Component
// const withClass = (WrappedComponent, className) => {   return (props) => (
//  <div className={className}>     {/* dont manipulate the wrapped component
// */}       <WrappedComponent {...props} />     </div>   ) }

export default withClass
