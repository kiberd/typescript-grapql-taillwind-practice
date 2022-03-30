import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from "@apollo/client";
import {setContext} from '@apollo/client/link/context';

// // Create the http link
// const httpLink = createHttpLink({
//     uri: 'https://api.github.com/graphql',
// });
//
// // Generate and set the header with the auth details
// const authLink = setContext((_, {headers}) => {
//     // get the authentication token from env variables if it exists
//     // const token = API_KEY;
//     const token = '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';
//
//     // return the headers to the context so httpLink can read them
//     return {
//         headers: {
//             ...headers,
//             authorization: token ? `Bearer ${token}` : "",
//         }
//     }
// });
//
// // Generate your client with the authLink and httpLink
// const client = new ApolloClient({
//     cache: new InMemoryCache(),
//     link: authLink.concat(httpLink)
// });


const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});


ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


