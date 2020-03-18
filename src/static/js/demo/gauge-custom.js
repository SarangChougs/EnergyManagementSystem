
//js for gauge canvas-1
var radial = new RadialGauge({
    renderTo: 'gauge-canvas-1',
    barWidth:'10',
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 10,
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
radial.draw();
radial.value = 420;

// js for gauge canvas 2
var radial2 = new RadialGauge({
    renderTo: 'gauge-canvas-2',
    barWidth:'10',
    width: 150,
    height: 150,
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 10,
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
radial2.draw();
radial2.value = 300;

// js for gauge canvas 3
var radial2 = new RadialGauge({
    renderTo: 'gauge-canvas-3',
    barWidth:'10',
    width: 150,
    height: 150,
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 10,
    units: 'Watt',
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
radial2.draw();
radial2.value = 230;

// js for gauge canvas 4
var radial2 = new RadialGauge({
    renderTo: 'gauge-canvas-4',
    barWidth:'10',
    width: 150,
    height: 150,
    colorBarProgress: 'rgba(0,255,0,0.75)',
    value: 10,
    units: 'PF',
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
radial2.draw();
radial2.value = 250;