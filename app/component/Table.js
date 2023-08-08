export default function Table({thItems, tdItems}) {
    return(
        <>
            <div className="tbl-wrap">
                <table>
                    <thead>
                        <tr>
                            {
                                thItems.map((a,i)=>{
                                    return(
                                        <th key={i}>{a}</th>
                                    )
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.keys(tdItems).map(key=>(
                                <tr key={key}>
                                    {tdItems[key].map((aa, ii)=>(
                                        <td key={ii}>{aa}</td>
                                    ))}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}