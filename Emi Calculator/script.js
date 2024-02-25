const loanAmt=document.getElementById('loan-amt'),
tenure=document.getElementById('tenure'),
interest=document.getElementById('interest'),
outputFileds=document.querySelectorAll('.output-fileds li'),
actBtn=document.getElementById('act-Btn'),
outputFiledsh5=document.querySelector('.output-fileds h5');

loanAmt.addEventListener('blur', (event) => {
   if(!loanAmt.value.includes('Rs')){
    loanAmt.value = `${event.target.value} Rs`;
   }  
});
tenure.addEventListener('blur',(event)=>{
    if(!tenure.value.includes('Yrs')){
    tenure.value=`${event.target.value} Yrs`;
    }
})
interest.addEventListener('blur',(event)=>{
    if(!interest.value.includes('%')){
    interest.value=`${event.target.value} %`;
    }
})
actBtn.addEventListener('click',()=>{

    var P= Number(loanAmt.value.replace(' Rs',''));
    var R= Number(interest.value.replace('%',''));
    var N= Number(tenure.value.replace('Yrs',''));

    R= R/12/100;
    N=N*12;

    console.log(P,R,N);
    let emi=P * R * (1 + R)** N / ((1 + R)** N -1) ;
    emi=Math.round(emi);
    console.log(emi);
    let totalPayAmount=emi*N;
    console.log(totalPayAmount);
    let interestAmt=totalPayAmount - P;
    console.log(interestAmt);
    outputFileds.forEach(event=>{
        console.log(event);
        outputFileds[0].querySelector('h5 span').innerText=`${emi} Rs/month`;
        outputFileds[0].querySelector('h5').style.display='flex';
        outputFileds[1].querySelector('h5 span').innerText=`${P} Rs`;
        outputFileds[1].querySelector('h5').style.display='flex';
        outputFileds[2].querySelector('h5 span').innerText=`${interestAmt} Rs`;
        outputFileds[2].querySelector('h5').style.display='flex';
        outputFileds[3].querySelector('h5 span').innerText=`${totalPayAmount} Rs`;
        outputFileds[3].querySelector('h5').style.display='flex';
      
        //chart

        Highcharts.chart('container', {
            chart: {
                type: 'pie',
                width: 450, // Set the width of the chart
                height: 300, // Set the height of the chart
                backgroundColor: 'transparent',
                margin: [-20, 0, 0, 0] ,
                
            },
            title: {
                text: 'Loan Amount Classification Chart',
                style: {
                    fontSize: '15px',
                    textAlign: 'center',
                   
                },
              
            },
            tooltip: {
                valueSuffix: '%'
            },
            exporting: {
                enabled: false 
            },
          
            plotOptions: {
                series: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        distance: 20
                    }, {
                        enabled: true,
                        distance: -40,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '1.2em',
                            textOutline: 'none',
                            opacity: 0.7
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }]
                }
            },
            series: [
                {
                    name: 'Percentage',
                    colorByPoint: true,
                    data: [
                        {
                            name: 'Loan Amount',
                            y: P
                        },
                        {
                            name: 'Interest Amount',
                            sliced: true,
                            selected: true,
                            y: interestAmt
                        },
                        {
                            name: 'Total Payable Amount',
                            y: totalPayAmount
                        }
                    ]
                }
            ]
        });
        

    })
})