'use strict';

angular.module('bahmni.common.domain')
    .factory('dispositionService', ['$http', function ($http) {
        var getDispositionActions = function (defaultLocale) {
            return $http.get(Bahmni.Common.Constants.conceptSearchByFullNameUrl +
                "&name=" + Bahmni.Common.Constants.dispositionConcept +
                "&v=custom:(uuid,name,answers:(uuid,name,mappings))", defaultLocale, {cache: true});
        };

        var getDispositionNoteConcept = function () {
            return $http.get(Bahmni.Common.Constants.conceptSearchByFullNameUrl +
                "&name=" + Bahmni.Common.Constants.dispositionNoteConcept +
                "&v=custom:(uuid,name:(name))", {cache: true});
        };

        var getDispositionByVisit = function (visitUuid, defaultLocale) {
            return $http.get(Bahmni.Common.Constants.bahmniDispositionByVisitUrl, {
                params: {
                    visitUuid: visitUuid,
                    preferredLocale: defaultLocale
                }
            });
        };

        var getDispositionByPatient = function (patientUuid, numberOfVisits, defaultLocale) {
            return $http.get(Bahmni.Common.Constants.bahmniDispositionByPatientUrl, {
                params: {
                    patientUuid: patientUuid,
                    numberOfVisits: numberOfVisits,
                    locale: defaultLocale
                }
            });
        };

        return {
            getDispositionActions: getDispositionActions,
            getDispositionNoteConcept: getDispositionNoteConcept,
            getDispositionByVisit: getDispositionByVisit,
            getDispositionByPatient: getDispositionByPatient
        };
    }]);
