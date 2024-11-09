function sortStudents(students) {
  return students.sort((a, b) => {
    const totalA = a.biology + a.chemistry;
    const totalB = b.biology + b.chemistry;
    if (totalA !== totalB) {
      return totalB - totalA; // Higher total marks first
    }

    if (a.biology !== b.biology) {
      return b.biology - a.biology; // Higher biology marks first
    }

    const [aDay, aMonth, aYear] = a.dob.split("-").map(Number);
    const [bDay, bMonth, bYear] = b.dob.split("-").map(Number);
    return (
      bYear * 10000 +
      bMonth * 100 +
      bDay -
      (aYear * 10000 + aMonth * 100 + bDay)
    );
  });
}

const testCase1 = [];

const testCase2 = [];

const sortedTestCase1 = sortStudents(testCase1);
const sortedTestCase2 = sortStudents(testCase2);

console.log(sortedTestCase1);
console.log(sortedTestCase2);
