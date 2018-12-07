$(function () {

  'use strict';

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  // -----------------------
  // - MONTHLY sales CHART -
  // -----------------------

  // Get context with jQuery - using jQuery's .get() method.
  var salesChartCanvas = $('#salesChart').get(0).getContext('2d');
  // This will get the first returned node in the jQuery collection.
  var salesChart       = new Chart(salesChartCanvas);

  var salesChartData = {
    labels  : ['October', 'November', 'December'],
    datasets: [
      {
        label               : 'Document Total',
        fillColor           : 'rgba(0,192,239,0.8)',
        strokeColor         : 'rgba(0,192,239,0.5)',
        pointColor          : 'rgba(0,192,239)',
        pointStrokeColor    : 'rgba(0,192,239,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(0,192,239,1)',
        data                : [17, 21, 14]
      },
      {
        label               : 'Document Approved',
        fillColor           : 'rgba(0,160,90,0.8)',
        strokeColor         : 'rgba(0,160,90,0.5)',
        pointColor          : 'rgba(0,160,90)',
        pointStrokeColor    : 'rgba(0,160,90,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(0,160,90,1)',
        data                : [13, 11, 8]
      },
      {
        label               : 'Document Review',
        fillColor           : 'rgba(243,156,18,0.8)',
        strokeColor         : 'rgba(243,156,18,0.5)',
        pointColor          : 'rgba(243,156,18)',
        pointStrokeColor    : 'rgba(243,156,18,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(243,156,18,1)',
        data                : [3, 8, 4]
      },
      {  
        label               : 'Document Declined',
        fillColor           : 'rgba(221,75,57,0.8)',
        strokeColor         : 'rgba(221,75,57,0.5)',
        pointColor          : 'rgba(221,75,57)',
        pointStrokeColor    : 'rgba(221,75,57,1)',
        pointHighlightFill  : '#fff',
        pointHighlightStroke: 'rgba(221,75,57,1)',
        data                : [1, 2, 2]
      }

    ]
  };

  var salesChartOptions = {
    // Boolean - If we should show the scale at all
    showScale               : true,
    // Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines      : false,
    // String - Colour of the grid lines
    scaleGridLineColor      : 'rgba(0,0,0,.01)',
    // Number - Width of the grid lines
    scaleGridLineWidth      : 1,
    // Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,
    // Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines  : true,
    // Boolean - Whether the line is curved between points
    bezierCurve             : true,
    // Number - Tension of the bezier curve between points
    bezierCurveTension      : 0.3,
    // Boolean - Whether to show a dot for each point
    pointDot                : false,
    // Number - Radius of each point dot in pixels
    pointDotRadius          : 4,
    // Number - Pixel width of point dot stroke
    pointDotStrokeWidth     : 1,
    // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius : 20,
    // Boolean - Whether to show a stroke for datasets
    datasetStroke           : true,
    // Number - Pixel width of dataset stroke
    datasetStrokeWidth      : 2,
    // Boolean - Whether to fill the dataset with a color
    datasetFill             : true,
    // String - A legend template
    legendTemplate          : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio     : true,
    // Boolean - whether to make the chart responsive to window resizing
    responsive              : true
  };

  // Create the line chart
  salesChart.Line(salesChartData, salesChartOptions);

  // ---------------------------
  // - END MONTHLY sales CHART -
  // ---------------------------

});
