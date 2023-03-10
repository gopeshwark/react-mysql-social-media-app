import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { makeRequest } from '../../axios-instance';
import "./update.scss";

const Update = ({setOpenModalCb, user}) => {
    const [cover, setCover] = useState(null);
    const [profile, setProfile] = useState(null);
    const [texts, setTexts] = useState({
        name: "",
        city: "",
        website: "  "
    })

    const queryClient = useQueryClient();

    const upload = async(file) => {
        try{
            const formData = new FormData();
            formData.append("file", file);
            const res = await makeRequest.post("/upload", formData);
            return res.data;
        }catch(err){
            console.log(err);
        }
    }

    const mutation = useMutation((user) => {
        return makeRequest.put("/users", user);
    }, {
        onSuccess:() => {
            queryClient.invalidateQueries(['user']);
        }
    });
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        let coverUrl;
        let profileUrl;
        
        coverUrl = cover ? await upload(cover) : user.coverPic;
        profileUrl = profile ? await upload(profile) : user.profilePic;

        mutation.mutate({...texts, coverPic: coverUrl, profilePic: profileUrl});
        setOpenModalCb(false);
    }

    const handleChange = (e) => {
        setTexts((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    return(
        <div className="update">
            Update
            <form>
                <input type="file" onChange={(e) => setCover(e.target.files[0])}/>
                <input type="file" onChange={(e) => setProfile(e.target.files[0])}/>
                <input type="text" name="name" onChange={handleChange} />
                <input type="text" name="city" onChange={handleChange} />
                <input type="text" name="website" onChange={handleChange} />
                <button onClick={handleSubmit}>Update</button>
            </form>
            <button onClick={() => setOpenModalCb(false)}>X</button>
        </div>
    )
}

export default Update;