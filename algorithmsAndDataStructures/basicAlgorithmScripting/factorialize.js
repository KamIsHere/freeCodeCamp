function factorialize(num) {
  var answer = 0;
for (var i = 1; i <= num; i++) {
answer *= i;
}

  return answer;
}

factorialize(5);