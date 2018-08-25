import React, {Component} from 'react';
import Hero from './Hero';
import Feature from './Feature';
import Updates from './Updates';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Feature />
                <Updates />
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;
