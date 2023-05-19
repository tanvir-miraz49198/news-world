import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>This  Category  : {categoryNews.length}</h1>
        </div>
    );
};

export default Category;