import React, {PropTypes} from 'react';

const HomePageList = ({title, dataArr}) => {
    return (
        <div>
            <h3>{title}:</h3>
            {dataArr.map((item, index) => {
                return <p key={index}>{item}</p>;
            })}
        </div>
    );
};

HomePageList.propTypes = {
    dataArr: PropTypes.array,
    title: PropTypes.string.isRequired
};

export default HomePageList;
