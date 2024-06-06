import React from 'react';
import BKMK from './BKMK';

const BookMarks = ([{bookmark}]) => {
    console.log(bookmark);
    return (
        <div>
            <h3>BookMark {bookmark.length}</h3>
        {
            bookmark.map(BKmark=><BKMK BKmark={BKmark} key={BKmark.id}></BKMK>)
        }
        </div>
    );
};

export default BookMarks;