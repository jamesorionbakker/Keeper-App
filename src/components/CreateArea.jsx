import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    let [formVal, setInput] = useState({ title: '', body: '' });
    let [isExpanded, setExpanded] = useState(false);

    function handleChange(e) {
        let { value, name } = e.target;
        setInput((prevValue) => {
            return { ...prevValue, [name]: value };
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (formVal.body === '' || formVal.title === '') return;
        props.onSubmit(formVal);
        setInput({ title: '', body: '' });
        setExpanded(false)
    }

    return (
        <div>
            <form className="create-note" onSubmit={handleSubmit}>
                {isExpanded && <input
                    value={formVal.title}
                    onChange={handleChange}
                    name="title"
                    placeholder="Title"
                />}
                
                <textarea
                    value={formVal.body}
                    onChange={handleChange}
                    onSelect={() => {
                        setExpanded(true);
                    }}
                    name="body"
                    placeholder="Take a note..."
                    rows={isExpanded ? 3 : 1}
                />
                <Zoom in={isExpanded ? true : false}>
                    <Fab type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default CreateArea;
