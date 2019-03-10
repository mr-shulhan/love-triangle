/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  // your implementation
  var length = preferences.length; 
  var count = 0;  
  for (var i = 0; i<length; i++) { 
      var next = preferences[i] - 1;
      if (next == i) continue;
      var nextnext = preferences[next] - 1;
      if (next == nextnext) continue;
      var nextnextnext = preferences[nextnext] - 1;
      if (nextnextnext == nextnext) continue;
      if (nextnextnext == i) {
          count++;
      }
   }
   return count / 3;
};
