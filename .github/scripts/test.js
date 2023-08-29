const changedFiles = process.env.CHANGED_FILES.split(" ").filter(Boolean);
console.log(changedFiles);
console.log(process.env.CHANGED_FILES);
