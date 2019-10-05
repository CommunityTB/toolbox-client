import React, { Component } from 'react';
import { AppContext } from '../components/AppProvider';

export default class DropdownCategory extends Component {

    static contextType = AppContext;

    handleChange() {
        
    }

    toolCats = ['hammers','cutting tools','electric drills','electric saws','table saws','power grinders','sanders','chainsaws','pressure washers','cultivators','plate compactors','post hole digger'];

    render() {
        return(
            <div className="form-section">
            <label htmlFor="tool-cat">Category</label>
            <select id="tool-cat" name="toolCat" onChange={this.handleChange} required>
              {toolCats.map(cat => {
                let val = cat === '-' ? '' : cat
                return <option key={cat} value={val}>{cat}</option>
              })}
            </select>
          </div>
        )
    }
}