import React,{useState} from 'react'
import "./App2.css"
import CrudServices from '../Services/CrudServices';
import axios from 'axios';
const service=new CrudServices()
const AddEquity = () => {
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        field10: '',
        field11: '',
        field12: '',
        field13: '',
        field14: '',
        field15: '',
        field16: '',
        field17: '',
        field18: '',
        field19: '',
        field20: '',
        field21: '',
        field22: '',
        field23: '',
        field24: '',
        field25: '',
        field26: '',
        field27: '',
        field28: '',
        field29: '',
        field30: '',
        field31: '',
        field32: '',
        field33: '',
        field34: '',
        field35: '',
        field36: '',
        field37: '',
        field38: '',
        field39: '',
        field40: '',
        field41: '',
        field42: '',
        field43: '',
        field44: '',
        field45: '',
        field46: '',
        field47: '',
        field48: '',
        field49: '',
        field50: '',
        field51: '',
        field52: '',
        field53: '',
        field54: '',
        field55: '',
        field56: '',
        field57: '',
        field58: '',
        field59: '',
        field60: '',
        field61: '',
        field62: '',
    });
    const handleSelectChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value,
      }));
  };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleClick=(e)=>{
        e.preventDefault()
        const data={
          "securityId": 0,
          "securityName": formData.field1,
          "securityDescription": formData.field2,
          "hasPosition": formData.field3,
          "isActiveSecurity": formData.field4,
          "lotSize": formData.field5,
          "bbgUniqueName": formData.field6,
          "cusip": formData.field7,
          "isin": formData.field8,
          "sedol": formData.field9,
          "bloombergTicker":  formData.field10,
          "bloombergUniqueID": formData.field11,
          "bbgGlobalID": formData.field12,
          "tickerAndExchange": formData.field13,
          "isADRFlag": formData.field14,
          "adrUnderlyingTicker": formData.field15,
          "adrUnderlyingCurrency": formData.field16,
          "sharesPerADR": formData.field17,
          "ipoDate": formData.field18,
          "pricingCurrency": formData.field19,
          "settleDays":   formData.field20,
          "totalSharesOutstanding": formData.field21,
          "votingRightsPerShare": formData.field22,
          "averageVolume20D": formData.field23,
          "beta": formData.field24,
          "shortInterest": formData.field25,
          "returnYTD": formData.field26,
          "volatility90D": formData.field27,
          "pfAssetClass": formData.field28,
          "pfCountry": formData.field29,
          "pfCreditRating": formData.field30,
          "pfCurrency": formData.field31,
          "pfInstrument": formData.field32,
          "pfLiquidityProfile": formData.field33,
          "pfMaturity": formData.field34,
          "pfnaicsCode": formData.field35,
          "pfRegion": formData.field36,
          "pfSector":   formData.field37,
          "pfSubAssetClass": formData.field38,
          "countryOfIssuance": formData.field39,
          "exchange": formData.field40,
          "issuer": formData.field41,
          "issueCurrency": formData.field42,
          "tradingCurrency": formData.field43,
          "bbgIndustrySubGroup": formData.field44,
          "bloombergIndustryGroup": formData.field45,
          "bloombergSector": formData.field46,
          "countryOfIncorporation": formData.field47,
          "riskCurrency": formData.field48,
          "openPrice": formData.field49,
          "closePrice": formData.field50,
          "volume": formData.field51,
          "lastPrice": formData.field52,
          "askPrice":   formData.field53,
          "bidPrice": formData.field54,
          "peRatio": formData.field55,
          "dividendDeclaredDate": formData.field56,
          "dividendExDate": formData.field57,
          "dividendRecordDate": formData.field58,
          "dividendPayDate": formData.field59,
          "dividendAmount":   formData.field60,
          "frequency": formData.field61,
          "dividendType": formData.field62
        };
        console.log(data);
        axios.post("http://localhost:5251/api/Equity", data)
        .then((response) => {
          console.log(response);
        alert("Data Inserted Successfully..!!")
          }).catch((error) => {
            console.log(error);
          })
        }
   
  return (
    <div>
                     <h1 className="centered-heading">Equity Security</h1>
                    <div className="form-container">
                      <form   className="form-group">
                      <label>Security Name:</label>
                        <input type="text" id="text" name="field1" class="right-align" value={formData.field1} onChange={handleInputChange}/><br/><br/>
                        <label >Security Description:</label>
                        <input type="text" id="text" name="field2" class="right-align" value={formData.field2} onChange={handleInputChange}/><br/><br/>
                        <label>Has Position:</label>
                        <input type="text" id="text" name="field3" class="right-align" value={formData.field3} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Is Active:</label>
                        <input type="text" id="text" name="field4" class="right-align" value={formData.field4} onChange={handleInputChange} placeholder='Yes Or No'/><br/><br/>
                        <label for="text">Round Lot Size:</label>
                        <input type="number" id="number" name="field5" class="right-align" value={formData.field5} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Bloomberg Unique Name:</label>
                        <input type="text" id="text" name="field6" class="right-align" value={formData.field6} onChange={handleInputChange}/><br/><br/>
                        <label for="text">CUSIP:</label>
                        <input type="text" id="text" name="field7" class="right-align" value={formData.field7} onChange={handleInputChange}/><br/><br/>
                        <label for="text">ISIN:</label>
                        <input type="text" id="text" name="field8" class="right-align" value={formData.field8} onChange={handleInputChange}/><br/><br/>
                        <label for="text">SEDOL:</label>
                        <input type="text" id="text" name="field9" class="right-align" value={formData.field9} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Bloomberg Ticker:</label>
                        <input type="text" id="text" name="field10" class="right-align" value={formData.field10} onChange={handleInputChange}/><br/><br/>
                        <label for="text">Bloomberg Unique ID:</label>
                        <input type="text" id="text" name="field11" class="right-align" value={formData.field11} onChange={handleInputChange}/><br/><br/>
                        <label >Bloomberg Global ID:</label>
                        <input type="text" id="text" name="field12" class="right-align" value={formData.field12} onChange={handleInputChange}/><br/><br/>
                        <label >Bloomberg Ticker and Exchange:</label>
                        <input type="text" id="text" name="field13" class="right-align" value={formData.field13} onChange={handleInputChange}/><br/><br/>
                        <label >Is ADR:</label>
                        <input type="text" id="text" name="field14" class="right-align" value={formData.field14} onChange={handleInputChange} placeholder='Yes Or No'/><br/><br/>
                        <label>ADR Underlying Ticker:</label>
                        <input type="text" id="text" name="field15" class="right-align" value={formData.field15} onChange={handleInputChange}/><br/><br/>
                        <label>ADR Underlying Currency:</label>
                        <input type="text" id="text" name="field16" class="right-align" value={formData.field16} onChange={handleInputChange}/><br/><br/>
                        <label >Shares Per ADR:</label>
                        <input type="number" id="number" name="field17" class="right-align" value={formData.field17} onChange={handleInputChange}/><br/><br/>
                        <label>IPO Date:</label>
                        <input type="datetime-local" id="date" name="field18" class="right-align" value={formData.field18} onChange={handleInputChange}/><br/><br/>
                        <label >Price Currency:</label>
                        <input type="text" id="text" name="field19" class="right-align" value={formData.field19} onChange={handleInputChange}/><br/><br/>
                        <label >Settle Days:</label>
                        <input type="number" id="number" name="field20" class="right-align" value={formData.field20} onChange={handleInputChange}/><br/><br/>
                        <label>Shares Outstanding:</label>
                        <input type="number" id="number" name="field21" class="right-align" value={formData.field21} onChange={handleInputChange}/><br/><br/>
                        <label>Voting Rights Per Share:</label>
                        <input type="number" id="number" name="field22" class="right-align" value={formData.field22} onChange={handleInputChange}/><br/><br/>
                        <label>20 Day Average Volume:</label>
                        <input type="number" id="number" name="field23" class="right-align" value={formData.field23} onChange={handleInputChange}/><br/><br/>
                        <label>Beta:</label>
                        <input type="number" id="number" name="field24" class="right-align" value={formData.field24} onChange={handleInputChange}/><br/><br/>
                        <label>Short Interest:</label>
                        <input type="number" id="number" name="field25" class="right-align" value={formData.field25} onChange={handleInputChange}/><br/><br/>
                        <label>YTD Return:</label>
                        <input type="number" id="number" name="field26" class="right-align" value={formData.field26} onChange={handleInputChange}/><br/><br/>
                        <label>90 Day Price Volatility:</label>
                        <input type="number" id="number" name="field27" class="right-align" value={formData.field27} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Asset Class:</label>
                        <input type="text" id="text" name="field28" class="right-align" value={formData.field28} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Country:</label>
                        <input type="text" id="text" name="field29" class="right-align" value={formData.field29} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Credit Rating:</label>
                        <input type="text" id="text" name="field30" class="right-align" value={formData.field30} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Currency:</label>
                        <input type="text" id="text" name="field31" class="right-align" value={formData.field31} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF Instrument:</label>
                        <input type="text" id="text" name="field32" class="right-align" value={formData.field32} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Liquidity Profile:</label>
                        <input type="text" id="text" name="field33" class="right-align" value={formData.field33} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Maturity:</label>
                        <input type="text" id="text" name="field34" class="right-align" value={formData.field34} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF NAICS Code:</label>
                        <input type="text" id="text" name="field35" class="right-align" value={formData.field35} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Region:</label>
                        <input type="text" id="text" name="field36" class="right-align" value={formData.field36} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF Sector:</label>
                        <input type="text" id="text" name="field37" class="right-align" value={formData.field37} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Sub Asset Class:</label>
                        <input type="text" id="text" name="field38" class="right-align" value={formData.field38} onChange={handleInputChange}/><br/><br/>
                        <label>Issue Country:</label>
                        <input type="text" id="text" name="field39" class="right-align" value={formData.field39} onChange={handleInputChange}/><br/><br/>
                        <label >Exchange:</label>
                        <input type="text" id="text" name="field40" class="right-align" value={formData.field40} onChange={handleInputChange}/><br/><br/>
                        <label >Issuer:</label>
                        <input type="text" id="text" name="field41" class="right-align" value={formData.field41} onChange={handleInputChange}/><br/><br/>
                        <label >Issue Currency:</label>
                        <input type="text" id="text" name="field42" class="right-align" value={formData.field42} onChange={handleInputChange}/><br/><br/>
                        <label>Trading Currency:</label>
                        <input type="text" id="text" name="field43" class="right-align" value={formData.field43} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry Sub Group:</label>
                        <input type="text" id="text" name="field44" class="right-align" value={formData.field44} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry Group:</label>
                        <input type="text" id="text" name="field45" class="right-align" value={formData.field45} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry Sector:</label>
                        <input type="text" id="text" name="field46" class="right-align" value={formData.field46} onChange={handleInputChange}/><br/><br/>
                        <label>Country of Incorporation:</label>
                        <input type="text" id="text" name="field47" class="right-align" value={formData.field47} onChange={handleInputChange}/><br/><br/>
                        <label>Risk Currency:</label>
                        <input type="text" id="text" name="field48" value={formData.field48} onChange={handleInputChange}/><br/><br/>
                        <label>Open Price:</label>
                        <input type="number" id="number" name="field49" value={formData.field49} onChange={handleInputChange}/><br/><br/>
                        <label >Close Price:</label>
                        <input type="number" id="number" name="field50" value={formData.field50} onChange={handleInputChange}/><br/><br/>
                        <label>Volume:</label>
                        <input type="number" id="number" name="field51" value={formData.field51} onChange={handleInputChange}/><br/><br/>
                        <label>Last Price:</label>
                        <input type="number" id="number" name="field52" value={formData.field52} onChange={handleInputChange}/><br/><br/>
                        <label>Ask Price:</label>
                        <input type="number" id="number" name="field53" value={formData.field53} onChange={handleInputChange}/><br/><br/>
                        <label>Bid Price:</label>
                        <input type="number" id="number" name="field54" value={formData.field54} onChange={handleInputChange}/><br/><br/>
                        <label>PE Ratio:</label>
                        <input type="number" id="number" name="field55" value={formData.field55} onChange={handleInputChange}/><br/><br/>
                        <label>Declared Date:</label>
                        <input type="datetime-local" id="datetime" name="field56" value={formData.field56} onChange={handleInputChange}/><br/><br/>
                        <label>Ex Date:</label>
                        <input type="datetime-local" id="datetime" name="field57" value={formData.field57} onChange={handleInputChange}/><br/><br/>
                        <label>Record Date:</label>
                        <input type="datetime-local" id="datetime" name="field58" value={formData.field58} onChange={handleInputChange}/><br/><br/>
                        <label>Pay Date:</label>
                        <input type="datetime-local" id="datetime" name="field59" value={formData.field59} onChange={handleInputChange}/><br/><br/>
                        <label >Amount:</label>
                        <input type="number" id="number" name="field60" value={formData.field60} onChange={handleInputChange}/><br/><br/>
                        <label>Frequency:</label>
                        <input type="text" id="text" name="field61" value={formData.field61} onChange={handleInputChange}/><br/><br/>
                        <label>Dividend Type:</label>
                        <input type="text" id="text" name="field62" value={formData.field62} onChange={handleInputChange}/><br/><br/>
                        <button className="form-btn" onClick={handleClick}>Submit</button><br/><br/>
                        <button className="form-btn">Close</button>
                      </form>
                      </div>
    </div>
  )
}

export default AddEquity
