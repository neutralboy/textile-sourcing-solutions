import am4themes_dark from '@amcharts/amcharts4/themes/dark';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_india2020Low from "@amcharts/amcharts4-geodata/india2020Low";
// import am4themes_dark from "@amcharts/amcharts4/themes/patterns";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_dark);
// Themes end

// Create map instance
const chart = am4core.create("chartdiv", am4maps.MapChart);

const interfaceColors = new am4core.InterfaceColorSet();

// Set map definition
chart.geodata = am4geodata_india2020Low;

// Set projection
chart.projection = new am4maps.projections.Mercator();


// Data for general and map use
const originCities = [
    {
        "id": "bangalore",
        "title": "Bangalore",
        "destinations": ["new delhi", "dhaka", "bijapur", "tirupur", "hosur"],
        "latitude": 12.972442,
        "longitude": 77.580643
    }
];

const destinationCities = [
    {
        id: "new delhi",
        title: "New Delhi-NCR",
        latitude: 28.679079,
        longitude: 77.069710
    },
    {
        id: "dhaka",
        title: "Bangladesh",
        latitude: 23.777176,
        longitude: 90.399452
    },
    {
        id: "bijapur",
        title: "Bijapur",
        latitude: 16.827545,
        longitude: 75.725327
    },
    {
        id: "tirupur",
        title: "Tiruppur",
        latitude: 11.110695,
        longitude: 77.348045
    },
    {
        id: "hosur",
        title: "Hosur",
        latitude: 12.735126,
        longitude: 77.829338
    }
];

// Default to London view
//chart.homeGeoPoint = { "longitude": originCities[0].zoomLongitude, "latitude": originCities[0].zoomLatitude };
//chart.homeZoomLevel = originCities[0].zoomLevel;

const targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

// The world
const worldPolygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
worldPolygonSeries.useGeodata = true;
worldPolygonSeries.fillOpacity = 0.8;
worldPolygonSeries.exclude = ["AQ"];


// Origin series (big targets, London and Vilnius)
const originImageSeries = chart.series.push(new am4maps.MapImageSeries());

const originImageTemplate = originImageSeries.mapImages.template;

originImageTemplate.propertyFields.latitude = "latitude";
originImageTemplate.propertyFields.longitude = "longitude";
originImageTemplate.propertyFields.id = "id";

originImageTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
originImageTemplate.nonScaling = true;
originImageTemplate.tooltipText = "{title}";

originImageTemplate.setStateOnChildren = true;
originImageTemplate.states.create("hover");

originImageTemplate.horizontalCenter = "middle";
originImageTemplate.verticalCenter = "middle";

const originHitCircle = originImageTemplate.createChild(am4core.Circle);
originHitCircle.radius = 11;
originHitCircle.fill = interfaceColors.getFor("background");

const originTargetIcon = originImageTemplate.createChild(am4core.Sprite);
originTargetIcon.fill = interfaceColors.getFor("alternativeBackground");
originTargetIcon.strokeWidth = 0;
originTargetIcon.scale = 1.3;
originTargetIcon.horizontalCenter = "middle";
originTargetIcon.verticalCenter = "middle";
originTargetIcon.path = targetSVG;

const originHoverState = originTargetIcon.states.create("hover");
originHoverState.properties.fill = chart.colors.getIndex(1);

// when hit on city, change lines
originImageTemplate.events.on("hit", function(event) {
    showLines(event.target.dataItem);
})

// destination series (small targets)
const destinationImageSeries = chart.series.push(new am4maps.MapImageSeries());
const destinationImageTemplate = destinationImageSeries.mapImages.template;

destinationImageTemplate.nonScaling = true;
destinationImageTemplate.tooltipText = "{title}";
destinationImageTemplate.fill = interfaceColors.getFor("alternativeBackground");
destinationImageTemplate.setStateOnChildren = true;
destinationImageTemplate.states.create("hover");
destinationImageTemplate.showTooltipOn = "always" ;

destinationImageTemplate.propertyFields.latitude = "latitude";
destinationImageTemplate.propertyFields.longitude = "longitude";
destinationImageTemplate.propertyFields.id = "id";

const destinationHitCircle = destinationImageTemplate.createChild(am4core.Circle);
destinationHitCircle.radius = 7;
destinationHitCircle.fillOpacity = 1;
destinationHitCircle.fill = interfaceColors.getFor("background");

const destinationTargetIcon = destinationImageTemplate.createChild(am4core.Sprite);
destinationTargetIcon.scale = 0.7;
destinationTargetIcon.path = targetSVG;
destinationTargetIcon.horizontalCenter = "middle";
destinationTargetIcon.verticalCenter = "middle";

originImageSeries.data = originCities;
destinationImageSeries.data = destinationCities;

// Line series
const lineSeries = chart.series.push(new am4maps.MapLineSeries());
lineSeries.mapLines.template.line.strokeOpacity = 0.5;

chart.events.on("ready", function() {
    showLines(originImageSeries.dataItems.getIndex(0));
})


let currentOrigin;

function showLines(origin) {

    const dataContext = origin.dataContext;
    const destinations = dataContext.destinations;


    // clear old
    lineSeries.mapLines.clear();
    lineSeries.toBack();
    worldPolygonSeries.toBack();

    currentOrigin = origin;

    if (destinations) {
        for (let i = 0; i < destinations.length; i++) {
            const line = lineSeries.mapLines.create();
            line.imagesToConnect = [origin.mapImage.id, destinations[i]];
            line.fill = am4core.color("#ffffff");
            line.fillOpacity = 1;
            line.width = 5;
        }
    }
    // chart.zoomToGeoPoint({ latitude: 23.259933, longitude: 77.412613 }, 10, true);
}


// chart.events.on("ready", function(ev) {
//     const india = worldPolygonSeries.getPolygonById("IN");
//     india.fill = am4core.color("#11b09f");
//     chart.zoomToMapObject(india);
// });



const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
graticuleSeries.mapLines.template.line.strokeOpacity = 0.05;
