
import { calculateInvestmentResults } from '../util/investment';
import { formatter } from '../util/investment';
export default function Results({input }) {
    const resultsData = calculateInvestmentResults(input)
    const initialInvestment = (
    resultsData[0].valueEndOfYear - 
    resultsData[0].interest  - 
    resultsData[0].annualInvestment
    )
    
    console.log(input)

    console.log(resultsData)
    return <>
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Year</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {resultsData.map((yearData) => {


                    const totalInterestAccrossAllYears = yearData.valueEndOfYear - yearData.annualInvestment*yearData.year - initialInvestment
                    const totalAmountInvested =  yearData.valueEndOfYear - totalInterestAccrossAllYears
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format( yearData.valueEndOfYear )}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterestAccrossAllYears)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>

                    </tr>

                } )}
            </tbody>
        </table>
    </>


}

