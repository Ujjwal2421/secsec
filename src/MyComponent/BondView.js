import React, { Fragment, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
const BondView = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data from the backend using Axios
        axios.get('http://localhost:5251/api/Bond')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Stock Data</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>securityId</th>
                            <th>securityDescription</th>
                            <th>securityName</th>
                            <th>assetType</th>
                            <th>investmentType</th>
                            <th>tradingFactor</th>
                            <th>pricingFactor</th>
                            <th>isin</th>
                            <th>bbgTicker</th>
                            <th>bbgUniqueID</th>
                            <th>cusip</th>
                            <th>sedol</th>
                            <th>firstCouponDate</th>
                            <th>cap</th>
                            <th>floor</th>
                            <th>couponFrequency</th>
                            <th>coupon</th>
                            <th>couponType</th>
                            <th>spread</th>
                            <th>callableFlag</th>
                            <th>fixToFloatFlag</th>
                            <th>putableFlag</th>
                            <th>issueDate</th>
                            <th>lastResetDate</th>
                            <th>maturity</th>
                            <th>callNotificationMaxDays</th>
                            <th>putNotificationMaxDays</th>
                            <th>penultimateCouponDate</th>
                            <th>resetFrequency</th>
                            <th>hasPosition</th>
                            <th>macaulayDuration</th>
                            <th>volatility30D</th>
                            <th>volatility90D</th>
                            <th>convexity</th>
                            <th>avgVolume30Days</th>
                            <th>pfAssetClass</th>
                            <th>pfCountry</th>
                            <th>pfCreditRating</th>
                            <th>pfCurrency</th>
                            <th>pfInstrument</th>
                            <th>pfLiquidityProfile</th>
                            <th>pfMaturity</th>
                            <th>pfnaicsCode</th>
                            <th>pfRegion</th>
                            <th>pfSector</th>
                            <th>pfSubAssetClass</th>
                            <th>bloombergIndustryGroup</th>
                            <th>bloombergIndustrySubGroup</th>
                            <th>bloombergIndustrySector</th>
                            <th>countryOfIssuance</th>
                            <th>issueCurrency</th>
                            <th>issuer</th>
                            <th>riskCurrency</th>
                            <th>putDate</th>
                            <th>putPrice</th>
                            <th>askPrice</th>
                            <th>highPrice</th>
                            <th>lowPrice</th>
                            <th>openPrice</th>
                            <th>volume</th>
                            <th>bidPrice</th>
                            <th>lastPrice</th>
                            <th>callDate</th>
                            <th>callPrice</th>

                        </tr>
</thead>
                    <tbody>
                        {data.map(stock => (
                            <tr key={stock.securityId}>
                                <td>{stock.securityId}</td>
                                <td>{stock.securityDescription}</td>
                                <td>{stock.securityName}</td>
                                <td>{stock.assetType}</td>
                                <td>{stock.investmentType}</td>
                                <td>{stock.tradingFactor}</td>
                                <td>{stock.pricingFactor}</td>
                                <td>{stock.isin}</td>
                                <td>{stock.bbgTicker}</td>
                                <td>{stock.bbgUniqueID}</td>
                                <td>{stock.cusip}</td>
                                <td>{stock.sedol}</td>
                                <td>{stock.firstCouponDate}</td>
                                <td>{stock.cap}</td>
                                <td>{stock.floor}</td>
                                <td>{stock.couponFrequency}</td>
                                <td>{stock.coupon}</td>
                                <td>{stock.couponType}</td>
                                <td>{stock.spread}</td>
                                <td>{stock.callableFlag}</td>
                                <td>{stock.fixToFloatFlag}</td>
                                <td>{stock.putableFlag}</td>
                                <td>{stock.issueDate}</td>
                                <td>{stock.lastResetDate}</td>
                                <td>{stock.maturity}</td>
                                <td>{stock.callNotificationMaxDays}</td>
                                <td>{stock.putNotificationMaxDays}</td>
                                <td>{stock.penultimateCouponDate}</td>
                                <td>{stock.resetFrequency}</td>
                                <td>{stock.hasPosition}</td>
                                <td>{stock.macaulayDuration}</td>
                                <td>{stock.volatility30D}</td>
                                <td>{stock.volatility90D}</td>
                                <td>{stock.convexity}</td>
                                <td>{stock.avgVolume30Days}</td>
                                <td>{stock.pfAssetClass}</td>
                                <td>{stock.pfCountry}</td>
                                <td>{stock.pfCreditRating}</td>
                                <td>{stock.pfCurrency}</td>
                                <td>{stock.pfInstrument}</td>
                                <td>{stock.pfLiquidityProfile}</td>
                                <td>{stock.pfMaturity}</td>
                                <td>{stock.pfnaicsCode}</td>
                                <td>{stock.pfRegion}</td>
                                <td>{stock.pfSector}</td>
                                <td>{stock.pfSubAssetClass}</td>
                                <td>{stock.bloombergIndustryGroup}</td>
                                <td>{stock.bloombergIndustrySubGroup}</td>
                                <td>{stock.bloombergIndustrySector}</td>
                                <td>{stock.countryOfIssuance}</td>
                                <td>{stock.issueCurrency}</td>
                                <td>{stock.issuer}</td>
                                <td>{stock.riskCurrency}</td>
                                <td>{stock.putDate}</td>
                                <td>{stock.putPrice}</td>
                                <td>{stock.askPrice}</td>
                                <td>{stock.highPrice}</td>
                                <td>{stock.lowPrice}</td>
                                <td>{stock.openPrice}</td>
                                <td>{stock.volume}</td>
                                <td>{stock.bidPrice}</td>
                                <td>{stock.lastPrice}</td>
<td>{stock.callDate}</td>
                                <td>{stock.callPrice}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

};

export default BondView
