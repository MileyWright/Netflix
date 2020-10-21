import React, { useState, useContext, useEffect } from 'react';
import { SelectProfileContainer } from './Profiles';
import { FirebaseContext } from '../Context/firebase';
import { Loading } from '../Components';
export function BrowseContainer({ slides }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);

    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};

    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      }, [profile.displayName]);

      
    return (
        profile.displayName ? (
            <>
            {loading ? <Loading src={user.photoURL} /> : null}
            </>

        ) :
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
};