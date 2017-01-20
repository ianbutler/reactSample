import React, {PropTypes} from 'react';

const HomePageList = ({title, dataArr, dataObj}) => {
    let dataDisplay;
    if (dataArr) {
        dataDisplay = dataArr.map((item, index) => {
            return <p key={index}>{item}</p>;
        });
        console.log("dataDisplay", dataDisplay);
    } else if (dataObj) {
        console.log("dataObj", ...dataObj);
        dataDisplay = "blah"

    }

    return (
        <div>
            <h3>{title}:</h3>
            {dataArr && dataDisplay}
            {dataObj && dataDisplay}
        </div>
    );
};

HomePageList.propTypes = {
    dataArr: PropTypes.array,
    dataObj: PropTypes.object,
    title: PropTypes.string.isRequired
};

export default HomePageList;
