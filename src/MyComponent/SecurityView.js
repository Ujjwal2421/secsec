import { Box,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'

const columns = [
    { field: 'securityName', headerName: 'Security Name', width: 150 },
    { field: 'securityDescription', headerName: 'Security Description', width:300 },
    { field: 'hasPosition', headerName: 'Has Position', width: 200 },
    { field: 'isActiveSecurity', headerName: 'Is Active Security', width: 200 },
    { field: 'lotSize', headerName: 'Lot Size', width: 200 },
    { field: 'bbgUniqueName', headerName: 'BBG Unique Name', width: 200 },
    { field: 'cusip', headerName: 'CUSIP', width: 200 },
    { field: 'isin', headerName: 'ISIN', width: 200 },
    { field: 'sedol', headerName: 'SEDOL', width: 200 },
    { field: 'bloombergTicker', headerName: 'Bloomberg Ticker', width: 200 },
    { field: 'bloombergUniqueID', headerName: 'Bloomberg Unique ID', width: 200 },
    { field: 'bbgGlobalID', headerName: 'BBG Global ID', width: 200 },
    { field: 'tickerAndExchange', headerName: 'Ticker and Exchange', width: 200 },
    { field: 'isADRFlag', headerName: 'Is ADR Flag', width: 200 },
    { field: 'adrUnderlyingTicker', headerName: 'ADR Underlying Ticker', width: 200 },
    { field: 'adrUnderlyingCurrency', headerName: 'ADR Underlying Currency', width: 200 },
    { field: 'sharesPerADR', headerName: 'Shares Per ADR', width: 200 },
    { field: 'ipoDate', headerName: 'IPO Date', width: 200 },
    { field: 'pricingCurrency', headerName: 'Pricing Currency', width: 200 },
    { field: 'settleDays', headerName: 'Settle Days', width: 200 },
    { field: 'totalSharesOutstanding', headerName: 'Total Shares Outstanding', width: 200 },
    { field: 'votingRightsPerShare', headerName: 'Voting Rights Per Share', width: 200 },
    { field: 'averageVolume20D', headerName: 'Average Volume - 20D', width: 200 },
    { field: 'beta', headerName: 'Beta', width: 200 },
    { field: 'shortInterest', headerName: 'Short Interest', width: 200 },
    { field: 'returnYTD', headerName: 'Return - YTD', width: 200 },
    { field: 'volatility90D', headerName: 'Volatility - 90D', width: 200 },
    { field: 'pfAssetClass', headerName: 'PF Asset Class', width: 200 },
    { field: 'pfCountry', headerName: 'PF Country', width: 200 },
    { field: 'pfCreditRating', headerName: 'PF Credit Rating', width: 200 },
    { field: 'pfCurrency', headerName: 'PF Currency', width: 200 },
    { field: 'pfInstrument', headerName: 'PF Instrument', width: 200 },
    { field: 'pfLiquidityProfile', headerName: 'PF Liquidity Profile', width: 200 },
    { field: 'pfMaturity', headerName: 'PF Maturity', width: 200 },
    { field: 'pfnaicsCode', headerName: 'PF NAICS Code', width: 200 },
    { field: 'pfRegion', headerName: 'PF Region', width: 200 },
    { field: 'pfSector', headerName: 'PF Sector', width: 200 },
    { field: 'pfSubAssetClass', headerName: 'PF Sub Asset Class', width: 200 },
    { field: 'countryOfIssuance', headerName: 'Country of Issuance', width: 200 },
    { field: 'exchange', headerName: 'Exchange', width: 200 },
    { field: 'issuer', headerName: 'Issuer', width: 200 },
    { field: 'issueCurrency', headerName: 'Issue Currency', width: 200 },
    { field: 'tradingCurrency', headerName: 'Trading Currency', width: 200 },
    { field: 'bbgIndustrySubGroup', headerName: 'BBG Industry Sub Group', width: 200 },
    { field: 'bloombergIndustryGroup', headerName: 'Bloomberg Industry Group', width: 200 },
    { field: 'bloombergSector', headerName: 'Bloomberg Sector', width: 200 },
    { field: 'countryOfIncorporation', headerName: 'Country of Incorporation', width: 200 },
    { field: 'riskCurrency', headerName: 'Risk Currency', width: 200 },
    { field: 'openPrice', headerName: 'Open Price', width: 200 },
    { field: 'closePrice', headerName: 'Close Price', width: 200 },
    { field: 'volume', headerName: 'Volume', width: 200 },
    { field: 'lastPrice', headerName: 'Last Price', width: 200 },
    { field: 'askPrice', headerName: 'Ask Price', width: 200 },
    { field: 'bidPrice', headerName: 'Bid Price', width: 200 },
    { field: 'peRatio', headerName: 'PE Ratio', width: 200 },
    { field: 'dividendDeclaredDate', headerName: 'Dividend Declared Date', width: 200 },
    { field: 'dividendExDate', headerName: 'Dividend Ex Date', width: 200 },
    { field: 'dividendRecordDate', headerName: 'Dividend Record Date', width: 200 },
    { field: 'dividendPayDate', headerName: 'Dividend Pay Date', width: 200 },
    { field: 'dividendAmount', headerName: 'Dividend Amount', width: 200 },
    { field: 'frequency', headerName: 'Frequency', width: 200 },
    { field: 'dividendType', headerName: 'Dividend Type', width: 200 }
  ];
  

const SecurityView = () => {
    const [action, setAction] = useState('');
    const [data, setData] = useState([]);

    const getAllSecurities = () => {
      axios.get("http://localhost:5251/api/Equity")
        .then((res)=>setData(res.data))
        .catch(err=>{console.log(err)})
    }

    useEffect(getAllSecurities, []);

  return (
        <Box sx={{  overflow:'auto'
        }}><Typography variant="h4" component="h2" gutterBottom>Equity Data</Typography>

          <DataGrid
          
              getRowId={(row) => row.securityId}
              rows={data}
              columns={columns} />
      </Box>
  )
}

export default SecurityView














// import React, { Fragment, useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from "axios";

// const SecurityView = () => {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5251/api/Equity')
//             .then(response => {
//                 setData(response.data);
            
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//             });
//     }, []);

//     return (
//         <div>
//             <h2>Equity Data</h2>
//             <div className="table-container">
//                 <table>
//                     <thead>
// <tr>
//                             <th>securityId</th>
//                             <th>securityName</th>
//                             <th>securityDescription</th>
//                             <th>hasPosition</th>
//                             <th>isActiveSecurity</th>
//                             <th>lotSize</th>
//                             <th>bbgUniqueName</th>
//                             <th>cusip</th>
//                             <th>isin</th>
//                             <th>sedol</th>
//                             <th>bloombergTicker</th>
//                             <th>bloombergUniqueID</th>
//                             <th>bbgGlobalID</th>
//                             <th>tickerAndExchange</th>
//                             <th>isADRFlag</th>
//                             <th>adrUnderlyingTicker</th>
//                             <th>adrUnderlyingCurrency</th>
//                             <th>sharesPerADR</th>
//                             <th>ipoDate</th>
//                             <th>pricingCurrency</th>
//                             <th>settleDays</th>
//                             <th>totalSharesOutstanding</th>
//                             <th>votingRightsPerShare</th>
//                             <th>averageVolume20D</th>
//                             <th>beta</th>
//                             <th>shortInterest</th>
//                             <th>returnYTD</th>
//                             <th>volatility90D</th>
//                             <th>pfAssetClass</th>
//                             <th>pfCountry</th>
//                             <th>pfCreditRating</th>
//                             <th>pfCurrency</th>
//                             <th>pfInstrument</th>
//                             <th>pfLiquidityProfile</th>
//                             <th>pfMaturity</th>
//                             <th>pfnaicsCode</th>
//                             <th>pfRegion</th>
//                             <th>pfSector</th>
//                             <th>pfSubAssetClass</th>
//                             <th>countryOfIssuance</th>
//                             <th>exchange</th>
//                             <th>issuer</th>
//                             <th>issueCurrency</th>
//                             <th>tradingCurrency</th>
//                             <th>bbgIndustrySubGroup</th>
//                             <th>bloombergIndustryGroup</th>
//                             <th>bloombergSector</th>
//                             <th>countryOfIncorporation</th>
//                             <th>riskCurrency</th>
//                             <th>openPrice</th>
//                             <th>closePrice</th>
//                             <th>volume</th>
//                             <th>lastPrice</th>
//                             <th>askPrice</th>
//                             <th>bidPrice</th>
//                             <th>peRatio</th>
//                             <th>dividendDeclaredDate</th>
//                             <th>dividendExDate</th>
//                             <th>dividendRecordDate</th>
//                             <th>dividendPayDate</th>
//                             <th>dividendAmount</th>
//                             <th>frequency</th>
//                             <th>dividendType</th>

//                         </tr>
//                     </thead>
//                     <tbody>
// {data.map(stock => (
//                             <tr key={stock.securityId}>
//                                 <td>{stock.securityId}</td>
//                                 <td>{stock.securityName}</td>
//                                 <td>{stock.securityDescription}</td>
//                                 <td>{stock.hasPosition}</td>
//                                 <td>{stock.isActiveSecurity}</td>
//                                 <td>{stock.lotSize}</td>
//                                 <td>{stock.bbgUniqueName}</td>
//                                 <td>{stock.cusip}</td>
//                                 <td>{stock.isin}</td>
//                                 <td>{stock.sedol}</td>
//                                 <td>{stock.bloombergTicker}</td>
//                                 <td>{stock.bloombergUniqueID}</td>
//                                 <td>{stock.bbgGlobalID}</td>
//                                 <td>{stock.tickerAndExchange}</td>
//                                 <td>{stock.isADRFlag}</td>
//                                 <td>{stock.adrUnderlyingTicker}</td>
//                                 <td>{stock.adrUnderlyingCurrency}</td>
//                                 <td>{stock.sharesPerADR}</td>
//                                 <td>{stock.ipoDate}</td>
//                                 <td>{stock.pricingCurrency}</td>
//                                 <td>{stock.settleDays}</td>
//                                 <td>{stock.totalSharesOutstanding}</td>
//                                 <td>{stock.votingRightsPerShare}</td>
//                                 <td>{stock.averageVolume20D}</td>
//                                 <td>{stock.beta}</td>
//                                 <td>{stock.shortInterest}</td>
//                                 <td>{stock.returnYTD}</td>
//                                 <td>{stock.volatility90D}</td>
//                                 <td>{stock.pfAssetClass}</td>
//                                 <td>{stock.pfCountry}</td>
//                                 <td>{stock.pfCreditRating}</td>
//                                 <td>{stock.pfCurrency}</td>
//                                 <td>{stock.pfInstrument}</td>
//                                 <td>{stock.pfLiquidityProfile}</td>
//                                 <td>{stock.pfMaturity}</td>
//                                 <td>{stock.pfnaicsCode}</td>
//                                 <td>{stock.pfRegion}</td>
//                                 <td>{stock.pfSector}</td>
//                                 <td>{stock.pfSubAssetClass}</td>
//                                 <td>{stock.countryOfIssuance}</td>
//                                 <td>{stock.exchange}</td>
//                                 <td>{stock.issuer}</td>
//                                 <td>{stock.issueCurrency}</td>
//                                 <td>{stock.tradingCurrency}</td>
//                                 <td>{stock.bbgIndustrySubGroup}</td>
//                                 <td>{stock.bloombergIndustryGroup}</td>
//                                 <td>{stock.bloombergSector}</td>
//                                 <td>{stock.countryOfIncorporation}</td>
//                                 <td>{stock.riskCurrency}</td>
//                                 <td>{stock.openPrice}</td>
//                                 <td>{stock.closePrice}</td>
//                                 <td>{stock.volume}</td>
//                                 <td>{stock.lastPrice}</td>
//                                 <td>{stock.askPrice}</td>
//                                 <td>{stock.bidPrice}</td>
//                                 <td>{stock.peRatio}</td>
//                                 <td>{stock.dividendDeclaredDate}</td>
//                                 <td>{stock.dividendExDate}</td>
//                                 <td>{stock.dividendRecordDate}</td>
//                                 <td>{stock.dividendPayDate}</td>
//                                 <td>{stock.dividendAmount}</td>
//                                 <td>{stock.frequency}</td>
//                                 <td>{stock.dividendType}</td>
//                             </tr>
//                         ))}
// </tbody>
//                 </table>
//             </div>
//         </div>
//     );

// };

// export default SecurityView
























// import React, { Fragment, useEffect, useState } from "react";
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios';
// import jsonData from './Info.json';
// import SecurityView from './SecurityView';

// const SecurityView = () => {
//     // const navigate = useNavigate();
//     const [headers, setHeaders] = useState([]);
//     const keys = Object.keys(jsonData);
//     // const handleEdit =(id)=>{
//     //     navigate('/edite',{state:{info:id}});
//     //     console.log(id)
//     // }

//     // const handleDelete =(id)=>{
//     //     if(window.confirm(`are you sure to delete ${id}`) == true){
//     //         alert(id);
//     //     }
//     // }
    
//     console.log(keys)
//     useEffect(() => {
//         console.log("Use Effect Called")
//         axios.get('/Equity').then((response) => {
//             setHeaders(response.data);
//             console.log(response)
//         }).catch((error)=>console.log(error))
//     },[])

// return (
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                     {keys.map((key) => (
//                         <th key={key}>{key}</th>
//             ))}
//                     </tr>
//                 </thead>
//                     <tbody>
//                         <tr>
//                         {headers.map(stock => (
//                             <tr key={stock.securityId}>
//                                 <td>{stock.securityId}</td>
//                                 <td>{stock.securityName}</td>
//                                 <td>{stock.securityDescription}</td>
//                                 <td>{stock.hasPosition}</td>
//                                 <td>{stock.isActiveSecurity}</td>
//                                 <td>{stock.lotSize}</td>
//                                 <td>{stock.bbgUniqueName}</td>
//                                 <td>{stock.cusip}</td>
//                                 <td>{stock.isin}</td>
//                                 <td>{stock.sedol}</td>
//                                 <td>{stock.bloombergTicker}</td>
//                                 <td>{stock.bloombergUniqueID}</td>
//                                 <td>{stock.bbgGlobalID}</td>
//                                 <td>{stock.tickerAndExchange}</td>
//                                 <td>{stock.isADRFlag}</td>
//                                 <td>{stock.adrUnderlyingTicker}</td>
//                                 <td>{stock.adrUnderlyingCurrency}</td>
//                                 <td>{stock.sharesPerADR}</td>
//                                 <td>{stock.ipoDate}</td>
//                                 <td>{stock.pricingCurrency}</td>
//                                 <td>{stock.settleDays}</td>
//                                 <td>{stock.totalSharesOutstanding}</td>
//                                 <td>{stock.votingRightsPerShare}</td>
//                                 <td>{stock.averageVolume20D}</td>
//                                 <td>{stock.beta}</td>
//                                 <td>{stock.shortInterest}</td>
//                                 <td>{stock.returnYTD}</td>
//                                 <td>{stock.volatility90D}</td>
//                                 <td>{stock.pfAssetClass}</td>
//                                 <td>{stock.pfCountry}</td>
//                                 <td>{stock.pfCreditRating}</td>
//                                 <td>{stock.pfCurrency}</td>
//                                 <td>{stock.pfInstrument}</td>
//                                 <td>{stock.pfLiquidityProfile}</td>
//                                 <td>{stock.pfMaturity}</td>
//                                 <td>{stock.pfnaicsCode}</td>
//                                 <td>{stock.pfRegion}</td>
//                                 <td>{stock.pfSector}</td>
//                                 <td>{stock.pfSubAssetClass}</td>
//                                 <td>{stock.countryOfIssuance}</td>
//                                 <td>{stock.exchange}</td>
//                                 <td>{stock.issuer}</td>
//                                 <td>{stock.issueCurrency}</td>
//                                 <td>{stock.tradingCurrency}</td>
//                                 <td>{stock.bbgIndustrySubGroup}</td>
//                                 <td>{stock.bloombergIndustryGroup}</td>
//                                 <td>{stock.bloombergSector}</td>
//                                 <td>{stock.countryOfIncorporation}</td>
//                                 <td>{stock.riskCurrency}</td>
//                                 <td>{stock.openPrice}</td>
//                                 <td>{stock.closePrice}</td>
//                                 <td>{stock.volume}</td>
//                                 <td>{stock.lastPrice}</td>
//                                 <td>{stock.askPrice}</td>
//                                 <td>{stock.bidPrice}</td>
//                                 <td>{stock.peRatio}</td>
//                                 <td>{stock.dividendDeclaredDate}</td>
//                                 <td>{stock.dividendExDate}</td>
//                                 <td>{stock.dividendRecordDate}</td>
//                                 <td>{stock.dividendPayDate}</td>
//                                 <td>{stock.dividendAmount}</td>
//                                 <td>{stock.frequency}</td>
//                                 <td>{stock.dividendType}</td>

//                             </tr>
//                         ))}
//                     </tr>
//                     </tbody>
//             </Table>
//     );
// };

// export default SecurityView
