import React from 'react';

class MyComponent extends React.Component {
  render(){
    let obj = {
        array: ["a","s","d","f","h"]
    };
    for (var l=0;l<100;l++){
        obj.array[l] = l+1;
    }
    return (
      <React.Fragment>
        <select style={{ width:"100%",border:"none" }}>
                {obj.array.length > 0 && obj.array.map((item) =>
                    <option key={item.array}>{obj.array}</option>
                 )}
            </select>
      </React.Fragment>
    );
  }
}

export default MyComponent;