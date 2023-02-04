import React from 'react';
import './app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Feed from './pages/Feed';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navigation from './components/Nav';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Profile from './pages/Profile';
import Experience from './pages/Experience';
import UserFeed from './pages/UserFeed';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <StoreProvider>
                        <Navigation />
                        <Routes>
                            <Route
                                path="/"
                                element={<Home />}
                            />
                            <Route
                                path="/login"
                                element={<Login />}
                            />
                            <Route
                                path="/signup"
                                element={<Signup />}
                            />
                            {/* <Route
                                path="/success"
                                element={<Success />}
                            /> */}
                            <Route
                                path="/profile"
                                element={<Profile />}
                            />
                            <Route
                                path="/feed"
                                element={<Feed />}
                            />
                            <Route
                                path="/shop/"
                                element={<Shop />}
                            />
                               <Route
                                path="/cart/"
                                element={<cart />}
                            />
                            <Route
                                path="/experience/:id"
                                element={<Experience />}
                            />
                             <Route
                                path="/user/:id"
                                element={<UserFeed />}
                            />
                        </Routes>
                    </StoreProvider>
                </div>
            </Router>
        </ApolloProvider>
    );
}
export default App;
