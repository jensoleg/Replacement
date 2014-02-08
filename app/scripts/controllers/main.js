'use strict';

angular.module('replaceproductApp')
    .controller('MainCtrl', function ($scope, $moment) {

        var localChartData = [];

        var generateData = function () {
            var series1 = [];
            var point = [];
            var y;
            for (var i = 1; i < 95; i++) {
                y = 8.8737190905277 + -0.111844170265213*i + 1.03e-03*Math.pow(i,2)	+ -5.83e-06*Math.pow(i,3);
                point = [i, +y.toFixed(3)];
                series1.push(point);
            }

            localChartData = [
                {
                    values: series1,
                    key: "SE1.100.100.40"
                }
            ];
        }

        generateData();

        console.log(localChartData);

        $scope.chartData = localChartData;


        $scope.exampleData1 = [
            {
                "key": "Flygt CP200-10",
                "values": [
                    [ 0, 8.928121212121212] ,
                    [ 2.545, 8.619] ,
                    [ 5.159, 8.318] ,
                    [ 7.873, 8.026] ,
                    [ 10.703, 7.748] ,
                    [ 13.655, 7.484] ,
                    [ 16.704, 7.234] ,
                    [ 19.836, 6.995] ,
                    [ 23.136, 6.766] ,
                    [ 26.291, 6.546] ,
                    [ 29.578, 6.331]
                ]
            }
        ];

        $scope.exampleData2 = [
            {
                "key": "Flygt CP200-10",
                "values": [
                    [ 0, 8.928] ,
                    [ 2.545, 8.619] ,
                    [ 5.159, 8.318] ,
                    [ 7.873, 8.026] ,
                    [ 10.703, 7.748] ,
                    [ 13.655, 7.484] ,
                    [ 16.704, 7.234] ,
                    [ 19.836, 6.995] ,
                    [ 23.136, 6.766] ,
                    [ 26.291, 6.546] ,
                    [ 29.578, 6.331]
                ]
            },
            {
                "key": "NK 40-160/169",
                "values": [
                    [ 0.202, 11.925] ,
                    [3.442, 11.571] ,
                    [ 6.703, 11.222] ,
                    [ 10.048, 10.882] ,
                    [ 13.504, 10.557] ,
                    [ 17.089, 10.246] ,
                    [ 20.794, 9.949] ,
                    [ 24.606, 9.666] ,
                    [ 28.501, 9.396] ,
                    [ 32.454, 9.135] ,
                    [ 36.436, 8.879],
                    [40.432, 8.626]
                ]
            }
        ];


        $scope.exampleData3 = [
            {
                "key": "Flygt CP200-10",
                "values": [
                    [ 0, 8.928] ,
                    [ 2.545, 8.619] ,
                    [ 5.159, 8.318] ,
                    [ 7.873, 8.026] ,
                    [ 10.703, 7.748] ,
                    [ 13.655, 7.484] ,
                    [ 16.704, 7.234] ,
                    [ 19.836, 6.995] ,
                    [ 23.136, 6.766] ,
                    [ 26.291, 6.546] ,
                    [ 29.578, 6.331]
                ]
            },
            {
                "key": "NK 40-160/169",
                "values": [
                    [ 0.202, 11.925] ,
                    [3.442, 11.571] ,
                    [ 6.703, 11.222] ,
                    [ 10.048, 10.882] ,
                    [ 13.504, 10.557] ,
                    [ 17.089, 10.246] ,
                    [ 20.794, 9.949] ,
                    [ 24.606, 9.666] ,
                    [ 28.501, 9.396] ,
                    [ 32.454, 9.135] ,
                    [ 36.436, 8.879],
                    [40.432, 8.626]
                ]
            },


            {
                "key": "NKG 65-50-160/169",
                "values": [
                    [ 0.000, 9.999] ,
                    [ 4.392, 9.634] ,
                    [ 8.784, 9.291] ,
                    [ 13.313, 8.974] ,
                    [ 17.910, 8.681] ,
                    [ 22.644, 8.409] ,
                    [ 27.407, 8.150] ,
                    [ 32.231, 7.899] ,
                    [ 37.084, 7.650] ,
                    [ 41.897, 7.400] ,
                    [ 46.667, 7.145] ,
                    [51.469, 6.885]
                ]
            }
        ];


        $scope.exampleData = $scope.exampleData1

        $scope.xAxisTicksFunction = function () {
            console.log('xAxisTicksFunction');
            console.log(d3.svg.axis().ticks(d3.time.minutes, 5));
            return function (d) {
                return d3.svg.axis().ticks(d3.time.minutes, 5);
            }
        };

        $scope.show40 = function () {
            $scope.exampleData = $scope.exampleData2
        };

        $scope.show60 = function () {
            $scope.exampleData = $scope.exampleData3
        };
        $scope.xAxisTickFormatFunction = function () {
            return function (d) {
                return d3.time.format('%H:%M')($moment.unix(d).toDate());
            }
        };

    });
