import React from 'react';

class SearchBar extends React.Component{
    state = {term:''};
    
    onInputChangeHandler = event =>{
        this.setState({term: event.target.value});
    };

    onFormSubmit = event => {
        /*we call preventDefault() to prevent refresh when we submit the 
         form or what's beent wrote in the search bar*/
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                        type="text" 
                        value={this.state.term}
                        onChange={this.onInputChangeHandler} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
