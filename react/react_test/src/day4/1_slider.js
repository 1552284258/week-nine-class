import React from 'react';
import ReactDOM from 'react-dom';

import Slider from '../day3/slider/index'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <Slider>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
            </Slider>
        </div>;
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))