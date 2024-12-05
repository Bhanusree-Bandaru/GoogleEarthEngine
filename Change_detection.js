var imageCollection =(ee.ImageCollection("COPERNICUS/S2_SR_HARMONIZED"));

//Applying filter over AOI for Date,Metadata.
var filteredImage1 = imageCollection.filter(ee.Filter.bounds(geometry))
.filter(ee.Filter.date('2019-01-01','2020-01-01'))
.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));

print(filteredImage1.size());

//Applying Filters related to bands,mosaicking,median composite creating

var visParams = {
  min: 0.0,
  max:3000,
  bands:['B4','B3','B2']
};

var median2019 = filteredImage1.median()
Map.addLayer(median2019,visParams,'2019');



var filteredImage2 = imageCollection.filter(ee.Filter.bounds(geometry))
.filter(ee.Filter.date('2020-01-01','2021-01-01'))
.filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',20));

print(filteredImage2.size());

var median2020 = filteredImage2.median()
Map.addLayer(median2020,visParams,'2020');

