// Code goes here

var app = angular.module('swFreightIndex', ['nvd3']);
// var freightIndices = require('./data.js');

app.controller('MainCtrl', function($scope) {
  $scope.options = {
    chart: {
        type: 'cumulativeLineChart',
        height: 550,
        margin : {
            top: 20,
            right: 20,
            bottom: 60,
            left: 65
        },
        x: function(d){ return d[0]; },
        y: function(d){ return d[1]; },
        // average: function(d) { return d.mean/100; },
        color: d3.scale.category10().range(),
        duration: 300,
        useInteractiveGuideline: true,
        xAxis: {
            axisLabel: 'Time',
            tickFormat: function(d) {
              return d3.time.format('%b %y')(new Date(d))
            },
            tickSubdivide: 12,
            tickValues: function(data) {
              return _.map(data[0].values, function(v) {
                return new Date(v[0]);
              });
            }
        },
        yAxis: {
            axisLabel: 'Shipwaves Freight Index',
            tickFormat: function(d){
              return d3.format('0.2f')(d+100);
            },
            axisLabelDistance: 5,
        }
    }
  };
      
      
  $scope.data = freightIndices;
  
});

