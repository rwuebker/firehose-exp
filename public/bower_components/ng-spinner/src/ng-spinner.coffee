###
ng-spinner.coffee
Copyright (C) 2014 Jeremy Smith <jeremy@superplussed.com>

Distributed under terms of the MIT license.
###

angular.module('ng-spinner', [])
  .directive "ngSpinner", ->
    restrict: "AE"
    replace: true
    link: (scope, element, attrs) ->
      opts = 
        lines: attrs["spinnerLinks"] || 17
        length: attrs["spinnerLength"] || 0
        width: attrs["spinnerWidth"] || 3
        radius: attrs["spinnerRadius"] || 5
        corners: attrs["spinnerCorners"] || 1
        rotate: attrs["spinnerRotate"] || 0
        direction: attrs["spinnerDirection"] || 1
        color: attrs["spinnerColor"] || '#FFF'
        speed: attrs["spinnerSpeed"] || 1.3
        trail: attrs["spinnerTrail"] || 17
        shadow: attrs["spinnerShadow"] || false
        hwaccel: attrs["spinnerHwaccel"] || true
        className: attrs["spinnerClassName"] || 'spinner'
        zIndex: attrs["spinnerZIndex"] || 2e9
        top: attrs["spinnerTop"] || 'auto'
        left: attrs["spinnerLeft"] || 'auto'
        
      spinner = new Spinner(opts).spin()
      angular.element(element).append(spinner.el)

