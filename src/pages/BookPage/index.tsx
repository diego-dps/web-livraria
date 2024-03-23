import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import ListBooks from '../../components/ListBooks';


const BookPage: React.FC = () => {

    

    return (
        <div>
         <ListBooks />
        </div>
      );
      
}

export default BookPage;