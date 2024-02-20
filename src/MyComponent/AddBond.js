import React,{useState} from 'react'
import axios from 'axios';
const AddBond = () => {
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
        field63: '',
        field64: '',
        field65: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
          "securityId": 0,
          "securityDescription": formData.field1,
          "securityName": formData.field2,
          "assetType": formData.field3,
          "investmentType": formData.field4,
          "tradingFactor":  formData.field5,
          "pricingFactor": formData.field6,
          "isin": formData.field7,
          "bbgTicker": formData.field8,
          "bbgUniqueID": formData.field9,
          "cusip": formData.field10,
          "sedol": formData.field11,
          "firstCouponDate": formData.field12,
          "cap":  formData.field13,
          "floor": formData.field14,
          "couponFrequency": formData.field15,
          "coupon": formData.field16,
          "couponType": formData.field17,
          "spread": formData.field18,
          "callableFlag": formData.field19,
          "fixToFloatFlag": formData.field20,
          "putableFlag": formData.field21,
          "issueDate": formData.field22,
          "lastResetDate": formData.field23,
          "maturity": formData.field24,
          "callNotificationMaxDays": formData.field25,
          "putNotificationMaxDays": formData.field26,
          "penultimateCouponDate": formData.field27,
          "resetFrequency": formData.field28,
          "hasPosition": formData.field29,
          "macaulayDuration": formData.field30,
          "volatility30D": formData.field31,
          "volatility90D": formData.field32,
          "convexity": formData.field33,
          "avgVolume30Days": formData.field34,
          "pfAssetClass": formData.field35,
          "pfCountry": formData.field36,
          "pfCreditRating": formData.field37,
          "pfCurrency": formData.field38,
          "pfInstrument": formData.field39,
          "pfLiquidityProfile": formData.field40,
          "pfMaturity": formData.field41,
          "pfnaicsCode": formData.field42,
          "pfRegion": formData.field43,
          "pfSector": formData.field44,
          "pfSubAssetClass": formData.field45,
          "bloombergIndustryGroup": formData.field46,
          "bloombergIndustrySubGroup": formData.field47,
          "bloombergIndustrySector": formData.field48,
          "countryOfIssuance": formData.field49,
          "issueCurrency": formData.field50,
          "issuer": formData.field51,
          "riskCurrency": formData.field52,
          "putDate": formData.field53,
          "putPrice": formData.field54,
          "askPrice": formData.field55,
          "highPrice": formData.field56,
          "lowPrice": formData.field57,
          "openPrice": formData.field58,
          "volume": formData.field59,
          "bidPrice": formData.field60,
          "lastPrice": formData.field61,
          "callDate":   formData.field62,
          "callPrice": formData.field63
        }
        axios.post("http://localhost:5251/api/Bond",data).then((response)=>{
          console.log(response)
          alert("Data Submitted..!!!")
      }).catch((error)=>console.log(error))
    }
  return (
    <div>
                    <h1 className="centered-heading">Bond Security</h1>
                    <div className="form-container">
                      <form action="submit.js" method="post" onSubmit={handleSubmit} className="form-group">
                        <label>Security Description:</label>
                        <input type="text" id="name" name="field1" class="right-align" value={formData.field1} onChange={handleInputChange}/><br/><br/>
                        <label >Security Name:</label>
                        <input type="text" id="text" name="field2" class="right-align" value={formData.field2} onChange={handleInputChange}/><br/><br/>
                        <label>Asset Type:</label>
                        <input type="text" id="text" name="field3" class="right-align" value={formData.field3} onChange={handleInputChange}/><br/><br/>
                        <label>Investment Type:</label>
                        <input type="text" id="text" name="field4" class="right-align" value={formData.field4} onChange={handleInputChange}/><br/><br/>
                        <label>Trading Factor:</label>
                        <input type="number" id="number" name="field5" class="right-align" value={formData.field5} onChange={handleInputChange}/><br/><br/>
                        <label>Pricing Factor:</label>
                        <input type="number" id="number" name="field6" class="right-align" value={formData.field6} onChange={handleInputChange}/><br/><br/>
                        <label>ISIN:</label>
                        <input type="text" id="text" name="field7" class="right-align" value={formData.field7} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Ticker:</label>
                        <input type="text" id="text" name="field8" class="right-align" value={formData.field8} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Unique ID:</label>
                        <input type="text" id="text" name="field9" class="right-align" value={formData.field9} onChange={handleInputChange}/><br/><br/>
                        <label>CUSIP:</label>
                        <input type="text" id="text" name="field10" class="right-align" value={formData.field10} onChange={handleInputChange}/><br/><br/>
                        <label>SEDOL:</label>
                        <input type="text" id="text" name="field11" class="right-align" value={formData.field11} onChange={handleInputChange}/><br/><br/>
                        <label >First Coupon Date:</label>
                        <input type="date" id="datetime" name="field12" class="right-align" value={formData.field12} onChange={handleInputChange}/><br/><br/>
                        <label >Coupon Cap:</label>
                        <input type="number" id="number" name="field13" class="right-align" value={formData.field13} onChange={handleInputChange}/><br/><br/>
                        <label >Coupon Floor:</label>
                        <input type="number" id="number" name="field14" class="right-align" value={formData.field14} onChange={handleInputChange}/><br/><br/>
                        <label>Coupon Frequency:</label>
                        <input type="text" id="text" name="field15" class="right-align" value={formData.field15} onChange={handleInputChange}/><br/><br/>
                        <label>Coupon Ratey:</label>
                        <input type="number" id="number" name="field16" class="right-align" value={formData.field16} onChange={handleInputChange}/><br/><br/>
                        <label >Coupon Type:</label>
                        <input type="number" id="number" name="field17" class="right-align" value={formData.field17} onChange={handleInputChange}/><br/><br/>
                        <label>Float Spread:</label>
                        <input type="number" id="number" name="field18" class="right-align" value={formData.field18} onChange={handleInputChange}/><br/><br/>
                        <label >Is Callable:</label>
                        <input type="text" id="text" name="field19" class="right-align" value={formData.field19} onChange={handleInputChange}/><br/><br/>
                        <label >Is Fix to Float:</label>
                        <input type="text" id="text" name="field20" class="right-align" value={formData.field20} onChange={handleInputChange}/><br/><br/>
                        <label>Is Putable:</label>
                        <input type="text" id="text" name="field21" class="right-align" value={formData.field21} onChange={handleInputChange}/><br/><br/>
                        <label>Issue Date:</label>
                        <input type="date" id="datetime" name="field22" class="right-align" value={formData.field22} onChange={handleInputChange}/><br/><br/>
                        <label>Last Reset Date:</label>
                        <input type="date" id="datetime" name="field23" class="right-align" value={formData.field23} onChange={handleInputChange}/><br/><br/>
                        <label>Maturity Date:</label>
                        <input type="date" id="datetime" name="field24" class="right-align" value={formData.field24} onChange={handleInputChange}/><br/><br/>
                        <label>Maximum Call Notice Days:</label>
                        <input type="number" id="number" name="field25" class="right-align" value={formData.field25} onChange={handleInputChange}/><br/><br/>
                        <label>Maximum Put Notice Days:</label>
                        <input type="number" id="number" name="field26" class="right-align" value={formData.field26} onChange={handleInputChange}/><br/><br/>
                        <label>Penultimate Coupon Date:</label>
                        <input type="date" id="datetime" name="field27" class="right-align" value={formData.field27} onChange={handleInputChange}/><br/><br/>
                        <label>Reset Frequency:</label>
                        <input type="text" id="text" name="field28" class="right-align" value={formData.field28} onChange={handleInputChange}/><br/><br/>
                        <label>Has Position:</label>
                        <input type="text" id="text" name="field29" class="right-align" value={formData.field29} onChange={handleInputChange}/><br/><br/>
                        <label>Duration:</label>
                        <input type="number" id="number" name="field30" class="right-align" value={formData.field30} onChange={handleInputChange}/><br/><br/>
                        <label>Volatility 30D:</label>
                        <input type="number" id="number" name="field31" class="right-align" value={formData.field31} onChange={handleInputChange}/><br/><br/>
                        <label >Volatility 90D:</label>
                        <input type="number" id="number" name="field32" class="right-align" value={formData.field32} onChange={handleInputChange}/><br/><br/>
                        <label>Convexity:</label>
                        <input type="number" id="number" name="field33" class="right-align" value={formData.field33} onChange={handleInputChange}/><br/><br/>
                        <label>Average Volume 30D:</label>
                        <input type="number" id="number" name="field34" class="right-align" value={formData.field34} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Asset Class:</label>
                        <input type="text" id="text" name="field35" class="right-align" value={formData.field35} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Country:</label>
                        <input type="text" id="text" name="field36" class="right-align" value={formData.field36} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF Credit Rating:</label>
                        <input type="text" id="text" name="field37" class="right-align" value={formData.field37} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Currency:</label>
                        <input type="text" id="text" name="field38" class="right-align" value={formData.field38} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Instrument:</label>
                        <input type="text" id="text" name="field39" class="right-align" value={formData.field39} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF Liquidity Profile:</label>
                        <input type="text" id="text" name="field40" class="right-align" value={formData.field40} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF Maturity:</label>
                        <input type="text" id="text" name="field41" class="right-align" value={formData.field41} onChange={handleInputChange}/><br/><br/>
                        <label >Form PF NAICS Code:</label>
                        <input type="text" id="text" name="field42" class="right-align" value={formData.field42} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Region:</label>
                        <input type="text" id="text" name="field43" class="right-align" value={formData.field43} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Sector:</label>
                        <input type="text" id="text" name="field44" class="right-align" value={formData.field44} onChange={handleInputChange}/><br/><br/>
                        <label>Form PF Sub Asset Class:</label>
                        <input type="text" id="text" name="field45" class="right-align" value={formData.field45} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry Group:</label>
                        <input type="text" id="text" name="field46" class="right-align" value={formData.field46} onChange={handleInputChange}/><br/><br/>
                        <label>Bloomberg Industry SubGroup:</label>
                        <input type="text" id="text" name="field47" class="right-align" value={formData.field47} onChange={handleInputChange}/><br/><br/>
                      
                        <label>Bloomberg Sector:</label>
                        <input type="text" id="text" name="field48" value={formData.field48} onChange={handleInputChange}/><br/><br/>
                        <label >Issue Country:</label>
                        <input type="text" id="text" name="field49" value={formData.field49} onChange={handleInputChange}/><br/><br/>
                        <label>Issue Currency:</label>
                        <input type="text" id="text" name="field50" value={formData.field50} onChange={handleInputChange}/><br/><br/>
                        <label>Issuer:</label>
                        <input type="text" id="text" name="field51" value={formData.field51} onChange={handleInputChange}/><br/><br/>
                        <label>Risk Currency:</label>
                        <input type="text" id="text" name="field52" value={formData.field52} onChange={handleInputChange}/><br/><br/>
                        <label>Put Date:</label>
                        <input type="datetime-local" id="datetime" name="field53" value={formData.field53} onChange={handleInputChange}/><br/><br/>
                        <label>Put Price:</label>
                        <input type="number" id="number" name="field54" value={formData.field54} onChange={handleInputChange}/><br/><br/>
                        <label>Ask Price:</label>
                        <input type="number" id="number" name="field55" value={formData.field55} onChange={handleInputChange}/><br/><br/>
                        <label>High Price:</label>
                        <input type="number" id="number" name="field56" value={formData.field56} onChange={handleInputChange}/><br/><br/>
                        <label>Low Price:</label>
                        <input type="number" id="number" name="field57" value={formData.field57} onChange={handleInputChange}/><br/><br/>
                        <label>Open Price:</label>
                        <input type="number" id="number" name="field58" value={formData.field58} onChange={handleInputChange}/><br/><br/>
                        <label >Volume:</label>
                        <input type="number" id="number" name="field59" value={formData.field59} onChange={handleInputChange}/><br/><br/>
              
                        <label>Bid Price:</label>
                        <input type="number" id="number" name="field60" value={formData.field60} onChange={handleInputChange}/><br/><br/>
                        <label>Last Price:</label>
                        <input type="number" id="number" name="field61" value={formData.field61} onChange={handleInputChange}/><br/><br/>
            
                        <label>Call Date:</label>
                        <input type="date" id="datetime" name="field62" value={formData.field62} onChange={handleInputChange}/><br/><br/>
                        <label>Call Price:</label>
                        <input type="number" id="number" name="field63" value={formData.field63} onChange={handleInputChange}/><br/><br/>
                        <button className="form-btn">Submit</button><br/><br/>
                        <button className="form-btn">Close</button>
                      </form>
                      </div>
    </div>
  )
}

export default AddBond
