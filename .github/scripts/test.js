const changedFiles = process.env.CHANGED_FILES.split("\n").filter(Boolean);
console.log(changedFiles);
