var detector = function() {

  this.tryGetChange = function(oldState, newState) {
      if(oldState.contents == newState.contents)
        return null;

      return {
        name: oldState.name,
        old: oldState.contents,
        new: newState.contents,
      };
  };

  this.find = function(stateName, state) {
    for(i = 0; i < state.length; ++i)
      if(state[i].name == stateName)
        return state[i];

    throw new Exception('Failed to find any state with name: ' + stateName);
  };

  this.diffState = function(oldState, newState) {
    var changes = [];
    oldState.forEach(function(state) {

      var correspondingNew = this.find(state.name, newState);

      var change = this.tryGetChange(state, correspondingNew);
      if(change !== null)
      {
        console.log('detected change for: ' + change.name);
        changes.push(change);
      }

    }, this);

    return changes;
  };
};

module.exports = detector;
