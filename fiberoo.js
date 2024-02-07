function fib() {
  const seq = [0, 1];

  for (let i = 2; i < 50; i++) {
    const nextFib = seq[i - 1] + seq[i - 2];
    seq.push(nextFib);
  }

  return seq;
}

function fibRec() {
  const numTerms = 50;
  const sequence = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    const nextFib = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextFib);
  }

  return sequence;
}

function numsToStrings(seq) {
  return seq.join(', ');
}

function numEvenNums(seq) {
  return seq.filter(num => num % 2 === 0);
}

console.log(fib());
console.log(fibRec());
console.log(numsToStrings(fib()));
console.log(numEvenNums(fib()));
