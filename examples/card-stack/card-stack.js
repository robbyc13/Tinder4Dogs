angular
    .module('card-stack-demo', ['gajus.swing'])
    .controller('card-stack-playground', function ($scope) {
         $scope.cards = [
            {name: 'small dog', symbol: '♣', age: '0'},
            {name: 'big dog', symbol: '♦', age: '10'},
            {name: 'med dog', symbol: '♥', age: '5'},
        ];

        $scope.swipeRight = [];
        $scope.swipeLeft = [];

        $scope.remove = function (eventObject) {
            var mostRecent = $scope.cards.pop();
            if(eventObject.throwDirection == 1 ) { 
                console.log("right");
                $scope.swipeRight.push(mostRecent.name);
            }
            else if(eventObject.throwDirection == -1 ) { 
                console.log("left");
                $scope.swipeLeft.push(mostRecent.name);
            }
            console.log($scope.swipeLeft + " :: LEFT " );
            console.log($scope.swipeRight + " :: RIGHT " );
        }

        $scope.add = function (name) {
            $scope.cards.push({name: name});
        };

        $scope.throwOut = function (eventName, eventObject) {
          $element = $element.closest('li[swing-card]:last');
          $element.addClass('animated rotateOutUpLeft');

          $timeout(function () {
            $scope.cards.splice(-1);
          }, 400);
        };

        $scope.throwoutleft = function (eventName, eventObject) {
            console.log('throwoutleft', eventObject);
        };

        $scope.throwoutright = function (eventName, eventObject) {
            console.log('throwoutright', eventObject);
        };

        $scope.throwin = function (eventName, eventObject) {
            console.log('throwin', eventObject);
            $scope.remove(eventObject);
            $scope.$digest();
            
        };

        $scope.dragstart = function (eventName, eventObject) {
            console.log('dragstart', eventObject);
        };

        $scope.dragmove = function (eventName, eventObject) {
            console.log('dragmove', eventObject);
        };

        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };


        $scope.options = {
            throwOutConfidence: function (offset, elementWidth) {
                console.log('throwOutConfidence', offset, elementWidth);            
                return Math.min(Math.abs(offset) / elementWidth, 1);
            },
            isThrowOut: function (offset, elementWidth, throwOutConfidence) {
                console.log('isThrowOut', offset, elementWidth, throwOutConfidence);
                return throwOutConfidence === 1;
            }
        };
    });
