import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Workshop from './pages/Workshop';

function App() {
    return (
        <div>
            <Router>
                <Navbar />
                <section>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/workshop" component={Workshop} />
                    </Switch>
                </section>
                {/* <Footer/> */}
            </Router>
        </div>
    )
}

export default App
