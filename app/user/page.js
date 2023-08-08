'use client'
import { useState } from 'react';
import Table from '../component/Table'
import Pagination from '../component/Pagination';

const PAGE_SIZE = 4;

export default function User() {
    const thItems = ['no','이름','연락처','가입일'];
    const tdItems= {
        'user01':[1,'user01','01012345678','2023-08-03'],
        'user02':[2,'user02','01012345678','2023-08-03'],
        'user03':[3,'user03','01012345678','2023-08-03'],
        'user04':[4,'user04','01012345678','2023-08-03'],
        'user05':[5,'user05','01012345678','2023-08-03'],
        'user06':[6,'user01','01012345678','2023-08-03'],
        'user07':[7,'user02','01012345678','2023-08-03'],
        'user08':[8,'user03','01012345678','2023-08-03'],
        'user09':[9,'user04','01012345678','2023-08-03'],
        'user10':[10,'user05','01012345678','2023-08-03'],
        'user11':[11,'user01','01012345678','2023-08-03'],
        'user12':[12,'user02','01012345678','2023-08-03'],
        'user13':[13,'user03','01012345678','2023-08-03'],
        'user14':[14,'user04','01012345678','2023-08-03'],
        'user15':[15,'user05','01012345678','2023-08-03'],
        'user16':[16,'user01','01012345678','2023-08-03'],
        'user17':[17,'user02','01012345678','2023-08-03'],
        'user18':[18,'user03','01012345678','2023-08-03'],
        'user19':[19,'user04','01012345678','2023-08-03'],
        'user20':[20,'user05','01012345678','2023-08-03'],
        'user21':[21,'user01','01012345678','2023-08-03'],
        'user22':[22,'user02','01012345678','2023-08-03'],
        'user23':[23,'user03','01012345678','2023-08-03'],
        'user24':[24,'user04','01012345678','2023-08-03'],
        'user25':[25,'user05','01012345678','2023-08-03'],
    };

    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const displayedUsers = Object.keys(tdItems).slice(startIndex, endIndex).reduce((obj,key)=>{
        obj[key] = tdItems[key];
        return obj;
    }, {});
    
  
    const totalPages = Math.ceil(Object.keys(tdItems).length / PAGE_SIZE);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    return(
        <>
            {/* <p className='text-3xl underline text-center'>User Page</p> */}
            <Table thItems={thItems} tdItems={displayedUsers} />
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </>
    )
}