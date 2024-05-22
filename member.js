function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'js/member/member.html',
    controller: 'MemberController',
    controllerAs: 'member',
    bindToController: true
  };
}