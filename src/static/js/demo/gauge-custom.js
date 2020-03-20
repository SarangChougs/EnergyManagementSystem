
//js for gauge canvas-1 voltage (volts)
var voltage = new RadialGauge({
    renderTo: 'gauge-canvas-1',
    barWidth:'10',
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 0,
    width: 150,
    height: 150,
    units: 'Volts',
    // title: false,
    minValue: 0,
    maxValue: 500,
    majorTicks: [
        '0','100','200','300','400','500'
    ],
    minorTicks: 5,
    // strokeTicks: true,
    highlights: [
        { from: 0, to: 100, color: 'rgba(0,255,0,.5)' },
        { from: 100, to: 300, color: 'rgba(255,255,0,.5)' },
        { from: 300, to: 500, color: 'rgba(255,30,0,.5)' },
        // { from: 150, to: 200, color: 'rgba(255,0,225,.5)' },
        // { from: 200, to: 220, color: 'rgba(0,0,255,.5)' }
    ],
    // colorPlate: '#222',
    // colorMajorTicks: '#f5f5f5',
    // colorMinorTicks: '#ddd',
    // colorTitle: '#fff',
    // colorUnits: '#ccc',
    // colorNumbers: '#eee',
    colorNeedle: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, 1)',
    // valueBox: true,
    // animationRule: 'bounce',
    animationDuration: 1000
});
voltage.draw();

// js for gauge canvas 2 Current (Amps)
var current = new RadialGauge({
    renderTo: 'gauge-canvas-2',
    barWidth:'10',
    width: 150,
    height: 150,
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 0,
    units: 'Amps',
    minValue: 0,
    maxValue: 500,
    majorTicks: [
        '0','100','200','300','400','500'
    ],
    minorTicks: 5,
    highlights: [
        { from: 0, to: 100, color: 'rgba(0,255,0,.5)' },
        { from: 100, to: 300, color: 'rgba(255,255,0,.5)' },
        { from: 300, to: 500, color: 'rgba(255,30,0,.5)' },
    ],
    colorNeedle: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, 1)',
    animationDuration: 1000
});
current.draw();

// js for gauge canvas 3 Watt/Hr (Watt)
var wavg = new RadialGauge({
    renderTo: 'gauge-canvas-3',
    barWidth:'10',
    width: 150,
    height: 150,
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 9163.92,
    units: 'Watt',
    minValue: 0,
    maxValue: 50000,
    majorTicks: [
        '0','10k','20k','30k','40k','50k',
    ],
    minorTicks: 5,
    highlights: [
        { from: 0, to: 15000, color: 'rgba(0,255,0,.5)' },
        { from: 15000, to: 30000, color: 'rgba(255,255,0,.5)' },
        { from: 30000, to: 50000, color: 'rgba(255,30,0,.5)' },
    ],
    colorNeedle: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, 1)',
    animationDuration: 1000
});
wavg.draw();

// js for gauge canvas 4 Pf (pf)
var pf = new RadialGauge({
    renderTo: 'gauge-canvas-4',
    barWidth:'10',
    width: 150,
    height: 150,
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 2,
    units: 'PF',
    minValue: -5,
    maxValue: 5,
    majorTicks: [
        '-5','-3','-1','1','3','5'
    ],
    minorTicks: 2,
    highlights: [
        { from: -5, to: -2, color: 'rgba(0,255,0,.5)' },
        { from: -2, to: 3, color: 'rgba(255,255,0,.5)' },
        { from: 3, to: 5, color: 'rgba(255,30,0,.5)' },
    ],
    colorNeedle: 'rgba(240, 128, 128, 1)',
    colorNeedleEnd: 'rgba(255, 160, 122, 1)',
    animationDuration: 1000
});
pf.draw();

//Ajax method to fetch the data
$.ajax({
    method: 'GET',
    url: '/data/',
    success: function(data){
        console.log('Success in ajax');
        voltage.value = data.VLL[0];
        current.value = data.Amps[0];
        wavg.value = data.Wavg[0];
        pf.value = data.PF[0];
    },
    error: function(data){
        console.log('Error in ajax');
    }
})