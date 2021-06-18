import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
    let [notes, setNotes] = useState([]);

    function addNote(formData) {
        setNotes((prevValue) => {
            return [...prevValue, formData];
        });
    }
    function deleteNote(id) {
        setNotes((prevValue) => {
            return prevValue.filter((item, i) => {
                return i !== id;
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onSubmit={addNote} />
            {notes.map((item, i) => {
                return (
                    <Note
                        handleDelete={deleteNote}
                        id={i}
                        key={i}
                        title={item.title}
                        content={item.body}
                    />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;
