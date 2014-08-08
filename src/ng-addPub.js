/**
 * Created with IntelliJ IDEA.
 * User: karab
 * Date: 06/08/14
 * Time: 18:54
 * To change this template use File | Settings | File Templates.
 */
angular.module('ng-addPub',[])

    .directive('addPub',
    function($compile, $document) {
        function link(scope, element,attrs) {
            scope.title = attrs.title || "Default";
            console.log("IN Link");
            var topWidthHeader = element[0].children[0].offsetWidth;
            console.log("topWidthHeader : "+ topWidthHeader);
            var topHeightHeader = element[0].children[0].offsetHeight;
            console.log("topHeightHeader : "+ topHeightHeader);
            var rigthPositionHeader = topWidthHeader/2-topHeightHeader/2
            console.log("rigthPositionBody : "+ rigthPositionBody);
            var rigthPositionBody = element[0].children[1].offsetWidth
            element[0].style.right ="-"+rigthPositionBody+"px"
            var classString = element[0].className

            scope.toggleOpen = function(){

                if(element[0].classList.contains('add-pub-open')){
                    nameIndex = classString.indexOf('add-pub-open');
                    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+'add-pub-open'+length +1) + 'add-pub-close';
                    element[0].className = classString

                }else{
                    nameIndex = classString.indexOf('add-pub-close');
                    classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+'add-pub-open'.length +1) + 'add-pub-open';
                    element[0].className = classString
                }
            }
        }
        return {
            restrict: 'E',
            replace: true,
            link: link,
            transclude: true,
            template: '<div class="addPub add-pub-close">' +
                        '<div class="header" ng-click="toggleOpen()"><ul><li ng-repeat= "l in title.split(\'\') track by $index">{{l}}</li></ul></div>' +
                        '<div class="body" > <div ng-transclude></div></div>' +
                      '</div>'
        };
    });