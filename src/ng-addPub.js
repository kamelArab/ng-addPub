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
        function compile(tElement, tAttrs, transclude) {
            return {
                pre: function preLink(scope, iElement, iAttrs, controller) {

                    scope.title = iAttrs.title || "Open" ;
                    if(angular.isDefined(iAttrs.addIconClass)){
                        scope.addIcon = true;
                        scope.addIconClass = iAttrs.addIconClass;
                    }
                },
                post: function postLink(scope, iElement, iAttrs, controller) {

                    var rigthPositionBody = iElement[0].children[1].offsetWidth
                    iElement[0].style.right ="-"+rigthPositionBody+"px"
                    var restHeigth = iElement[0].clientHeight -200 ;
                    iElement[0].children[0].style.marginTop =  restHeigth/2 +"px";
                    var classString = iElement[0].className;
                    scope.toggleOpen = function(){
                        var classString = iElement[0].className;
                        if(iElement[0].classList.contains('add-pub-open')){
                            nameIndex = classString.indexOf('add-pub-open');
                            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+'add-pub-open'.length +1) + 'add-pub-close';
                            iElement[0].className = classString

                        }else{
                            nameIndex = classString.indexOf('add-pub-close');
                            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+'add-pub-close'.length +1) + 'add-pub-open';
                            iElement[0].className = classString
                        }
                    }
                }
            }
        }
        return {
            restrict: 'E',
            replace: true,
            compile: compile,
            transclude: true,
            template: '<div class="addPub add-pub-close">' +
                        '<div class="header" ng-click="toggleOpen()"><ul><li ng-if="addIcon"><span class="{{addIconClass}}"></span><li ng-repeat= "l in title.split(\'\') track by $index">{{l}}</li></ul></div>' +
                        '<div class="body" > <div class="pre-scrollable"> <div ng-transclude></div></div></div>' +
                      '</div>'
        };
    });