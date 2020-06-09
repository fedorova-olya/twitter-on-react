import React from 'react';
import './app.css'
import AppHeader from '../app-header';
import SearchPanel from '../search-panel'
import PoststatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';


const App = () => {
    return(
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PoststatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )

}

export default App;
