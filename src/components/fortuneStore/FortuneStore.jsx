import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card';
import Banner from './Banner';
import { getProductCategoryList } from '../../redux/Actions/fortunestoreActions.js';

const FortuneStore = () => {
    const dispatch = useDispatch();
    const productCategories = useSelector(state => state.fortunestore.productCategoryList);
    const isLoading = useSelector(state => state.fortunestore.isLoading);
    const error = useSelector(state => state.fortunestore.error);

    useEffect(() => {
        dispatch(getProductCategoryList());
    }, [dispatch]);

    return (
        <>
            <div className='w-4/5 mx-auto mt-0 sm:mt-5'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p className="text-red-500 text-center">{error}</p>
                ) : (
                    <Card productCategoryList={productCategories} />
                )}
            </div>
            <div className='mx-4'>
                <Banner />
            </div>
        </>
    );
};

export default FortuneStore;
