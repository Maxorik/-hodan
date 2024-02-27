import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";

export const ProjectsPage = observer(() => {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // appStore.getData('tutorials').then(() => setLoading(false));
    }, []);


    return (
        <div className='content-container'>
            projects...
        </div>
    );
})