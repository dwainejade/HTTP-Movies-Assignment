import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";


const AddMovie = (props) => {
    const { push } = useHistory();
    const [input, setInput] = useState({
        title: "",
        director: "",
        metascore: null,
        stars: [],
    })

    const handleChange = (e) => {
        e.persist();
        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            })
    };

    const submit = e => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/api/movies`, input)
            .then((res) => {
                console.log("submit res", res)
                push("/");
            })
            .catch((err) => console.log(err.response));
    }


    return (
        <form onSubmit={submit} className="form-group">
            <div className="m-4">
                <label>Title</label>
                <input
                    className="form-control"
                    type="text"
                    name="title"
                    value={input.title}
                    placeholder={input.title}
                    onChange={handleChange}
                />
                <label>Director</label>
                <input
                    className="form-control"
                    type="text"
                    name="director"
                    value={input.director}
                    onChange={handleChange}
                />
                <label>Metascore</label>
                <input
                    className="form-control"
                    type="text"
                    name="metascore"
                    value={input.metascore}
                    placeholder="0-100"
                    onChange={handleChange}
                />
                <button type="submit" className="btn m-3 btn-primary">Add Movie</button>
            </div>
        </form >
    )
}

export default AddMovie;