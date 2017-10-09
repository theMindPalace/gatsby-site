import React from 'react';
import Link from 'gatsby-link';
import Conuter from '../components/conuter'


const ThirdPage = () => (
    <div>
        This is the third page
        <Conuter/>
        <Link to="/">Home</Link>
    </div>
)

export default ThirdPage;