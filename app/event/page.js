import Table from '../component/Table'

export default function Event(props) {
    let thItems = ['no','이벤트명','진행상태','이벤트기간','담당자명','작성일자'];
    let tdItems= {
        'admin01' : [1,'test ttl 01', 1, '2023-07-03 ~ 2023-08-03', 'manager01', '2023-08-03'],
        'admin02' : [2,'test ttl 01', 0, '2023-07-03 ~ 2023-08-03', 'manager02', '2023-08-03'],
        'admin03' : [3,'test ttl 01', 2, '2023-07-03 ~ 2023-08-03', 'manager03', '2023-08-03'],
        'admin04' : [4,'test ttl 01', 1, '2023-07-03 ~ 2023-08-03', 'manager04', '2023-08-03'],
        'admin05' : [5,'test ttl 01', 0, '2023-07-03 ~ 2023-08-03', 'manager05', '2023-08-03'],
        };
    return(
        <>
            {/* <p className='text-3xl underline text-center'>Event Page</p> */}
            <Table thItems={thItems} tdItems={tdItems} />
        </>
    )
}